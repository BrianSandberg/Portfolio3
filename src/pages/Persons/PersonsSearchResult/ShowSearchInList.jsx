import { Component, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Tabs, Tab } from "react-bootstrap";
import { Outlet, Link, json, useParams, useNavigate } from "react-router-dom";
import PersonPage from "../PersonPage/PersonPage";


function ShowSearchInList({ list }) {

    const [ShowSearchInListElements, setPersonsSearchResultElements] = useState([]);
    const navigate = useNavigate();

    if (list != null) {
        let counter = 1;
        return list.map(element =>

            <tr role="button" onClick={() => takeMeToThis(element.url)}>
                <td>{counter++}</td>
                <td>{element.name}</td>
                <td>{element.birthYear}</td>
                <td>{element.deathYear}</td>
            </tr>
        )
    }
    else return <tr><td>No List ???</td></tr>

    function takeMeToThis(url) {

        console.log(url.substring(url.lastIndexOf('/') + 1));
        const id = url.substring(url.lastIndexOf('/') + 1);
        const link = "/person/" + id;
        navigate(link);
    }

};
export default ShowSearchInList;