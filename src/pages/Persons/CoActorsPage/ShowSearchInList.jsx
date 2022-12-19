import { Component, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Tabs, Tab } from "react-bootstrap";
import { Outlet, Link, json, useParams, useNavigate } from "react-router-dom";
import CoActorsPage from "../CoActorsPage/CoActorsPage";



function ShowSearchInList({ list }) {

    const [ShowSearchInListElements, setPersonsSearchResultElements] = useState([]);

    const navigate = useNavigate();

    function takeMeToThis(url) {

        console.log(url.substring(url.lastIndexOf('/') + 1));
        const id = url.substring(url.lastIndexOf('/') + 1);
        const link = "/person/" + id + "/CoActors";
        console.log(link);
        navigate(link);
    }


    if (list != null) {
        let counter = 1;
        return list.map(element =>

            <tr onClick={() => takeMeToThis(element.url)}>
                <td>{counter++}</td>
                <td>{element.name}</td>
                <td>{element.birthYear}</td>
                <td>{element.deathYear}</td>
                <td>{element.frequency}</td>
            </tr>

        )
    }
    else return <tr><td>No List ???</td></tr>



};
export default ShowSearchInList;