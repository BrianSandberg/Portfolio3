import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Tabs, Tab } from "react-bootstrap";
import { Outlet, Link, json, useParams, useNavigate } from "react-router-dom";

import BookmarkTitleButton from "../../../Components/Buttons/BookmarkTitleButton";
import BookmarkPersonButton from "../../../Components/Buttons/BookmarkPersonButton";

function PersonPage() {
    const [personElements, setPersonElements] = useState([]);
    const api = "http://localhost:5001/api/persons/"

    const { id } = useParams();

    const personUrl = api + id;

    const navigate = useNavigate();


    console.log(personUrl);
    const [status, setStatus] = useState("idle");
    let counter = 1;

    async function loadPersonPage() {

        try {

            <h1>{counter++}</h1>
            const res = await fetch(personUrl);
            console.log(res);
            const json = await res.json();
            console.log(json);
            setPersonElements(json);
            setStatus("done")

        } catch (error) {
            setStatus("error")

            console.log(error);
        }
    }
    useEffect(() => { loadPersonPage() }, [status]);
    //Ved ikke hvor jeg skal smide BookmarkPersonButton ind, men det burde tage 2 sek, hvis den virker 
    //i title
    return (
        <div>
            <Container>
                <div className="container-fluid">
                    <h1>Info about "{personElements.name}"</h1>
                </div>
                <Container>{BookmarkPersonButton(status, setStatus)}</Container>
                {/*<p>json /* {personUrl}</p>*/}
                {/*loadTitlePage.toString*/}
                {(status === "done") &&

                    <Container className="PersonInfo">
                       
                        <table>
                            <tbody>
                                <tr><td><p><b>Navn: </b>{personElements.name}</p></td></tr>
                                <tr><td><p><b>Birth Year: </b>{personElements.birthYear}</p></td></tr>
                                <tr><td><p><b>Death Year: </b>{personElements.deathYear}</p></td></tr>
                                <tr><td><p><b>Co-Actors: </b><button onClick={() => navigate("/person/" + id + "/CoActors")}>View Co-Acters</button></p></td></tr>
                                
                            </tbody>
                        </table>

                    </Container>
                }
            </Container>
        </div>
    );


};


export default PersonPage;