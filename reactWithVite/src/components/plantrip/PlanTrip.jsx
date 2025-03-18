import React from "react";
import "./PlanTrip.css"
import { GoArrowRight } from "react-icons/go";
import TravelCard1 from "../travelCard1/TravelCard1";



const PlanTrip=()=>{
    return(
        <>
            <div className="main-container-plantrip">
                <div className="plantrip-titles">
                    <div className="plantrip-left-titles">
                        <h3 className="plantrip-h3">Plan your next trip</h3>
                        <h2 className="plantrip-h2">Most Popular Destinations</h2>
                    </div>
                    <div className="plantrip-arrow">
                        <h3 className="plantrip-h3">View all destinations</h3><GoArrowRight className="arrow-icon" size={30}/>
                    </div>

                </div>
                <div className="trip-container1">
                    <TravelCard1 src="/ParisImage.png" alt="Paris" price="$699"/>
                    <TravelCard1 src="/GreeceImage.png" alt="Greece" price="$1079"/>
                    <TravelCard1 src="./NorwayImage.png" alt="Norway" price="$895"/>
                    <TravelCard1 src="./TuscanyImage.png" alt="Tuscany" price="$1245"/>
                </div>
            </div>
        </>
    );
}

export default PlanTrip;