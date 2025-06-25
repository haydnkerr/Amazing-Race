import { useState, useEffect } from "react";
import "./App.css";
import KeycodeDisplay from "./keycodeDisplay";
import { Link } from "react-router-dom";
import Envelope from "./envelope";
import ChallengeTemplate from "./ChallengeTemplate";
import Codebreakers from "./codebreakers";
import PuzzleKey from "./puzzleKey";
import Btn from "./Btn";

function App() {
  const puzzleKey = 3171249;
  const [firstPuzzle, setFirstPuzzle] = useState(() => {
    const storedValue = localStorage.getItem("firstPuzzle");
    return storedValue !== null ? JSON.parse(storedValue) : true;
  });
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [openChallenge, setOpenChallenge] = useState(false);
  const [homeScreen, setHomeScreen] = useState(true);
  const [amazingRace, setAmazingRace] = useState(false);
  const [localChallenge, setLocalChallenge] = useState(false);
  const [gameLevel, setGameLevel] = useState(1);
  const [keysAmount, setKeysAmount] = useState(1);
  const [correctCode, setCorrectCode] = useState("3");
  const [bgColor, setBgColor] = useState("#242424");
  const [activeEnvelopes, setActiveEnvelopes] = useState([
    { active: true, complete: true },
    { active: false, complete: false },
    { active: false, complete: false },
    { active: false, complete: false },
    { active: false, complete: false },
    { active: false, complete: false },
    { active: false, complete: false },
    { active: false, complete: false },
  ]);

  const pages = [
    { path: "/ChallengePerson", active: true },
    { path: "/DrawPerson", active: false },
    { path: "/DrawCelebrity" },
    { path: "/FinalRiddle" },
    { path: "/CodeBreakersSolo" },
    { path: "/RubixCube" },
    { path: "/DogSelfie" },
  ];

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
      12: "398926174283",
    };
    return codes[level] || "000000000";
  }

  function firstPuzzleComplete() {
    setFirstPuzzle(false);
  }

  function clearFirstPuzzle() {
    setFirstPuzzle(true);
  }

  useEffect(() => {
    localStorage.setItem("firstPuzzle", JSON.stringify(firstPuzzle));
  }, [firstPuzzle]);

  function updateEnvelope(index) {
    if (openChallenge) {
      setOpenChallenge(false);
    } else {
      setOpenChallenge(true);
    }
  }

  function openSurvivorChallenge() {
    if (localChallenge) {
      setLocalChallenge(false);
      setHomeScreen(true);
    } else {
      setLocalChallenge(true);
      setHomeScreen(false);
    }
  }

  function openAmazingRace() {
    console.log("click Amazing");
    if (amazingRace) {
      setAmazingRace(false);
      setHomeScreen(true);
    } else {
      setAmazingRace(true);
      setHomeScreen(false);
    }
  }

  function handleClick(index) {
    setCurrentChallenge((prev) => prev + 1);
    setOpenChallenge(false);
    setActiveEnvelopes((prevPages) =>
      prevPages.map((page, i) =>
        i === index ? { ...page, active: true } : page
      )
    );
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
      setBgColor("green");
    } else {
      console.log("Not yet.");
      setBgColor("red");
    }
    setTimeout(() => {
      setBgColor("#242424");
    }, 200);
  };

  let content;

  if (firstPuzzle && !localChallenge) {
    content = (
      <PuzzleKey
        firstPuzzleComplete={firstPuzzleComplete}
        onClick={openAmazingRace}
      />
    );
  } else if (!openChallenge && !localChallenge) {
    content = (
      <section className="home-btns-container">
        {activeEnvelopes.map(({ complete, active }, index) => (
          <Envelope
            key={index}
            className={`home-btn ${
              currentChallenge == index ? "active-home-btn" : ""
            }`}
            state={{ level: currentChallenge }}
            onClick={
              active && currentChallenge == index
                ? () => updateEnvelope(index)
                : undefined
            }
          />
        ))}

        <button class="complete-btn no-border" onClick={clearFirstPuzzle}>
          Restart
        </button>
      </section>
    );
  } else if (!openChallenge && localChallenge) {
    content = (
      <>
        <Codebreakers onClick={openSurvivorChallenge} />
      </>
    );
  } else if (currentChallenge === 0) {
    content = (
      <ChallengeTemplate
        heading="Ultimate Game Showdown"
        bgColor="#94b14f"
        description="Find a stranger and challenge them to a game of your choosing. Once a team member wins two out of three rounds they're done. Three team members must face a new opponent, and no game type can be repeated across your team!"
        value="2"
        sourceOne="/Amazing-Race/scissors-icon.png"
        sourceTwo="/Amazing-Race/paper-icon.png"
        sourceThree="/Amazing-Race/rock-icon.png"
        onClick={() => handleClick(1)}
        handleBack={updateEnvelope}
      />
    );
  } else if (currentChallenge === 1) {
    content = (
      <ChallengeTemplate
        heading="Can I Pat That Dog?"
        sourceOne="/Amazing-Race/phone-icon.png"
        sourceTwo="/Amazing-Race/dog-icon.png"
        sourceThree="/Amazing-Race/beach-icon.png"
        bgColor="#4489ce"
        description="Where there's a beach, there's a dog. At this location three team members must take a selfie with a different dog. Bonus points if you remember the dogs names."
        value="1"
        onClick={() => handleClick(2)}
        handleBack={updateEnvelope}
      />
    );
  } else if (currentChallenge === 2) {
    content = (
      <ChallengeTemplate
        heading="Famous Faces"
        sourceOne="/Amazing-Race/pencil-icon.png"
        sourceTwo="/Amazing-Race/celebrity-icon.png"
        sourceThree="/Amazing-Race/guess-icon.png"
        bgColor="#ba5b34"
        description="Select one team member to draw a celebrity of your choice. They’ll then need to ask a passerby to guess who the celebrity is, with absolutely no hints! If the passerby doesn’t guess correctly on the first try, you’ll need to find someone else."
        value="1"
        onClick={() => handleClick(3)}
        handleBack={updateEnvelope}
      />
    );
  } else if (currentChallenge === 3) {
    content = (
      <ChallengeTemplate
        heading="Paper Plane Derby"
        sourceOne="/Amazing-Race/paperplane-icon.png"
        sourceTwo="/Amazing-Race/plate-icon.png"
        sourceThree="/Amazing-Race/handshake-icon.png"
        bgColor="#94b14f"
        description="Have a team member stand on each plate of a baseball diamond. Starting from home one person must throw a paper airplane to first base within three throws. Then that person will throw to second and so on until you score a homerun. If you don't get there in three throws you must start from the beginning. If the fields are all taken, make your own field."
        value="1"
        onClick={() => handleClick(4)}
        handleBack={updateEnvelope}
      />
    );
  } else if (currentChallenge === 4) {
    content = (
      <ChallengeTemplate
        heading="Draw and Deal"
        sourceOne="/Amazing-Race/pencil-icon.png"
        sourceTwo="/Amazing-Race/face-icon.png"
        sourceThree="/Amazing-Race/money-canvas.png"
        bgColor="#4489ce"
        description="Team members have to draw a passerby in exchange for an item or money (paperclip, gum etc.) The catch is that the person being drawn must agree to accept the artwork and give something in return! Be sure to take a photo of the person with their sketch."
        value="1"
        onClick={() => handleClick(5)}
        handleBack={updateEnvelope}
      />
    );
  } else if (currentChallenge === 5) {
    content = (
      <ChallengeTemplate
        heading='Peace, Love & "Harmony"'
        sourceOne="/Amazing-Race/peace-icon.png"
        sourceTwo="/Amazing-Race/heart-icon.png"
        sourceThree="/Amazing-Race/puzzle-icon.png"
        image="/Amazing-Race/lady.webp"
        bgColor="#ba5b34"
        description="Within the confines of a fence, fueled by laughter and play. 
    You'll find children of plenty, in chaos, perhaps dismay. At the feet of a female statue, that watches over this place. Complete the puzzle you chose, at the start of this race. *A hint is in the name"
        value="1"
        onClick={() => handleClick(6)}
        handleBack={updateEnvelope}
      />
    );
  } else if (currentChallenge === 6) {
    content = (
      <ChallengeTemplate
        heading="Café Roblox"
        sourceOne="/Amazing-Race/coffee-icon.png"
        sourceTwo="/Amazing-Race/chopsticks-icon.png"
        sourceThree="/Amazing-Race/dice-icon.png"
        bgColor="#ba5b34"
        description="I gave up making more riddles. Run to the Picnic House. Using the chopsticks provided stack all 6 dice in a single tower formation. One side of the tower must show 1, 2, 3, 4, 5, 6 from bottom to top."
        value="1"
        onClick={() => handleClick(7)}
        handleBack={updateEnvelope}
      />
    );
  } else if (currentChallenge === 7) {
    content = (
      <ChallengeTemplate
        heading="The Home Stretch"
        sourceOne="/Amazing-Race/beer-icon.png"
        sourceTwo="/Amazing-Race/garage-icon.png"
        sourceThree="/Amazing-Race/run-icon.png"
        bgColor="#94b14f"
        description="With brain and braun, plus some artistic flair. You're nearing the end, of this wonderous affair. Like a fish on the line, luck decides your fate. Where your journey began, some beans await."
        value="1"
        onClick={() => handleClick(8)}
        handleBack={updateEnvelope}
      />
    );
  } else {
    content = <p>There's no more!</p>;
  }

  return (
    <>
      {homeScreen ? (
        <div className="double-div-container">
          <Btn
            class="complete-btn go-back-btn"
            text="Codebreakers"
            onClick={openSurvivorChallenge}
          />
          <Btn
            class="complete-btn go-back-btn"
            text="Amazing Race"
            onClick={openAmazingRace}
          />
        </div>
      ) : null}
      {localChallenge ? content : null}
      {amazingRace ? content : null}
    </>
  );
}

export default App;
