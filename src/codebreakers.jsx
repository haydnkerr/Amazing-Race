import { useState, useEffect } from "react";
import "./App.css";
import KeycodeDisplay from "./keycodeDisplay";
import Btn from "./Btn";


function Codebreakers(props) {
  const [gameLevel, setGameLevel] = useState(1);
  const [keysAmount, setKeysAmount] = useState(1);
  const [correctCode, setCorrectCode] = useState("3");
  const [bgColor, setBgColor] = useState("#242424")

  function getPredefinedCode(level) {
    const codes = {
      1: "1",
      2: "33",
      3: "591",
      4: "8234",
      5: "26785",
      6: "137942",
      7: "8642379",
      8: "31269675",
      9: "198245418",
      10: "5473821693",
      11: "48152216258",
      12: "398926174283"
    };
    return codes[level] || "000000000"; 
  }

  function handleClick() {
    props.onClick()
  }

  useEffect(() => {
    setCorrectCode(getPredefinedCode(keysAmount));
    if (gameLevel === 13) {
      alert("You Win!!")
    }
  }, [keysAmount]);

  const checkWinner = (userCode) => {
    console.log("Checking:", userCode, "against", correctCode);    
    if (userCode === correctCode) {
      console.log("Winner!");
      setGameLevel((prev) => prev + 1);
      setKeysAmount((prev) => prev + 1);
      setBgColor('green');
  
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

export default Codebreakers;