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

    

    async function loadTitlePage() {

        try {

            const res = await fetch({titleUrl2});
            console.log("1");

            console.log(res);
            console.log("2");

            const json = await res.json();
            console.log("4");

            console.log(json);
            console.log("5");

       
            setTitleElements(json);
            console.log("5");

            setStatus("done")
            console.log("7");

        } catch (error) {
            setStatus("error")
            console.log("8");

            console.log(error);
        }
    }
    useEffect(() => { loadTitlePage() }, [titleElements]);
    return (
        <Container>

            <h1>Something</h1>
            <p>json /* {titleUrl}</p>
            
            {(status === "done") &&

                titleElements.map(url => <div><Link to={titleUrl2} params={{ urlName: url }}>{url}</Link></div>)

            }
        </Container>




    );
};


export default TitlePage;