import { useState, useEffect } from "react";
import "./App.css";
import KeycodeDisplay from "./keycodeDisplay";
import { Link } from 'react-router-dom';



function App() {
  const [gameLevel, setGameLevel] = useState(1);
  const [keysAmount, setKeysAmount] = useState(1);
  const [correctCode, setCorrectCode] = useState("3");
  const [bgColor, setBgColor] = useState("#242424")

  function getPredefinedCode(level) {
    const codes = {
      1: "3",
      2: "73",
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

  useEffect(() => {
    setCorrectCode(getPredefinedCode(keysAmount));
    console.log("New Correct Code:", correctCode);
    console.log("New color:", bgColor);
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
    <section className="home-btns-container">
    <Link className="home-btn" to="/ChallengePerson">
    <div className="home-btn-title">
      <h3>The Amazing</h3>
      <h2>Race</h2>
    </div>
    </Link>
    <Link className="home-btn" to="/DrawPerson">
    <div className="home-btn-title">
      <h3>The Amazing</h3>
      <h2>Race</h2>
    </div>
    </Link>
    <Link className="home-btn" to="/DrawCelebrity">
    <div className="home-btn-title">
      <h3>The Amazing</h3>
      <h2>Race</h2>
    </div>
    </Link>
    <Link className="home-btn" to="/FinalRiddle">
    <div className="home-btn-title">
      <h3>The Amazing</h3>
      <h2>Race</h2>
    </div>
    </Link>
    <Link className="home-btn" to="/Coodbreakers">
    <div className="home-btn-title">
      <h3>The Amazing</h3>
      <h2>Race</h2>
    </div>
    </Link>
    <Link className="home-btn" to="/CodeBreakersSolo">
    <div className="home-btn-title">
      <h3>The Amazing</h3>
      <h2>Race</h2>
    </div>
    </Link>
    </section>
    </>

  );
}

export default App;
