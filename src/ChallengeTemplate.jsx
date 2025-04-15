import React from "react";
import Header from "./Header";
import Btn from "./Btn";
import { useNavigate, useLocation } from 'react-router-dom';

function ChallengeTemplate(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const level = location.state?.level;


  const handleComplete = () => {
    props.onClick();
  };

  const handleBack = () => {
    props.handleBack();
  };

    return <div className="challenge-container">
        <div className="challenge-card-container inner-top">
        <div className="inner-challenge-card " style={{backgroundColor: props.bgColor}}>
        <h1>{props.heading}</h1>
            <div className="heading-imgs-container">
            <div className="single-img-container">
                <img src={props.sourceOne}></img>
                </div>
                <div className="single-img-container">
                    <img src={props.sourceTwo}></img>
                </div>
                
                <div className="single-img-container">
                <img src={props.sourceThree}></img>
                </div>
            </div>
        </div>

        </div>
        <div className="challenge-card-container">
            <div className="inner-challenge-card inner-bottom">
            <p>{props.description}</p>
            <div className="btn-container">
            <div className="double-btn-continer">
            <Btn class="complete-btn go-back-btn" text="Go Back" onClick={handleBack}  />
            <Btn class="complete-btn" text="Complete" onClick={handleComplete} />
            </div>
            
            
            </div>

            </div>
        
        </div>
        <div>
        
        </div>
        
    </div>
};

export default ChallengeTemplate;