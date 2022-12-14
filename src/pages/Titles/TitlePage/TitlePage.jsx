import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import {Tabs, Tab } from "react-bootstrap";
import { Outlet, Link, json, useParams } from "react-router-dom";

function TitlePage() {
    const [titleElements, setTitleElements] = useState([]);
    const api = "http://localhost:5001/api/titles/"
    
    const {id} = useParams();

    const titleUrl = api+id;

    const titleUrl2 = "http://localhost:5001/api/titles/tt0088634"

    const [status, setStatus] = useState("idle");

    async function loadTitlePageTest() {
        // GET request using fetch with set headers
        const headers = { 'Content-Type': 'application/json' }
        fetch(titleUrl2, { headers })
            .then(response => response.json())
            .then(data => this.setState({ totalReactPackages: data.total }));
    }

    async function loadTitlePage() {

        try {

            const res = await fetch(titleUrl2);
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
    useEffect(() => { loadTitlePage() }, [titleElements]);
    return (
        <Container>

            <h1>Something</h1>
            <p>json /* {titleUrl}</p>
            {loadTitlePageTest.toString}
            {(status === "done") &&
            
            titleElements.endYear
                //titleElements.map(url => <div><Link to={titleUrl2} params={{ urlName: url }}>{url}</Link></div>)

            }
            <p>after</p>
        </Container>




    );
};


export default TitlePage;