import React, { useState, useEffect } from 'react';


//Skal lave to forskellige buttons, så der både er til actors og titles
function BookmarkPersonButton() {
  const [objectExists, setObjectExists] = useState(false);
  const [loading, setLoading] = useState(false);
  //const [bookmarkList, setbookmarkList] = useState([]);

  const apiBase = "http://localhost:5001/api/users/"
  //Get username from variable
  const username = localStorage.getItem('username');
  const token = localStorage.getItem('token');
  //Get titleID from variable from search
  //const personTest = "nm0000062"
  //const objectExists = false;

  
  const currentUrl = window.location.href;
  const urlParts = currentUrl.split('/');
  const lastUrlPart = urlParts[urlParts.length - 1];

  useEffect(() => {
    const fetchObject = async () => {
      const response = await fetch(apiBase + username);
      console.log(response.status)

      if (response.status === 200) {
        const data = await response.json();

        data.bookmarkedActors.map((bookmark) => {

          //2 lighedstegn for at sammenligne data - Brug 3 for at sammenligne data og type
          if (bookmark.person_ID == lastUrlPart) {
            setObjectExists(true);
            console.log("true");
          }
          else {
            setObjectExists(false);
            console.log("false");
          }
        }
        )
      }

    };
    fetchObject();
    //[] Forhindre programmet i at render hele tiden.. Idk how
  }, /*[]*/);

  const handleclick = () => {
    fetch(apiBase + username + '/bookmarkperson/' + lastUrlPart, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      //body
    })
      .then((response) => {
        if (response.ok) {
        }
        //throw new Error('Error updating');
      })
      .then((data) => {
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  return (
    <button
      onClick={handleclick} disabled={loading}
      style={{
        backgroundColor: objectExists ? 'blue' : 'white',
      }}
      

    >
      Bookmark Actor    </button>
  );
}
export default BookmarkPersonButton;