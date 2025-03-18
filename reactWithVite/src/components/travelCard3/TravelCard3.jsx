import React from "react";
import { IoPlayCircleOutline } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";
import "./TravelCard3.css"


const TravelCard3=(props)=>{
    return(
        <>
            <div className="travel-card3">
                <img src={props.src} alt={props.alt}/>
                <div className="card-3-row1">
                    <div className="card-3-desc">
                        <h4 className="desc-h4">{props.description}</h4>
                        <h3 className="alt-h3">{props.alt}</h3>
                        <h4 className="price-h4">{props.price}/night</h4>
                    </div>
                    <div >
                    <IoPlayCircleOutline size={30} className="play-icon"/>
                    </div>
                </div>
                <div className="review-div">
                    <div className="rating-div">
                        <IoIosStar className="star-icon" size={17}/>
                        <h4 className="rating-h4">{props.rating}</h4> 
                    </div>
                    <div>
                        <h4 className="reviews-h4">({props.reviews} reviews)</h4>    
                    </div>    
                </div>
                <button className="card-3-btn">MORE DETAILS</button>

            </div>
        </>
    );
}

export default TravelCard3; 