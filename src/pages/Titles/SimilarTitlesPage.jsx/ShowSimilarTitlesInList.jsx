import { Component, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Tabs, Tab } from "react-bootstrap";
import { Outlet, Link, json, useParams, useNavigate } from "react-router-dom";
import TitlePage from "../TitlePage/TitlePage";

function ShowSimilarTitlesInList({ similarTitleObj }) {

    const [showSimilarTitlesInListElements, setShowSimilarTitlesInListElements] = useState([]);
    console.log("!!!!!ShowSimilarTitlesInList!!!!!!");
    const navigate = useNavigate();

    let counter = 1;

    console.log("THIS IS THE LIST");

    console.log(similarTitleObj);

    if (similarTitleObj != null) {
        let counter = 1;
        return similarTitleObj.items.map(element =>
           console.log("2")
        )
    }
    else return <p>No List ???</p>

    function takeMeToThis(url) {
        //navigate(url);
        //<TitlePage></TitlePage>
        console.log(url.substring(url.lastIndexOf('/') + 1));
        const id = url.substring(url.lastIndexOf('/') + 1);
        const link = "/title/" + id;
        navigate(link);
    }

};
export default ShowSimilarTitlesInList;