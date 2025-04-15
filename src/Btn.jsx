import React from "react";

function Btn(props) {
    return <>
    <button onClick={props.onClick} className={props.class}>{props.text}</button>
    </>
};


export default Btn;