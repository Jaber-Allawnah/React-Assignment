import React from "react";
import "./Fieldset.css"

const Fieldset=(props)=>{
    return(
        <>
            <fieldset className={props.className}>
                <legend className="search-legend">{props.name}</legend>
                <input type="text" className="no-border" value={props.value}/>
            </fieldset>
        </>
    );
}

export default Fieldset;