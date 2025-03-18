import React from "react";
import "./SearchCard.css";


const SearchCard=(props)=>{
    return(
        <>
            <div className="main-container-searchcard">
                <div className="dep-dst-div">
                    <h2>{props.title1}</h2>
                    <img src="/flight.png" alt="flight-way"/>
                    <h2>{props.title2}</h2>
                </div>
                <p className="dep-time"><b>Depart on: </b>{props.title3}</p>
            </div>
        </>
    );

}

export default SearchCard;