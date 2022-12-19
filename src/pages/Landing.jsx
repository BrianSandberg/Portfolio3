import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import {Tabs, Tab } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

function Landing() {
    const [urls, setUrls] = useState([]);
    const [status, setStatus] = useState("idle");

    async function loadLanding() {

        try {
            const res = await fetch("http://localhost:5001/api/landing");
            const json = await res.json();
            console.log(json);
            setUrls(json);

            setStatus("done")
    
        } catch (error) {
            setStatus("error")
            console.log(error);
        }
    }
    useEffect(() => { loadLanding() }, []);
    return (
        <Container>
<h1>Welcome to our movie database application</h1>
<h2>Made by Mads Jönsson, Steen Leu Christensen and Oliver Werner </h2>
        </Container>




    );
};


export default Landing;