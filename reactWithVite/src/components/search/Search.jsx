import React from "react";
import Fieldset from "../fieldset/Fieldset";
import "./Search.css";


const Search=()=>{
    return(
        <>
            <div className="main-container-search">
                <div className="search-titles">
                    <h1 class="search-h1">Let's explore & travel the world</h1>
                    <h4 class="search-h4">Find the best destinations and the most popular stays!</h4>
                </div>    
                <div className="search-flight">
                    <div className="row-1">
                        <h3 className="search-h3" >SEARCH FLIGHTS</h3>
                        <div className="way-choice">
                            <input type="radio" className="search-radio"/>
                            <label className="radio-label">Return</label>
                            <input type="radio" className="search-radio"/>
                            <label className="radio-label">One-way</label>
                        </div>
                    </div>
                    <div className="row-2">
                        <Fieldset name="Departure" value="Singapore (SIN)" className="filedset-search"/>
                        <Fieldset name="Arrival" value="Los Angeles (LA)" className="filedset-search"/>
                        <Fieldset name="Date" value="01/05/2022" className="filedset-search"/>
                        <button className="search-btn">SEARCH FLIGHTS</button>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Search;