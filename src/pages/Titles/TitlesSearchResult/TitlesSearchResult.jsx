import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Tabs, Tab } from "react-bootstrap";
import { Outlet, Link, json, useParams } from "react-router-dom";

function TitlesSearchResult() {
  const [TitlesSearchResultElements, setTitlesSearchResultElements] = useState([]);

  //const {searchTerm} = useParams();
  //console.log(searchTerm);

  const {searchTerm} = useParams();



  const [status, setStatus] = useState("idle");

  const apiBase = ""

  async function loadTitlePage() {

    try {
      console.log(searchTerm + "!!!!!123321321321312!!!!!!");

      const res = await fetch("something");
      console.log("1");
      console.log(res);
      const json = await res.json();
      console.log("2");
      console.log(json);
      setTitlesSearchResultElements(json);
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

<h1>TitlesSearchResult12</h1>

     {/* {(status === "done") */} {(true === true) &&

<h1>TitlesSearchResult123</h1>

        //titleElements.map(url => <div><Link to={titleUrl2} params={{ urlName: url }}>{url}</Link></div>)

      }
      <p>after</p>
    </Container>




  );
};
export default TitlesSearchResult;