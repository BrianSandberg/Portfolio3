import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import Landing from "./Components/Landing";
import TitlesSearchResult from "./pages/Titles/TitlesSearchResult/TitlesSearchResult";
import PersonsSearchResult from "./pages/Persons/PersonsSearchResult/PersonsSearchResult";

import TitlePage from "./pages/Titles/TitlePage/TitlePage";
import PersonPage from "./pages/Persons/PersonPage/PersonPage";
import CoActorsPage from "./pages/Persons/CoActorsPage/CoActorsPage";
import SimilarTitlesPage from "./pages/Titles/SimilarTitlesPage.jsx/SimilarTitlesPage";
import Login from "./pages/Users/LoginPage";
import Userpage from "./pages/Users/Userpage";
import UserRegistrationPage from "./pages/Users/RegistrationPage";
import DeleteUser from "./pages/Users/DeleteUser";
import ChangePassword from "./pages/Users/ChangePassword";

//section 3
//section 3
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<NoPage />} />
          <Route index element={<Landing />} />

          {/* TITLES */}
          <Route path="/title/:id" element={<TitlePage/>} />
          <Route path="/title/:id/similartitles" element={<SimilarTitlesPage/>} />
          <Route path="/searchResults/titles/:searchTerm" element={<TitlesSearchResult />} />

          {/* PERSONS */}
          <Route path="/person/:id" element={<PersonPage/>} /> 
          <Route path="/searchResults/persons/:searchTerm" element={<PersonsSearchResult />} />
          <Route path="/person/:id/CoActors" element={<CoActorsPage/>} />


          {/* USERS */}
          <Route path='/user/:username' element={<Userpage/>} />
          <Route path="/user/deleteuser" element={<DeleteUser/>} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
