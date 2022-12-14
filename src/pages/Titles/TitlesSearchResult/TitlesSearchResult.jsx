import { Component, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Tabs, Tab } from "react-bootstrap";
import { Outlet, Link, json, useParams } from "react-router-dom";

function TitlesSearchResult() {

  const [TitlesSearchResultElements, setTitlesSearchResultElements] = useState([]);
  console.log("!!!!!StartOfTitlesSearchResult!!!!!!");

  const {searchTerm} = useParams();
  //console.log(searchTerm);
  
  //const [{searchTerm}, setSearchTerm] = useState("");

  
  const testFetch = "http://localhost:5001/api/titles/tt0088634";

  // tt5787344

  const [status, setStatus] = useState("idle");

  const apiBase = "http://localhost:5001/api/titles?search="

function doSomething(list) {
 if(list != null) {
   return list.map(element => <p>{element.primaryTitle}</p>)
  }
  else return <p>yoyoyo</p>
}



  async function loadTitlePage() {

   
      console.log(searchTerm + "!!!!!TitlesSearchResult!!!!!!");

      const res = await fetch(apiBase + searchTerm);
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
  useEffect(() => { loadTitlePage()}, [searchTerm]);
  return (
    <Container>

      {}
      <h1>TitlesSearchResult</h1>
      {doSomething(TitlesSearchResultElements.items)}
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