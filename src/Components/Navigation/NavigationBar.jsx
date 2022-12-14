import { Outlet, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
{/*import TitlesSearchResult from "../Titles/TitlesSearchResult/TitlesSearchResult";*/}

const NavigationBar = () => {
  const navigate = useNavigate();

  const [searchType, setSearchType] = useState("notSelected");
  const [searchTerm, setSearchTerm] = useState("");

  const apiTitlesBase = "/title/";
  const apiPersonsBase = "http://localhost:5001/api/persons?search=";


  function selectSearchType(type) {
    setSearchType(type);
    console.log(type);
  }


  const goToResultsPage = () => {
    if (true)
   
    try {

      const searchText = document.getElementById("SearchField").innerHTML;
      console.log("1");
      navigate("");
      console.log("2");


    } catch (error) {
      console.log("yo");
      console.log(error);
      
    }
    // <Link to="searchResults" params={searchTerm}>search</Link> // missing button and on click
  }

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
      <button><Link to="searchResults/:searchTerm" params={{searchTerm, searchType}}>search</Link></button>
      <>{searchType}</>
    
      
    </>
  )
};

export default NavigationBar;