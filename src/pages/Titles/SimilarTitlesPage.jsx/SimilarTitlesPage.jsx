import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Tabs, Tab } from "react-bootstrap";
import { Outlet, Link, json, useParams } from "react-router-dom";
import ShowSimilarTitlesInList from "./ShowSimilarTitlesInList";

function SimilarTitlesPage() {
    const [similarTitleObj, setSimilarTitleObj] = useState([]);
    const apiBase = "http://localhost:5001/api/titles/"

    const { id } = useParams();

    const similarTitlesAPI = apiBase + id + "/similartitles";

    // tt0343107

    const [status, setStatus] = useState("idle");
    let counter = 1;

    async function loadTitlePage() {

        try {
            const res = await fetch(similarTitlesAPI);
            console.log("1");
            console.log(res);
            const json = await res.json();
            console.log("2222222222222222222222222222222222222");
            console.log(json);
            setSimilarTitleObj(json);
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
            <h1>Similar Titles</h1>
            <table class="table table-hover">
            <thead>
              <th>
                <th scope="col">Number</th>
                <th scope="col">Primary title</th>
              </th>
            </thead>
            <tbody>
            <ShowSimilarTitlesInList similarTitleObj = {similarTitleObj}></ShowSimilarTitlesInList>
            </tbody>
          </table>
        </Container>



    );
};


export default SimilarTitlesPage;