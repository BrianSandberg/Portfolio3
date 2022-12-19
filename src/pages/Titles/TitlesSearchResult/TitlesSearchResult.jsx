import { Component, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Tabs, Tab } from "react-bootstrap";
import { Outlet, Link, json, useParams } from "react-router-dom";
import ShowSearchInList from "./ShowSearchInList";
import NavigationButton from "../../../Components/Buttons/NavigationButton";

function TitlesSearchResult() {

  const [TitlesSearchResultElements, setTitlesSearchResultElements] = useState([]);
  console.log("!!!!!StartOfTitlesSearchResult!!!!!!");

  const { searchTerm } = useParams();

  const [pageNumber, setPageNumber] = useState(0);

  const apiBase = "http://localhost:5001/api/titles"

  let pagesize = 10;

  function turnIntoTableRow(list) {
    if (list != null) {
      let counter = 1;
      return list.map(element =>
        <tr>
          <td>{counter++}</td>
          <td><img src={element.poster} alt="No Poster Available"></img></td>
          <td>{element.primaryTitle}</td>
          <td>{element.averageRating}</td>
        </tr>

      )
    }
    else return <p>yoyoyo</p>
  }

  async function loadTitlePage() {


    console.log(searchTerm + "!!!!!TitlesSearchResult!!!!!!");

    const res = await fetch(apiBase + "?page=" + pageNumber + "&pageSize=" + pagesize + "&search=" + searchTerm);
    console.log("1321");
    console.log(res);
    const json = await res.json();
    console.log("2");
    console.log(json);
    setTitlesSearchResultElements(json);
    console.log("3");
  }

  useEffect(() => { loadTitlePage() }, [searchTerm, pageNumber]);
  return (
    <Container>

      <NavigationButton pageNumber={pageNumber} setPageNumber={setPageNumber} ></NavigationButton>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Rank</th>
            <th scope="col">Poster</th>
            <th scope="col">Primary title</th>
            <th scope="col">Rating</th>
          </tr>
        </thead>
        <tbody>
          {/*turnIntoTableRow(TitlesSearchResultElements.items)*/}
          {<ShowSearchInList list={TitlesSearchResultElements.items} ></ShowSearchInList>}
        </tbody>
      </table>

      <NavigationButton pageNumber={pageNumber} setPageNumber={setPageNumber}></NavigationButton>
      {checkPageNumber(pageNumber, TitlesSearchResultElements.pages)}
      {/* {(status === "done") } {(true === true) && */}
    </Container>
  );

  function checkPageNumber(pageNumber, pages) {
    if (pageNumber >= pages) {
      setPageNumber(pages - 1)
    }
  }

};
export default TitlesSearchResult;