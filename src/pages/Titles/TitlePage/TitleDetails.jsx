import { Component, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Tabs, Tab } from "react-bootstrap";
import { Outlet, Link, json, useParams, useNavigate } from "react-router-dom";
import TitlePage from "../TitlePage/TitlePage";

function TitleDetails({ title }) {

    const [TitleDetailsElements, setTitleDetailsElements] = useState([]);
    console.log("!!!!!TitleDetails!!!!!!");



    console.log("!!!!!TitleDetails!!!!!!2");



    if (title != null) {

        return (
            <>
                <h2>Title Details</h2>
                {isAdult(title.isAdult)}
                <p>Type: {title.type}</p>
                <p>Runtime in mins: {title.runTimeMinutes}</p>
                <p>Startyear: {title.startYear}</p>
                <p>Endyear: {title.endYear}</p>
                <p>Type: {title.type}</p>
                <p>Type: {title.type}</p>
                <p>Type: {title.type}</p>
                

            </>


        )

    }
    else return <p>No List ???</p>

    function isAdult(isAdult) {
        if (isAdult == true) {
            return <p><b>This title is for adults</b></p>
        }
    }


};
export default TitleDetails;