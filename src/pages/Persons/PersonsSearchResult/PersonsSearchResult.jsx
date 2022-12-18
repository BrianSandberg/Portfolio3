import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Tabs, Tab } from "react-bootstrap";
import { Outlet, Link, json, useParams } from "react-router-dom";
import PagingNavigate from "../../../Components/Navigation/PagingNavigate";
import ShowSearchInList from "./ShowSearchInList";

function PersonsSearchResult() {
  const [PersonsSearchResultElements, setPersonsSearchResultElements] = useState([]);


  const { searchTerm } = useParams();

  const [status, setStatus] = useState("idle");

  const apiBase = "http://localhost:5001/api/persons"

  async function loadPersonPage() {
    console.log("THIS IS THE SEARCH TERM WATCH THIS NOW!!!!");
    console.log({ searchTerm });


    const res = await fetch(apiBase + "?page=1&pageSize=10" + "&search=" + searchTerm);
    console.log("1321");
    console.log(res);
    const json = await res.json();
    console.log("2");
    console.log(json);
    setPersonsSearchResultElements(json);
    console.log("3");
    console.log(PersonsSearchResultElements.first);
    setStatus("done")
    console.log("4");

    console.log(PersonsSearchResultElements.first);
    console.log("5");

  }
  useEffect(() => { loadPersonPage() }, [searchTerm, status]);
  return (
    <Container>
      <h1>Search result of "{searchTerm}"</h1>

      { }
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Rank</th>
            <th scope="col">Name</th>
            <th scope="col">Birth Year</th>
            <th scope="col">Death Year</th>
          </tr>
        </thead>
        <tbody>
          {<ShowSearchInList list={PersonsSearchResultElements.items} ></ShowSearchInList>}
        </tbody>
      </table>

      {<PagingNavigate first={
        PersonsSearchResultElements.first}
        prev={PersonsSearchResultElements.prev}
        next={PersonsSearchResultElements.next}
        current={PersonsSearchResultElements.current}
        total={PersonsSearchResultElements.total}
        pages={PersonsSearchResultElements.pages}>
      </PagingNavigate>}

      {/* {(status === "done") */} {(true === true) &&
        <Container>
          <h1>{PersonsSearchResultElements.name}</h1>
        </Container>
      }
    </Container>

  );
};
export default PersonsSearchResult;