import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Tabs, Tab } from "react-bootstrap";
import { Outlet, Link, json, useParams } from "react-router-dom";
import ShowSearchInList from "./ShowSearchInList";

function PersonsSearchResult() {
  const [PersonsSearchResultElements, setPersonsSearchResultElements] = useState([]);
  console.log("!!!!!StartOfPersonsSearchResult!!!!!!");


  const {searchTerm} = useParams();

  const [status, setStatus] = useState("idle");

  const apiBase = "http://localhost:5001/api/persons?search="


  async function loadPersonPage() {

   
    console.log(searchTerm + "!!!!!PersonsSearchResult!!!!!!");

    const res = await fetch(apiBase + searchTerm);
    console.log("1321");
    console.log(res);
    const json = await res.json();
    console.log("2");
    console.log(json);
    setPersonsSearchResultElements(json);
    console.log("3");
    setStatus("done")
    console.log("4");

    console.log("5");
  
}
  useEffect(() => { loadPersonPage() }, [searchTerm]);
  return (
    <Container>

      { }
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Rank</th>
            <th scope="col">Name</th>
            <th scope="col">Birth Year</th>
            <th scope="col">Death Year</th>
            <th scope="col">Url</th>
          </tr>
        </thead>
        <tbody>
          {<ShowSearchInList list={PersonsSearchResultElements.items} ></ShowSearchInList>}
        </tbody>
      </table>
      <h1>PersonsSearchResult</h1>


      {/* {(status === "done") */} {(true === true) &&
        <Container>
          <h1>{PersonsSearchResultElements.name}</h1>
        </Container>
      }
    </Container>

  );
};
export default PersonsSearchResult;