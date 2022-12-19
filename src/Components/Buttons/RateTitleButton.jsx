import React, { useState, useEffect } from 'react';

function Rating() {
  const [value, setValue] = useState(1);
  const [apiData, setApiData] = useState(null);

  const apiBase = "http://localhost:5001/api/users/"
  const username = localStorage.getItem('username');
  const token = localStorage.getItem('token');

  const testTitle = "tt0052520";

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(localStorage.getItem('username'));
    fetch(apiBase + username + '/' + testTitle + '/' + value, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }

  useEffect(() => {
    const fetchObject = async () => {
      const response = await fetch(apiBase + username);
      console.log(response.status)

      if (response.status === 200) {
        const data = await response.json();
        //setbookmarkList(data.bookmarkedTitles);
        console.log(data.userRatings);

        data.userRatings.map((ratings) => {
          console.log(testTitle);
          //const tempString = bookmark.title_ID;

          if (ratings.title_ID == testTitle) {
            setApiData(ratings.rating);
            console.log("true");
            //console.log(`Bearer ${token}`);

          }
          else {
            setApiData("You have not yet given this title a rating!");
            console.log("false");
          }

        }
        )
        //console.log(data.bookmarkedTitles[0].title_ID)
      }

    };
    fetchObject();
    //[] Forhindre programmet i at render hele tiden.. Idk how
  }, /*[]*/);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Rate this title:
          <select value={value} onChange={handleChange}>
            {[...Array(10).keys()].map(i => (
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            ))}
          </select>
        </label>
        <button type="submit">Submit rating</button>
      </form>
      {apiData && <p>You have rated this title: {apiData}</p>}
    </>
  );
}

export default Rating;