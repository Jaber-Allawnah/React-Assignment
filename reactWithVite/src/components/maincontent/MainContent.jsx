import React from "react";
import Search from "../search/Search";
import RecentSearch from "../recentsearch/RecentSearch";
import PrepareTrip from "../preparetrip/PrepareTrip";
import PlanTrip from "../plantrip/PlanTrip";
import RecommendedTrip from "../recommendedtrip/RecommendedTrip";
import PopStays from "../popstays/PopStays";
import Form from "../form/Form";

const MainContent=()=>{
    return(
        <>
            <Search/>
            <RecentSearch/>
            <PrepareTrip/>
            <PlanTrip/>
            <RecommendedTrip/>
            <PopStays/>
            <Form/>
        </>
    );
}

export default MainContent;