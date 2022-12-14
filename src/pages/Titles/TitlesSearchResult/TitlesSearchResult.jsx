import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Tabs, Tab } from "react-bootstrap";
import { Outlet, Link, json, useParams } from "react-router-dom";

function TitlesSearchResult() {
  const [TitlesSearchResultElements, setTitlesSearchResultElements] = useState([]);

  //const {searchTerm} = useParams();
  //console.log(searchTerm);

  const {searchType} = useParams();
  console.log("searchType.json");

  console.log(searchType);
  console.log("searchType.json");


  const [status, setStatus] = useState("idle");

  async function loadTitlePage() {

    try {

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
  useEffect(() => { loadTitlePage() }, [TitlesSearchResultElements]);
  return (
    <Container>

      <h1>TitlesSearchResult</h1>
    {  console.log(searchType)
        
    }

{console.log("searchType")}
      {(status === "done") &&

<h1>TitlesSearchResult</h1>

        //titleElements.map(url => <div><Link to={titleUrl2} params={{ urlName: url }}>{url}</Link></div>)

      }
      <p>after</p>
    </Container>




  );
};
export default TitlesSearchResult;