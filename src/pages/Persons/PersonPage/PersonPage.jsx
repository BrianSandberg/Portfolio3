import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Tabs, Tab } from "react-bootstrap";
import { Outlet, Link, json, useParams, useNavigate } from "react-router-dom";

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
            console.log("1");
            console.log(res);
            const json = await res.json();
            console.log("2");
            console.log(json);
            setPersonElements(json);
            console.log("3");
            setStatus("done")
            console.log("4");

        } catch (error) {
            setStatus("error")
            console.log("5");

            console.log(error);
        }
    }
    useEffect(() => { loadPersonPage() }, []);
    return (
        <>
            <Container>
                <h1>{counter++}</h1>
                <div class="container-fluid">
                    <h1>Info about {personElements.name}</h1>
                </div>
                <p>json /* {personUrl}</p>
                {/*loadTitlePage.toString*/}
                {(status === "done") &&

                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Birth Year</th>
                                <th scope="col">Death Year</th>
                                <th scope="col">Co-Actors</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <th scope="row">1</th>
                                <td>{personElements.name}</td>
                                <td>{personElements.birthYear}</td>
                                <td>{personElements.deathYear}</td>
                                <td >{personElements.coActorsUrl}</td>
                            </tr>
                        </tbody>
                    </table>
                }
                <p>after</p>
            </Container>
            <Container>
                <button onClick={ () => navigate("/person/" + id + "/CoActors")}>View Co-Acters</button>
            </Container>
        </>
    );

   
};


export default PersonPage;