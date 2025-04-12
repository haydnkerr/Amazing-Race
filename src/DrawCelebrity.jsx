import React from 'react';
import ChallengeTemplate from './ChallengeTemplate';

function DrawCelebrity() {
    return <ChallengeTemplate 
    heading="Famous Faces" 
    sourceOne="/Amazing-Race/pencil-icon.png"
    sourceTwo="/Amazing-Race/celebrity-icon.png"
    sourceThree="/Amazing-Race/guess-icon.png"
    bgColor="#ba5b34"
    description="Select one team member to draw a celebrity of your choice. They’ll then need to ask a passerby to guess who the celebrity is, with absolutely no hints! If the passerby doesn’t guess correctly on the first try, you’ll need to find someone else."
    value="4"
    />;
};

export default DrawCelebrity;