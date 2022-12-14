import { Outlet, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
{/*import TitlesSearchResult from "../Titles/TitlesSearchResult/TitlesSearchResult";*/}

const NavigationBar = () => {
  
  const navigate = useNavigate();

  const [searchType, setSearchType] = useState("notSelected");
  const [searchTerm, setSearchTerm] = useState("");

  const apiTitlesBase = "/searchResults/";
  const apiPersonsBase = "http://localhost:5001/api/persons?search=";


  function selectSearchType(type) {
    setSearchType(type);
    console.log(type);
  }

  function searchClick() {
    setSearchTerm(document.getElementById("SearchField").value);
    const test123 = document.getElementById("SearchField").value;
    const link = apiTitlesBase + searchType + "/" + test123;
    navigate(link);
  }

      console.log("1");
      //navigate("");
      console.log("2");


    

    // <Link to="searchResults" params={searchTerm}>search</Link> // missing button and on click
  

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <input id="SearchField" type="text" placeholder="Search here" />
      <input type="radio" name="SearchType" id="SearchTitles" value="Titles" onClick={() => selectSearchType("titles")} />
      <label for="SearchTitles">Titles</label>
      <input type="radio" name="SearchType" id="SearchPersons" value="Persons" onClick={() => selectSearchType("persons")} />
      <label for="SearchPersons">Persons</label>
      <button on onClick={searchClick}>{  /*<Link to={link} params={{searchTerm, searchType}}>search</Link>*/}Search</button>
      <>{searchType}</>
    
      
    </>
  )
};

export default NavigationBar;