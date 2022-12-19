import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Tabs, Tab } from "react-bootstrap";
import { Outlet, Link, json, useParams } from "react-router-dom";
import NavigationButton from "../../../Components/Buttons/NavigationButton";
import ShowSearchInList from "./ShowSearchInList";

function PersonsSearchResult() {
  const [PersonsSearchResultElements, setPersonsSearchResultElements] = useState([]);


  const { searchTerm } = useParams();

  const [pageNumber, setPageNumber] = useState(0);

  const apiBase = "http://localhost:5001/api/persons"

  let pagesize = 10;

  async function loadPersonPage() {
    console.log({ searchTerm });


    const res = await fetch(apiBase + "?page=" + pageNumber + "&pageSize=" + pagesize + "&search=" + searchTerm);
    console.log(res);
    const json = await res.json();
    console.log(json);
    setPersonsSearchResultElements(json);
    console.log(PersonsSearchResultElements.first);

    console.log(PersonsSearchResultElements.first);

  }

  useEffect(() => { loadPersonPage() }, [searchTerm, pageNumber]);
  return (
    <Container>
      <h1>Search results of "{searchTerm}"</h1>

      <NavigationButton pageNumber={pageNumber} setPageNumber={setPageNumber} ></NavigationButton>

      <table className="table table-hover">
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

      <NavigationButton pageNumber={pageNumber} setPageNumber={setPageNumber} ></NavigationButton>

      {console.log("pageNumber")}
      {console.log(pageNumber)}

      {/* {(status === "done") } {(true === true) && */}
    </Container>

  );
};
export default PersonsSearchResult;