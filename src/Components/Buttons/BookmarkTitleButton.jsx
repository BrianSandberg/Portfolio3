import React, { useState, useEffect } from 'react';

function BookmarkTitleButton() {
  const [objectExists, setObjectExists] = useState(false);
  const [loading, setLoading] = useState(false);
  //const [title, setTitle] = useState("");

  const currentUrl = window.location.href;
  const urlParts = currentUrl.split('/');
  const lastUrlPart = urlParts[urlParts.length - 1];

  const apiBase = "http://localhost:5001/api/users/"
  //Get username from variable
  const username = localStorage.getItem('username');
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchObject = async () => {
      const response = await fetch(apiBase + username);
      console.log(response.status)

      if (response.status === 200) {
        const data = await response.json();
        console.log(data.bookmarkedTitles);

        data.bookmarkedTitles.map((bookmark) => {
          console.log(lastUrlPart);

          if (bookmark.title_ID == lastUrlPart) {
            setObjectExists(true);
            console.log("true");
            console.log(`Bearer ${token}`);

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
    fetch(apiBase + username + '/bookmarktitle/' + lastUrlPart, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      //body
    })
      .then((response) => {
        if (response.ok) {
          console.log(token);
          //return response.json();
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
      Bookmark Title    </button>
  );
}
export default BookmarkTitleButton;