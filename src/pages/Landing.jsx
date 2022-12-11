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

            <h1>LANDING PAGE!</h1>
            
            {(status === "done") &&

                urls.map(url => <div><Link to="/contact" params= {{urlName: url}}>{url}</Link></div>)
            }
        </Container>




    );
};


export default Landing;

{/* <input type="text" value={this.state.customer.firstName} /> 
       
        <br />
        <label>
            Last Name:
        </label>
        <input type="text" value={this.state.customer.lastName} />
        <br />
        <label>
            Status:
        </label>
        <select value={this.state.customer.status}>
            <option value="PENDING">
                Pending
            </option>
            <option value="APPROVED">
                Approved
            </option>
        </select>
        */}