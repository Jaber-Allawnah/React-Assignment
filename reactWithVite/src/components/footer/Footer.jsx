import React from "react";
import "./Footer.css"
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";



const Footer=()=>{
    return(
        <>
        <div className="main-container-footer">
            <div className="footer-col-1">
                <img src="/footer logo.png"/>
                <p className="footer-p">Fickle Flight is your one-stop travel portal. We offer hassle free flight and<br/>
                hotel bookings. We also have all your flight needs in you online shop.</p>
                <div className="footer-icons">
                <FaFacebook  size={25}/>
                <FaSquareInstagram size={25} />
                <AiFillTwitterCircle size={25}/>
                </div>
            </div>
            <div className="footer-col-2">
                <div className="grid-col-1">
                    <h3 className="grid-h3">Company</h3>
                    <h5 className="grid-h5">About Us</h5>
                    <h5 className="grid-h5">News</h5>
                    <h5 className="grid-h5">Careers</h5>
                    <h5 className="grid-h5">How we work</h5>
                </div>
                <div className="grid-col-2">
                    <h3 className="grid-h3">Support</h3>
                    <h5 className="grid-h5">Account</h5>
                    <h5 className="grid-h5">Support Center</h5>
                    <h5 className="grid-h5">FAQ</h5>
                    <h5 className="grid-h5">Accessibility</h5>
                </div>
                <div className="grid-col-3">
                    <h3 className="grid-h3">More</h3>
                    <h5 className="grid-h5">Covid Advisory</h5>
                    <h5 className="grid-h5">Airline Fees</h5>
                    <h5 className="grid-h5">Tips</h5>
                    <h5 className="grid-h5">Quarantine Rules</h5>
                </div>

            </div>
        </div>
        </>
    );
}

export default Footer;