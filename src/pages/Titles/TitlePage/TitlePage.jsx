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

    const starPicUrl = "data:image/png;base64,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";

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
           
                {<TitleDetails title={titleElements} ></TitleDetails>}
        

            </Container>

        </Container>



    );
};


export default TitlePage;