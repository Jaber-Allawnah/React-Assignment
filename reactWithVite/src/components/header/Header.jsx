import React from "react";
import { BiBell } from "react-icons/bi";
import "./Header.css"

const Header=()=>{
    return(
        <>
        <div className="main-container-header">
            <div className="logo-div">
                <img src="/logo.png" alt="logo"/>
            </div>
            <div className="side-div">
                <div className="nav-div">
                    <button className="nav-button-blue">Explore</button>
                    <button className="nav-button">Search</button>
                    <button className="nav-button">Hotels</button>
                    <button className="nav-button">Offers</button>
                </div>
                <div className="bell-div">
                    <BiBell size={20} color="black" />
                    <img src="/profilepic.png" alt="logo" className="profile-pic"/>
                </div>
            </div>    
        </div>
        </>

    );

}

export default Header;