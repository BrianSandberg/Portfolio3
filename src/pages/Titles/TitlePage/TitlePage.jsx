import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Tabs, Tab } from "react-bootstrap";
import { Outlet, Link, json, useParams } from "react-router-dom";
import TitleDetails from "./TitleDetails";

function TitlePage() {
    const [titleElements, setTitleElements] = useState([]);
    const api = "http://localhost:5001/api/titles/"

    const { id } = useParams();

    const titleUrl = api + id;

    const titleUrl2 = "http://localhost:5001/api/titles/tt0343107"

    const starPicUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Star%2A.svg/2234px-Star%2A.svg.png";

    // tt0343107
    console.log(titleUrl);
    const [status, setStatus] = useState("idle");
    let counter = 1;

    async function loadTitlePage() {

        try {

            <h1>{counter++}</h1>
            const res = await fetch(titleUrl);
            console.log("1");
            console.log(res);
            const json = await res.json();
            console.log("2");
            console.log(json);
            setTitleElements(json);
            console.log("3");
            setStatus("done")
            console.log("4");

        } catch (error) {
            setStatus("error")
            console.log("5");

            console.log(error);
        }
    }
    useEffect(() => { loadTitlePage() }, []);
    return (
        <Container class="whole">
            <Container class="MainPartWithExtraInfo">
                <h1>{titleElements.primaryTitle}</h1>
                <Container class="MainPart">
                    <table class="table table-borderless">
                        <thead>
                            <tr>
                                <th>Rating: </th>
                                <th>Number of voters: </th>
                                <th>PUT BOOKMARK BUTTOM HERE </th>
                            </tr>
                        </thead>
                        <tbody>
                            <td><img src={starPicUrl} class="img-thumbnail" width="45" height="45" alt="No star Available..."></img> {titleElements.averageRating}/10</td>
                            <td>{titleElements.numVotes}</td>
                        </tbody>
                    </table>
                    <Container class="PosterImage">
                        <img src={titleElements.poster} width="250" height="350" alt="No Poster Available"></img>
                    </Container>
                </Container>

                <Container class="ExtraInfo">
                    <table>
                        <thead>
                            <tr>
                                <td>Plot: </td>
                            </tr>
                        </thead>
                        <tbody>
                            <td>  <p>{titleElements.plot}</p></td>
                        </tbody>
                    </table>
                </Container>
            </Container>

            <Container>
           
                {<TitleDetails title={titleElements} id={id}></TitleDetails>}
        

            </Container>

        </Container>



    );
};


export default TitlePage;