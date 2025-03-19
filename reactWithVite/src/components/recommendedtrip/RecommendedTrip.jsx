import React from "react";
import { GoArrowRight } from "react-icons/go";
import TravelCard2 from "../travelCard2/TravelCard2";
import "./RecommendedTrip.css";

const RecommendedTrip = () => {
    return (
        <div className="main-container-rectrip">
            <div className="row-1-rectrip">
                <h1>Recommended Holidays</h1>
                <div className="plantrip-arrow">
                    <h3 className="rectrip-h3">View all holidays</h3>
                    <GoArrowRight className="arrow-icon" size={30} />
                </div>
            </div>
            <div className="row-2-rectrip">
                <TravelCard2 src="/image (4).png" alt="Bali" price="$899" code="4D3N" />
                <TravelCard2 src="/SwitzerlandImage.png" alt="Swiss" price="$900" code="6D5N" />
                <TravelCard2 src="/BoracayImage.png" alt="Boracay" price="$699" code="5D4N" />
                <TravelCard2 src="/PalawanImage.png" alt="Palawan" price="$789" code="4D3N" />
            </div>
        </div>
    );
};

export default RecommendedTrip;
