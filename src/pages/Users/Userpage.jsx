import React, { useState, useEffect } from 'react';
import DeleteUserButton from '../../Components/Buttons/DeleteUserButton';
import { Outlet, Link, json, useParams, useNavigate } from "react-router-dom";


const Userpage = () => {
  //Model of user
  const [user, setUser] = useState("");
  const [userBookmarkedTitles, setuserBookmarkedTitles] = useState([]);
  const [userBookmarkedActors, setuSerBookmarkedActors] = useState([]);
  const [userRatings, setuserRatings] = useState([]);
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');
  //const fetchstring = 'http://localhost:5001/api/users/'${username}');

  const navigate = useNavigate();


  useEffect(() => {
    const fetchUser = async () => {
      console.log(username);
      const response = await fetch('http://localhost:5001/api/users/' + username, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      });
      let data = await response.json();
      console.log("data");

      console.log(data);
      setUser(data);
      setuserBookmarkedTitles(data.bookmarkedTitles);
      setuSerBookmarkedActors(data.bookmarkedActors);
      setuserRatings(data.userRatings);

    };
    fetchUser();
  }, []);

  return (
    <div>
      {user ? (
        <>
          <h1>{user.username}</h1>
          <h2>Title Bookmarks:</h2>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Number</th>
                <th scope="col">Title ID</th>
                <th scope="col">Time Stamp</th>
              </tr>
            </thead>
            <tbody>
           {insertTitleRows(userBookmarkedTitles)}
            </tbody>
          </table>
          <h2>Person Bookmarks:</h2>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Number</th>
                <th scope="col">person ID</th>
                <th scope="col">Time Stamp</th>
              </tr>
            </thead>
            <tbody>
           {insertPersonRows(userBookmarkedActors)}
            </tbody>
          </table>
          <h2>Title Ratings:</h2>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Number</th>
                <th scope="col">Title ID</th>
                <th scope="col">Rating</th>
              </tr>
            </thead>
            <tbody>
           {insertRatingRows(userRatings)}
            </tbody>
          </table>
        </>
      ) : (
        <p>Loading user information...</p>
      )}
      {DeleteUserButton()}
    </div>
  );

  function insertTitleRows(list) {
    let counter = 1
    if (list != null) {
      return (list.map(element =>
        <tr role="button" onClick={() => navigate("/title/" + element.title_ID)}>
          {console.log("list.title_ID")}

          {console.log(list.title_ID)}
          <td>{counter++}</td>
          <td>{element.title_ID}</td>
          <td>{element.timestamp}</td>

        </tr>
      ))
    }
    else return <tr><td>No List ???</td></tr>
  }
  
  function insertPersonRows(list) {
    let counter = 1
    if (list != null) {
      return (list.map(element =>
        <tr role="button" onClick={() => navigate("/person/" + element.person_ID)}>
          {console.log("list.person_ID")}

          {console.log(list.person_ID)}
          <td>{counter++}</td>
          <td>{element.person_ID}</td>
          <td>{element.timestamp}</td>

        </tr>
      ))
    }
    else return <tr><td>No List ???</td></tr>
  }

  function insertRatingRows(list) {
    let counter = 1
    if (list != null) {
      return (list.map(element =>
        <tr role="button" onClick={() => navigate("/title/" + element.title_ID)}>
          {console.log("list.title_ID")}

          {console.log(list.title_ID)}
          <td>{counter++}</td>
          <td>{element.title_ID}</td>
          <td>{element.rating}</td>

        </tr>
      ))
    }
    else return <tr><td>No List ???</td></tr>
  }
};

export default Userpage;