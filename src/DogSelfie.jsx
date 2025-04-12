import React from 'react';
import ChallengeTemplate from './ChallengeTemplate';

function DogSelfie() {
    return <ChallengeTemplate 
    heading="Can I Pat That Dog?" 
    sourceOne="/Amazing-Race/phone-icon.png"
    sourceTwo="/Amazing-Race/dog-icon.png"
    sourceThree="/Amazing-Race/beach-icon.png"
    bgColor="#94b14f"
    description="Where there's a beach, there's a dog. At this location each team member much take a selfie with a different dog. Record their name on the list below."
    />;
}

export default DogSelfie;