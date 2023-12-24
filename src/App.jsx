import { useState } from "react";
import viteLogo from "/vite.svg";
import useSound from 'use-sound';
import song from './assets/song.mp3'
import "./App.css";
import GiftBoxAnimation from "./GiftBoxAnimation";

function App() {
  const [state, setState] = useState(false);

  
  const [playSound, {stop}] = useSound(song, {volume: 0.25});
  

  const changeState = () => {
    if(!state){
      setState(true);
    }else{
      setState(false);
    }
  }

  const handleEvent = () => {
    changeState();
    if(!state){
      playSound();
    }else{
      stop();
    }
   

   
  }

  return (
    <>
      {state === false ? <h1>hola</h1> : <GiftBoxAnimation />}
      <button onClick={handleEvent}></button>
    </>
  );
}

export default App;
