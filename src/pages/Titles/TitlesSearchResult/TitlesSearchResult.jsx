import { Component, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Tabs, Tab } from "react-bootstrap";
import { Outlet, Link, json, useParams } from "react-router-dom";
import ShowSearchInList from "./ShowSearchInList";

function TitlesSearchResult() {

  const [TitlesSearchResultElements, setTitlesSearchResultElements] = useState([]);
  console.log("!!!!!StartOfTitlesSearchResult!!!!!!");

  const { searchTerm } = useParams();
  //console.log(searchTerm);

  //const [{searchTerm}, setSearchTerm] = useState("");


  const testFetch = "http://localhost:5001/api/titles/tt0088634";

  // tt5787344

  const [status, setStatus] = useState("idle");

  const apiBase = "http://localhost:5001/api/titles"

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

    const res = await fetch(apiBase + "?page=1&pageSize=10" + "&search=" + searchTerm);
    console.log("1321");
    console.log(res);
    const json = await res.json();
    console.log("2");
    console.log(json);
    setTitlesSearchResultElements(json);
    console.log("3");
    setStatus("done")
    console.log("4");

    console.log("5");

  }
  useEffect(() => { loadTitlePage() }, [searchTerm]);
  return (
    <Container>

      { }
      <table class="table table-hover">
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
      <h1>TitlesSearchResult</h1>
      {/*TitlesSearchResultElements.items.map(title => <div>title</div>)*/}


      {/* {(status === "done") */} {(true === true) &&

        <h1>{TitlesSearchResultElements.originalTitle}</h1>



        //titleElements.map(url => <div><Link to={titleUrl2} params={{ urlName: url }}>{url}</Link></div>)

      }
      <p>after</p>
    </Container>




  );
};
export default TitlesSearchResult;