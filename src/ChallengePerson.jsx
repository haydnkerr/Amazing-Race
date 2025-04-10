import React from 'react';
import ChallengeTemplate from './ChallengeTemplate';

function ChallengePerson() {
    return <ChallengeTemplate 
    heading="Ultimate Game Showdown" 
    bgColor="#94b14f"
    description="Find a stranger and challenge them to a game of your choosing. The first team member to win two out of three rounds moves on. Each team member must face a new opponent, and no game type can be repeated across your team!"
    value="2"
    />;
}

export default ChallengePerson;