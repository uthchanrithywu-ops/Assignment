import React from "react";
import "./Header.css";
import logo from "../assets/logo.png";

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <img src={logo} alt="IT School Logo" className="logo" />
            </div>
        </header>
    );
};

export default Header;