import React, { useState } from "react";
import { element, knopka } from "./components/UI";
import Greeting from "./components/greeting";
import Greting from "./components/greting";
import Button from './components/handleClick'
import './components/greeting';
function App() {

  const handleClick = () => {
    alert("Knopka basyldy!");
  };
 const [likes, setLikes] = useState(5)

  function kopelyan() {
    setLikes(likes + 1)
  }

  function azalyan() {
    setLikes(likes - 1)
  }

  return (
    <div className="App">
      <Greeting name='Yunus' />
      <Greting name='Yunus' />
      <h1>{likes} </h1>
      <button onClick={kopelyan}>Kopeltmek</button>
      <button onClick={azalyan}>Azaltmak</button>
      <h2>{element}</h2>
      <b>{knopka}</b>
      <h1>
      <Button text="Click Me" onClick={handleClick} />
      <Button text="Cancel" onClick={() => console.log("Cancel clicked")} />
    </h1>
    </div>
  );
}

export default App;
