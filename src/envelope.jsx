import React from 'react';

function Envelope(props) {

    return <button className={props.className} onClick={props.onClick}>
    <div className="home-btn-title">
      <h3>Brooklyn</h3>
      <h2>Race</h2>
    </div>
    </button>
};

export default Envelope