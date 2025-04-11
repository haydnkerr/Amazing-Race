import React from "react";
import Header from "./Header";
import Btn from "./Btn";

function ChallengeTemplate(props) {

    return <div className="challenge-container">
        <Header />
        <div className="challenge-card-container inner-top">
        <div className="inner-challenge-card " style={{backgroundColor: props.bgColor}}>
        <h1>{props.heading}</h1>
            <div className="heading-imgs-container">
            <div className="single-img-container">
                <img src="/scissors-icon.png"></img>
                </div>
                <div className="single-img-container">
                    <img src="/paper-icon.png"></img>
                </div>
                
                <div className="single-img-container">
                <img src="/rock-icon.png"></img>
                </div>
            </div>
        </div>

        </div>
        <div className="challenge-card-container">
            <div className="inner-challenge-card inner-bottom">
            <p>{props.description}</p>
            <Btn class="complete-btn" text="Complete" />
            <button className="complete-btn" value={props.value}>Complete</button>
            </div>
        
        </div>
        <div>
        
        </div>
        
    </div>
};

export default ChallengeTemplate;