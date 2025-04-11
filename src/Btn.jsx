import React from "react";

function Btn(props) {
    return <>
    <button className={props.class}>{props.text}</button>
    </>
};


export default Btn;