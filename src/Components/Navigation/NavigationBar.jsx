import { Outlet, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
{/*import TitlesSearchResult from "../Titles/TitlesSearchResult/TitlesSearchResult";*/ }

const NavigationBar = () => {

  const navigate = useNavigate();

  const [searchType, setSearchType] = useState("titles");
  const [searchTerm, setSearchTerm] = useState("");

  const base = "/searchResults/";

  function setSearchTypefunc(type) {
    setSearchType(type);
    console.log(type);
  }

  function getValueFromInput() {
    const x = document.getElementById("SearchField").value
    return x;
  }

  function searchClick() {
    setSearchTerm(document.getElementById("SearchField").value);
    //const SearchValue = document.getElementById("SearchField").value;
    const searchText = getValueFromInput()
    const link = base + searchType + "/" + searchText;
    console.log("I AM NOW GOING TO: " + link);
    navigate(link, { searchText: searchText });
  }




  // <Link to="searchResults" params={searchTerm}>search</Link> // missing button and on click


  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        {/* setSearchTermfunc(document.getElementById("SearchField").value)*/}
        <input id="SearchField" type="text" placeholder="Search here" />
        <input type="radio" name="SearchType" id="SearchTitles" value="Titles" onClick={() => setSearchTypefunc("titles")} />
        <label htmlFor="SearchTitles">Titles</label>
        <input type="radio" name="SearchType" id="SearchPersons" value="Persons" onClick={() => setSearchTypefunc("persons")} />
        <label htmlFor="SearchPersons">Persons</label>
        <button onClick={searchClick}>{  /*<Link to={link} params={{searchTerm, searchType}}>search</Link>*/}Search</button>
        <>{searchType}</>
      </nav>

    </>
  )
};

export default NavigationBar;