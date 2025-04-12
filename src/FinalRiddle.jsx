import React from 'react';
import ChallengeTemplate from './ChallengeTemplate';

function FinalRiddle() {
    return <ChallengeTemplate 
    heading="The Home Stretch" 
    sourceOne="/Amazing-Race/beer-icon.png"
    sourceTwo="/Amazing-Race/garage-icon.png"
    sourceThree="/Amazing-Race/run-icon.png"
    bgColor="#94b14f"
    description="Where engines rumble and tools are stored,
A place with drinks where friends are adored.
It’s not a car, but the name you seek,
A <strong>Garage</strong> for brews, where laughter’s unique.
At the final stop, a jar you'll see,
Guess the beans inside, and victory’s key."
    value="3"
    />;
}

export default FinalRiddle;