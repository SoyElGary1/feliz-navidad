import { useState } from "react";
import useSound from "use-sound";
import song from "./assets/song.mp3";
import "./App.css";
import GiftBoxAnimation from "./GiftBoxAnimation";
import { Home } from "./Home";

function App() {
  const [state, setState] = useState(false);

  const [playSound, { stop }] = useSound(song, { volume: 0.25 });

  const changeState = () => {
    if (!state) {
      setState(true);
    } else {
      setState(false);
      stop();
    }
  };

  const handleEvent = () => {
    changeState();
    if (!state) {
      playSound();
    } else {
      stop();
    }
  };

  return (
    <>
      <div className="backgorund">
        {state === false ? (
          <button className="button" onClick={handleEvent}>
            Un Regalito
          </button>
        ) : (
          <button className="button" onClick={changeState}>
            Feliz Navidad Gatita Linda
          </button>
        )}
        {state === false ? <Home /> : <GiftBoxAnimation />}
      </div>
    </>
  );
}

export default App;
