import { useState, useEffect } from "react";
import "./App.css";
import KeycodeDisplay from "./keycodeDisplay";
import Btn from "./Btn";


function PuzzleKey(props) {
  const [gameLevel, setGameLevel] = useState(1);
  const [keysAmount, setKeysAmount] = useState(7);
  const [correctCode, setCorrectCode] = useState('3171249');
  const [bgColor, setBgColor] = useState("#242424")

  const puzzleKey = '3171249';

  function handleClick() {
    props.onClick()
  }


  useEffect(() => {
    console.log("New Correct Code:", correctCode);
  }, [keysAmount]);

  const checkWinner = (userCode) => {
    console.log("Checking:", userCode, "against", correctCode);    
    if (userCode === correctCode) {
      console.log("Winner!");
      setBgColor('green');
      props.firstPuzzleComplete()
      
    } else {
      console.log("Not yet.");
      setBgColor('red');
    }
    setTimeout(() => {
      setBgColor("#242424")
    }, 200)
  };

  return (
    <>
    <div className="main" style={{backgroundColor: bgColor}}>
      <KeycodeDisplay keysAmount={keysAmount} correctCode={correctCode} checkWinner={checkWinner} />
      <Btn class="complete-btn go-back-btn no-border" text="Go Back" onClick={handleClick} />
    </div>

    </>

  );
}

export default PuzzleKey;