import React from "react";
import "./PopStays.css";
import { GoArrowRight } from "react-icons/go";
import TravelCard3 from "../travelCard3/TravelCard3";

const PopStays=()=>{
    return(
        <>
            <div className="main-container-popstays">
                <div className="row-1-popstays">
                    <h2>Popular Stays</h2>
                    <div className="plantrip-arrow">
                        <h3 className="popstays-h3">View all stays</h3>
                        <GoArrowRight className="arrow-icon" size={30}/>
                    </div>
                </div>
                <div className="row-2-popstays">
                    <TravelCard3 src="/Matterhorn Suites Image.png" alt="Matterhorn Suites" description="Entire bungalow" price="$575" rating="4.9" reviews="60"/>
                    <TravelCard3 src="/Discovery Shores Image.png" alt="Discovery Shores" description="2-Story beachfront suite" price="$360" rating="4.8" reviews="116"/>
                    <TravelCard3 src="/Arctic Hut Image.png" alt="Arctic Hut" description="Single deluxe hut" price="$420" rating="4.7" reviews="78"/>
                    <TravelCard3 src="/Lake Louise Image.png" alt="Lake Louise Inn" description="Deluxe King Room" price="$244" rating="4.6" reviews="63"/>
                </div>               
            </div>
        </>
    );
}

export default PopStays;