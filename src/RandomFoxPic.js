import React, {useState, useEffect} from 'react';
function App() {
      let [foxImage, setfoxImage] = useState(null)

  useEffect(() => {
    fetch("https://randomfox.ca/floof/")
    .then(response => response.json())
        
    .then(data => setfoxImage(data))
  },[])
  console.log(foxImage);
  return (
    <div style={{textAlign:'center'}}>
     <h1>Random Picture of Fox</h1>
    {foxImage && <img src={foxImage.image} height={400} width={400}></img>}
    </div>
  );
}

export default App;