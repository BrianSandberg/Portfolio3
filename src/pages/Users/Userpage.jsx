import React, { useState, useEffect } from 'react';
import DeleteUserButton from '../../Components/Buttons/DeleteUserButton';
import ChangePasswordButton from '../../Components/Buttons/ChangePasswordButton';
import ChangePassword from './ChangePassword';

const Userpage = () => {
  //Model of user
  const [user, setUser] = useState("");
  const [userBookmarkedTitles, setuserBookmarkedTitles] = useState([]);
  const [userBookmarkedActors, setuSerBookmarkedActors] = useState([]);
  const [userRatings, setuserRatings] = useState([]);
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');
  //const fetchstring = 'http://localhost:5001/api/users/'${username}');

  useEffect(() => {
    const fetchUser = async () => {
      console.log(username);
      const response = await fetch('http://localhost:5001/api/users/' + username,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,}
    });
      const data = await response.json();
      console.log(data);
      setUser(data);
      setuserBookmarkedTitles(data.bookmarkedTitles);
      setuSerBookmarkedActors(data.bookmarkedActors);
      setuserRatings(data.userRatings);
      
    };
    fetchUser();
  });

  //console.log("here2",user.bookmarkedTitles);
  const titles = userBookmarkedTitles.map((titles) => <li>Title: {titles.title_ID} - Gemt: {titles.timestamp}</li>);
  const actors = userBookmarkedActors.map((actors) => <li>Person: {actors.person_ID} - Gemt: {actors.timestamp} </li>);
  const ratings = userRatings.map((ratings) => <li>{ratings.title_ID} Rating: {ratings.rating}</li>);
  

  return (
    <div>
      {user ? (
        <>
          <h1>Bruger {user.username}!</h1>
          <p>{user.username} information:</p>
          <ul>
            <li>Bookmarked Titles: 
              <ul>
              {titles}
              </ul>
            </li>
            <li>Bookmarked Actors: </li>
            <ul>
              {actors}
            </ul>
            <li>Title Ratings: </li>
            <ul>
              {ratings}
            </ul>
          </ul>
        </>
      ) : (
        <p>Loading user information...</p>
      )}
      {ChangePasswordButton()}
      {DeleteUserButton()}
    </div>
  );
};

export default Userpage;