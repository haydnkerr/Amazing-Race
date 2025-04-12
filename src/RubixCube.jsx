import React from 'react';
import ChallengeTemplate from './ChallengeTemplate';

function RubixCube() {
    return <ChallengeTemplate 
    heading="Ultimate Game Showdown" 
    sourceOne="/Amazing-Race/cube-icon.png"
    sourceTwo="/Amazing-Race/puzzle-icon.png"
    sourceThree="/Amazing-Race/guess-icon.png"
    bgColor="#94b14f"
    description="Find a stranger and challenge them to a game of your choosing. The first team member to win two out of three rounds moves on. Each team member must face a new opponent, and no game type can be repeated across your team!"    />;
}

export default RubixCube;