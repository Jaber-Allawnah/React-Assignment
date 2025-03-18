import React from "react";
import SearchCard from "../searchcard/SearchCard";
import "./RecentSearch.css" 

const RecentSearch=()=>{
    return(
        <>
            <div className="main-container-recentsearch">
                <h3 className="row-1-recentsearch">RECENT SEARCHES</h3>
                <div className="row-2-recentsearch">
                    <SearchCard title1="SIN" title2="LAX" title3="7 Sep 2021" />
                    <SearchCard title1="MY" title2="DUB" title3="9 Sep 2021"/>
                </div>
            </div>
        </>
    );
}

export default RecentSearch;