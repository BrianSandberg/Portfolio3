import React, { useState, useEffect } from 'react';


//Skal lave to forskellige buttons, så der både er til actors og titles
function BookmarkPersonButton(status, setStatus) {
  const [objectExists, setObjectExists] = useState();
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

      if (response.status === 200) {
        const data = await response.json();
        console.log(data);


        for (let i = 0; i < data.bookmarkedActors.length; i++) {
          if (data.bookmarkedActors[i].person_ID == lastUrlPart) {
            setObjectExists(true);
            console.log(data);
            console.log(" 31 true");
            break;
          } else {
            setObjectExists(false);
            console.log(" 35 false");
          }
        }
      }

    };
    fetchObject();
    //[] Forhindre programmet i at render hele tiden.. Idk how
  }, [status]);

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
        setStatus("working");
        if(objectExists){
        setObjectExists(false);
        }
        else{
          setObjectExists(true);
        }
        //throw new Error('Error updating');
      })
      .then((data) => {
        setLoading(false);
        //window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  return (
    <button
      onClick={handleclick}
      style={{
        backgroundColor: objectExists ? 'blue' : 'white',
      }}
      

    >
      Bookmark Actor    </button>
  );
}
export default BookmarkPersonButton;