import { useEffect, useState } from "react";

function KeycodeDisplay(props) {
    const [userChoices, setUserChoices] = useState(Array(props.keysAmount).fill('_'));
    const [numOfChoices, setNumOfChoices] = useState(0);

    function handleClick(e) {
        const clickValue = e.target.value;
        setUserChoices((prev) => {
            const updated = [...prev];
            const emptyKey = updated.findIndex(key => key === '_');
            if (emptyKey !== -1) updated[emptyKey] = clickValue;
            return updated;
        });
        setNumOfChoices(prev => prev + 1);
    }

    useEffect(() => {
        setUserChoices(Array(props.keysAmount).fill('_'));
        setNumOfChoices(0);
    }, [props.keysAmount]);

    useEffect(() => {
        if (numOfChoices === props.keysAmount) {
            const newVal = userChoices.join('');
            
            
            setNumOfChoices(0);
            setTimeout(() => {
                props.checkWinner(newVal);
                setUserChoices(Array(props.keysAmount).fill('_'));
            }, 200)
        }
    }, [numOfChoices]);

    const backspaceEvent = () => {
        if (numOfChoices > 0) {
            console.log(userChoices[numOfChoices - 1])
            console.log(userChoices)
            userChoices[numOfChoices - 1] = "_" 
            setNumOfChoices(prev => prev - 1);
        }

    };

    useEffect

    return (
        <>
        <div className="guess-input-container">
            {userChoices.map((choice, index) => (
                <div className="guess-input" key={index}>{choice}</div>
            ))}
        </div>

        <div className="numpad">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                <button className="keypad-btn" key={num} value={num} onClick={handleClick}>{num}</button>
            ))}
        </div>
        <button className="backspace-btn" onClick={backspaceEvent}>Backspace</button>
        </>
    );
}

export default KeycodeDisplay;
