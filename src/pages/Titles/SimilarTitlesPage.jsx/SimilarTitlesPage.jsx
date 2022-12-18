import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Tabs, Tab } from "react-bootstrap";
import { Outlet, Link, json, useParams, useNavigate } from "react-router-dom";

function SimilarTitlesPage() {
  const [similarTitleObj, setSimilarTitleObj] = useState([]);
  const apiBase = "http://localhost:5001/api/titles/"

  const { id } = useParams();

  const similarTitlesAPI = apiBase + id + "/similartitles";

  const navigate = useNavigate();


  // tt0343107

  const [status, setStatus] = useState("idle");
  let counter = 1;

  async function loadTitlePage() {

    try {
      const res = await fetch(similarTitlesAPI);
      console.log("1");
      console.log(res);
      const json = await res.json();
      console.log("2222222222222222222222222222222222222");
      console.log(json);
      setSimilarTitleObj(json);
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
    <Container class="whole">
      <h1>Similar Titles</h1>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Number</th>
            <th scope="col">Primary Title</th>
          </tr>
        </thead>
        <tbody>
          {insertRows(similarTitleObj.items)}
        </tbody>
      </table>
    </Container>



  );

  function insertRows(list) {
    if (list != null) {
      return (list.map(element =>
        <tr role="button" onClick={() => navigate("/title/" + element.titleId)}>
          <td>{counter++}</td>
          <td>{element.primaryTitle}</td>
        </tr>
      ))
    }
    else return <p>waiting</p>
  }
};


export default SimilarTitlesPage;