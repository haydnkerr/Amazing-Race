import React from 'react';
import ChallengeTemplate from './ChallengeTemplate';

function DrawPerson() {
    return <ChallengeTemplate 
    heading="Draw and Deal" 
    sourceOne="/Amazing-Race/pencil-icon.png"
    sourceTwo="/Amazing-Race/face-icon.png"
    sourceThree="/Amazing-Race/money-canvas.png"
    bgColor="#4489ce"
    description="Team members have to draw a passerby in exchange for an item or money. The catch is that the person being drawn must agree to accept the artwork and give something in return! Be sure to take a photo of the person with their sketch."
    value="1"
    />;
}

export default DrawPerson;