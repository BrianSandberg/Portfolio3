import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import {Tabs, Tab } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

function TitlePage() {
    const [urls, setUrls] = useState([]);
    const [status, setStatus] = useState("idle");

    async function loadTitlePage() {

        try {
            const res = await fetch("http://localhost:5001/api/titles/");
            const json = await res.json();
            console.log(json);
            setUrls(json);

            setStatus("done")
    
        } catch (error) {
            setStatus("error")
            console.log(error);
        }
    }
    useEffect(() => { loadTitlePage() }, []);
    return (
        <Container>

            <h1>TitlePage</h1>
            
            {(status === "done") &&

                urls.map(url => <div><Link to="/TitlePage" params= {{urlName: url}}>{url}</Link></div>)
            }
        </Container>




    );
};


export default TitlePage;

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