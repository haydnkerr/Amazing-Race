import React from "react";
import { Link } from 'react-router-dom';
import App from "./App";
import Btn from "./Btn";

function Header() {
    return <>
    <Link className="header" to="/">
    {/* <img className="header-img" src="/Amazing-Race/home-icon.png">
        </img> */}
        <Btn class="complete-btn go-back-btn" text="Go Back" />
    </Link>
    </>
}

export default Header;