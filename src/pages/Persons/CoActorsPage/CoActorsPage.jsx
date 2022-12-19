import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Tabs, Tab } from "react-bootstrap";
import { Outlet, Link, json, useParams, useNavigate } from "react-router-dom";

function PersonPage() {
    const [coActers, setcoActers] = useState([]);
    const apiBase = "http://localhost:5001/api/persons/"

    const { id } = useParams();

    const navigate = useNavigate();

    const coActersApi = apiBase + id + "/" + "CoActors";

    const [status, setStatus] = useState("idle");
    let counter = 1;

    async function loadPersonPage() {

        try {
            const res = await fetch(coActersApi);
            console.log("1");
            console.log(res);
            const json = await res.json();
            console.log("2");
            console.log(json);
            setcoActers(json);
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
                <h1>Info of Co-Actors:</h1>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Rank</th>
                            <th scope="col">Name</th>
                            <th scope="col">Frequency</th>
                        </tr>
                    </thead>
                    <tbody>
                        {insertRows(coActers.items)}
                    </tbody>
                </table>
            </Container>
        </>
    );
    /*
    <tr onClick={() => takeMeToThis(element.url)}>
    <td>{counter++}</td>
    <td><img src={element.poster} alt="No Poster Available"></img></td>
    <td>{element.primaryTitle}</td>
    <td>{element.averageRating}</td>
</tr>
*/

    function insertRows(list) {
        if (list != null) {
            return (

                list.map(element =>
                    <tr role="button" onClick={() => navigate("/person/" + element.personId)}>
                        <td>{counter++}</td>
                        <td>{element.name}</td>
                        <td>{element.frequency}</td>
                    </tr>
                )
            )
        } else {
            return <tr><td>No List ???</td></tr>
        }

    }

};


export default PersonPage;