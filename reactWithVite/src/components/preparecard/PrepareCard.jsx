import React from "react";
import "./PrepareCard.css"
const PrepareCard=(props)=>{
    return(
        <>
            <div className="preparations" >
                <img  className="trip-img" alt={props.alt} src={props.src}/>
                <label className="preparation-label">{props.name}</label>
            </div>
        </>
    );
}

export default PrepareCard;