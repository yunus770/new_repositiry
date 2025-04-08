import React, {useState} from "react";

function App() {
 
     
    const [likes, setLikes] = useState(5)
   
         
   function kopelyan (){
     setLikes (likes + 1) 
   }

      function azalyan () {
       setLikes (likes - 1) 
      }  
     return (
         
    <div className="App">
      <h1>{likes} </h1>
      <button onClick={kopelyan}>Kopeltmek</button>
      <button onClick={azalyan}>Azaltmak</button>
    </div> 
     
  );
}

export default App;
