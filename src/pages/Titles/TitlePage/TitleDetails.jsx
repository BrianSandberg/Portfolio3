import { Component, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Tabs, Tab } from "react-bootstrap";
import { Outlet, Link, json, useParams, useNavigate } from "react-router-dom";
import TitlePage from "../TitlePage/TitlePage";

function TitleDetails({ title }) {

    const [TitleDetailsElements, setTitleDetailsElements] = useState([]);
    console.log("!!!!!TitleDetails!!!!!!");

    const personApi = "http://localhost:5001/api/persons/"

    console.log("!!!!!TitleDetails!!!!!!2");



    if (title != null) {

        return (
            <>
                <h2>Title Details</h2>
                {isAdult(title.isAdult)}
                <p><b>Type:</b> {title.type}</p>
                {insertGenres(title.titleGenres)}
                <p><b>Runtime in mins:</b> {title.runTimeMinutes}</p>
                <p><b>Startyear:</b> {title.startYear}</p>
                <p><b>Endyear:</b> {title.endYear}</p>
                {insertCharacters()}
            </>


        )

    }
    else return <p>No List ???</p>

    function isAdult(isAdult) {
        if (isAdult == true) {
            return <p><b>This title is for adults</b></p>
        }
    }

    function insertGenres(list) {
        let s = "";
        console.log("before if");
        if (list != null) {
            list.map(element => s = s + element.genre + ", ")
        }
        console.log(s);
        return <p><b>Genres:</b> {s.slice(0, -2)}</p>;
    }

    function insertCharacters() {
        return (
            <>
            <p><b>Characters in the title:</b></p>
            <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
          </>
        )
    }

    async function insertIntoRow(characterList) {
        const person = await res.json();
        let res;
        return list.map(element =>
            res = await fetch(personApi + characterList);
        <tr onClick={() => takeMeToThis(element.url)}>
            <td>{counter++}</td>
            <td><img src={element.poster} alt="No Poster Available"></img></td>
            <td>{element.primaryTitle}</td>
            <td>{element.averageRating}</td>
        </tr>
    }

};
export default TitleDetails;