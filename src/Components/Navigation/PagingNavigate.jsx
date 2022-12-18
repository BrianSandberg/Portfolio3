import { Component, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Tabs, Tab } from "react-bootstrap";
import { Outlet, Link, json, useParams, useNavigate } from "react-router-dom";

function PagingNavigate({ first, prev, next, current, total, pages }) {

    const [ShowSearchInListElements, setTitlesSearchResultElements] = useState([]);
    console.log("!!!!!ShowSearchInList!!!!!!");
    const navigate = useNavigate();


    // if (list != null) {
    //     let counter = 1;
    //     return list.map(element =>

    //         <tr role="button" onClick={() => takeMeToThis(element.url)}>
    //             <td>{counter++}</td>
    //             <td><img src={element.poster} alt="No Poster Available"></img></td>
    //             <td>{element.primaryTitle}</td>
    //             <td>{element.averageRating}</td>
    //         </tr>
    //     )
    // }
    // else return <p>No List ???</p>

    // function takeMeToThis(url) {
    //     //navigate(url);
    //     //<TitlePage></TitlePage>
    //     console.log(url.substring(url.lastIndexOf('/') + 1));
    //     const id = url.substring(url.lastIndexOf('/') + 1);
    //     const link = "/title/" + id;
    //     navigate(link);
    // }

};
export default PagingNavigate;