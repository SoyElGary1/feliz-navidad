import React, { useReducer } from "react";
import "./GiftBotAnimation.css"
import box from "./images/box2.png";
import boxLid from "./images/box-lid2.png";
import gala from "./images/gala2.png";
// import ConfettiGenerator from "./CanvasConfetti";
import Confetti from "./confetti/Confetti";

const init_state = {
  move: "move",
  jump: "",
  rotated: "",
  rotating: ""
};
export default function GiftBoxAnimation() {
  const [state, setState] = useReducer(
    (state, new_state) => ({
      ...state,
      ...new_state
    }),
    init_state
  );
  
  
  const { move, rotating, rotated, jump } = state;

  function animate() {
    let isDone = rotated === "rotated" ? true : false;

    if (!isDone) {
      setState({ rotating: "rotating" });
      setTimeout(() => {
        setState({ jump: "jump" });
      }, 300);
      setTimeout(() => {
        setState({ rotated: "rotated" });
      }, 1000);
    } else {
      setState(init_state);
    }
    let moving = move === "move" ? "" : "move";
    setState({ move: moving });
  }


  return (
    <div className="App">
      <Confetti open={jump === "jump"} />
      <div className="img-container">

          <img className={`gala ${jump}`} 
               src={gala} alt="gala" />
        <button className="box" 
                onClick={() => animate()}>
          <img src={box} 
               alt="box" />
        </button>
        <img
          className={`lid ${move} ${rotating} ${rotated}`}
          src={boxLid}
          alt="box-lid"
        />
      </div>
    </div>
  );
}
