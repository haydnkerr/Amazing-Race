import React from "react";
import { Link } from 'react-router-dom';
import App from "./App";

function Header() {
    return <>
    <Link className="header" to="/App">
    <img className="header-img" src="./src/assets/home-icon.png">
        </img>

    </Link>
    </>
}

export default Header;