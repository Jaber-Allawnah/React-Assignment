import React from "react";
import "./PrepareTrip.css"
import PrepareCard from "../preparecard/PrepareCard";

const PrepareTrip=()=>{
    return(
        <>
        <div className="main-container-preparetrip">
            <h3 className="preperation-h3">PREPARE FOR YOU TRIP</h3>
            <div className="preparation-div">
                <PrepareCard src="/hotel.png" alt="hotel pic" name="Hotel"/>
                <PrepareCard src="/attractions.png" alt="attractions pic" name="Attractions"/>
                <PrepareCard src="/eats.png" alt="fork and spoon pic" name="Eats"/>
                <PrepareCard src="/commute.png" alt="bus pic" name="Commute"/>
                <PrepareCard src="/taxi.png" alt="texi pic" name="Taxi"/>
                <PrepareCard src="/movies.png" alt="movie pic" name="Movies"/>
            </div>
        </div>
        </>
    );
}

export default PrepareTrip;