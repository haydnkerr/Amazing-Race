import { useState, useEffect } from "react";
import "./App.css";
import KeycodeDisplay from "./keycodeDisplay";
import { Link } from 'react-router-dom';
import Envelope from "./envelope";
import ChallengeTemplate from "./ChallengeTemplate";



function App() {
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [openChallenge, setOpenChallenge] = useState(false)
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
    { active: false, complete: false }
  ])

  const pages = [
    { path: "/ChallengePerson", active: true },
    { path: "/DrawPerson", active: false  },
    { path: "/DrawCelebrity" },
    { path: "/FinalRiddle" },
    { path: "/Coodbreakers" },
    { path: "/CodeBreakersSolo" },
    { path: "/RubixCube" },
    { path: "/DogSelfie" }
  ];

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

  function updateEnvelope(index){
    if (openChallenge) {
      setOpenChallenge(false)
    } else {
      setOpenChallenge(true)
    }
    
  }



  function handleClick(index) {
    setCurrentChallenge(prev => prev + 1)
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
      setBgColor('green');
      
    } else {
      console.log("Not yet.");
      setBgColor('red');
    }
    setTimeout(() => {
      setBgColor("#242424")
    }, 200)
  };

  let content;

if (!openChallenge) {
  content = (
    <section className="home-btns-container">
      {activeEnvelopes.map(({ complete, active }, index) => (
        <Envelope
          key={index}
          className={`home-btn ${currentChallenge == index ? "active-home-btn" : ""}`}
          state={{ level: currentChallenge }}
          onClick={active && currentChallenge == index ? () => updateEnvelope(index) : undefined}
        />
      ))}
    </section>
  );
} else if (currentChallenge === 0) {
  content = (
    <ChallengeTemplate
      heading="Ultimate Game Showdown"
      bgColor="#94b14f"
      description="Find a stranger and challenge them to a game of your choosing. The first team member to win two out of three rounds moves on. Each team member must face a new opponent, and no game type can be repeated across your team!"
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
      heading="Draw and Deal"
      sourceOne="/Amazing-Race/pencil-icon.png"
      sourceTwo="/Amazing-Race/face-icon.png"
      sourceThree="/Amazing-Race/money-canvas.png"
      bgColor="#4489ce"
      description="Team members have to draw a passerby in exchange for an item or money. The catch is that the person being drawn must agree to accept the artwork and give something in return! Be sure to take a photo of the person with their sketch."
      value="1"
      onClick={() => handleClick(2)}
      handleBack={updateEnvelope}
    />
  );
} else if (currentChallenge === 2) {
  content = (
    <ChallengeTemplate
    heading="Can I Pat That Dog?" 
    sourceOne="/Amazing-Race/phone-icon.png"
    sourceTwo="/Amazing-Race/dog-icon.png"
    sourceThree="/Amazing-Race/beach-icon.png"
    bgColor="#94b14f"
    description="Where there's a beach, there's a dog. At this location each team member much take a selfie with a different dog. Record their name on the list below."
      value="1"
      onClick={() => handleClick(3)}
      handleBack={updateEnvelope}
    />
  );
} else if (currentChallenge === 3) {
  content = (
    <ChallengeTemplate
    heading="Famous Faces" 
    sourceOne="/Amazing-Race/pencil-icon.png"
    sourceTwo="/Amazing-Race/celebrity-icon.png"
    sourceThree="/Amazing-Race/guess-icon.png"
    bgColor="#ba5b34"
    description="Select one team member to draw a celebrity of your choice. They’ll then need to ask a passerby to guess who the celebrity is, with absolutely no hints! If the passerby doesn’t guess correctly on the first try, you’ll need to find someone else."
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
      description="Team members have to draw a passerby..."
      value="1"
      onClick={() => handleClick(5)}
      handleBack={updateEnvelope}
    />
  );
} else if (currentChallenge === 5) {
  content = (
    <ChallengeTemplate
      heading="Draw and Deal"
      sourceOne="/Amazing-Race/pencil-icon.png"
      sourceTwo="/Amazing-Race/face-icon.png"
      sourceThree="/Amazing-Race/money-canvas.png"
      bgColor="#4489ce"
      description="Team members have to draw a passerby..."
      value="1"
      onClick={() => handleClick(6)}
      handleBack={updateEnvelope}
    />
  );
} else if (currentChallenge === 6) {
  content = (
    <ChallengeTemplate
    heading="The Home Stretch" 
    sourceOne="/Amazing-Race/beer-icon.png"
    sourceTwo="/Amazing-Race/garage-icon.png"
    sourceThree="/Amazing-Race/run-icon.png"
    bgColor="#94b14f"
    description={
      <>
        Where engines rumble and tools are stored,
        A place with drinks where friends are adored.
        It’s not a car, but the name you seek,
        A <strong>Garage</strong> for brews, where laughter’s unique.
        At the final stop, a jar you'll see,
        Guess the beans inside, and victory’s key.
      </>
    }
    
value="1"
      onClick={() => handleClick(7)}
      handleBack={updateEnvelope}
    />
  );
} else {
  content = <p>Unknown challenge!</p>;
}

return <>{content}</>;
}

export default App;
