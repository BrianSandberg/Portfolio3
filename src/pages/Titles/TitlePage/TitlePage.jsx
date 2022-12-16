import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import {Tabs, Tab } from "react-bootstrap";
import { Outlet, Link, json, useParams } from "react-router-dom";

function TitlePage() {
    const [titleElements, setTitleElements] = useState([]);
    const api = "http://localhost:5001/api/titles/"
    
    const {id} = useParams();

    const titleUrl = api+id;

    const titleUrl2 = "http://localhost:5001/api/titles/tt0343107"

    // tt0343107
    console.log(titleUrl);
    const [status, setStatus] = useState("idle");
    let counter = 1;
   
    async function loadTitlePage() {
        
        try {
          
            <h1>{counter++}</h1>
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
    useEffect(() => { loadTitlePage() }, []);
    return (
        <Container>
          <h1>{counter++}</h1>
            <h1>Something</h1>
            <p>json /* {titleUrl}</p>
            {/*loadTitlePage.toString*/}
            {(status === "done") &&
            
            titleElements.primarytitle
            
                //titleElements.map(url => <div><Link to={titleUrl2} params={{ urlName: url }}>{url}</Link></div>)

            }
            <p>after</p>
        </Container>




    );
};


export default TitlePage;