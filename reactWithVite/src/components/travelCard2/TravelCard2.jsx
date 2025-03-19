import React from "react";
import "./TravelCard2.css"

const TravelCard2=(props)=>{
    return(
        <>           
            <div className="travel-card2">
                <img src={props.src} alt={props.alt} className="travel-image2"/>
                <div className="trip-info">
                    <div>
                        <h5 className="card2-destination">{props.alt}</h5>
                        <h6 className="card2-code">{props.code}</h6>
                    </div>
                    <h1 className="card2-price">{props.price}</h1>
                </div>    
            </div>
        </>
    );
}

export default TravelCard2;