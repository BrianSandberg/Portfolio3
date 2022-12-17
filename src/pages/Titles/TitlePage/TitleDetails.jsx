import { Component, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Tabs, Tab } from "react-bootstrap";
import { Outlet, Link, json, useParams, useNavigate } from "react-router-dom";
import TitlePage from "../TitlePage/TitlePage";

function TitleDetails({ title }) {

    const [TitleDetailsElements, setTitleDetailsElements] = useState([]);
    console.log("!!!!!TitleDetails!!!!!!");
    const [name, setname] = useState([]);

    const navigate = useNavigate();


    const personApi = "http://localhost:5001/api/persons/"

    console.log("!!!!!TitleDetails!!!!!!2");

    let counter = 1;


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
                            <th scope="col">Number</th>
                            <th scope="col">Name</th>
                            <th scope="col">Character</th>
                        </tr>
                    </thead>
                    <tbody>
                        {insertIntoRow(title.titleCharacters)}
                    </tbody>
                </table>
            </>
        )
    }

    function insertIntoRow(characterList) {
       
        if (characterList != null) {
            return characterList.map(element =>
                <tr role="button" onClick={() => navigate("/person/" + element.personId) }>
                    <td>{counter++}</td>
                    <td>{element.name}</td>
                    <td>{element.titleCharacter}</td>
                </tr>
            )
        }
        else return "characterList is loading/not working :)"
    }

    /*async*/ function getPersonName(characterId) {
        if (characterId != null) {
            console.log("PERSONPERSONPERSONPERSONPERSONPERSONPERSON");
            try {

                <h1>{counter++}</h1>

                console.log("yoyoyoyoyoyoyoyoyoyoyoyoyoyoyoyoyoyoyoyoyo");

               // const res = await fetch(personApi + characterId);
                console.log("1 - THIS IS THE RESPONSE:");
               // console.log(res);
               // const person = await res.json();
                console.log("2");
                //console.log(person);
                console.log("3");
                console.log("4");
               // setname(person.name)
                return <td>personName</td>
            } catch (error) {
                console.log("5");

                console.log(error);
            }
            return "personName"
        } else return "loading/not working";


    }

};
export default TitleDetails;