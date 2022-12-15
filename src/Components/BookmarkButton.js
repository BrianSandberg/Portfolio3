import React, { useState, useEffect } from 'react';


//Skal lave to forskellige buttons, så der både er til actors og titles
function CheckObjectButton() {
  const [objectExists, setObjectExists] = useState(false);
  //const [bookmarkList, setbookmarkList] = useState([]);

  const apiBase = "http://localhost:5001/api/users/"
  //Get username from variable
  const username = "testing123";
  //Get titleID from variable from search
  const titleTest = "tt0052520"
  //const objectExists = false;
  console.log("asdf")

  useEffect(() => {
    const fetchObject = async () => {
      const response = await fetch(apiBase + username);
      console.log(response.status)

      if (response.status === 200) {
        const data = await response.json();
        //setbookmarkList(data.bookmarkedTitles);
        console.log(data.bookmarkedTitles);

        data.bookmarkedTitles.map((bookmark) => {
          console.log("penis" + bookmark.title_ID);
          console.log(titleTest);
          //const tempString = bookmark.title_ID;

          if (bookmark.title_ID == titleTest){
            setObjectExists(true);
            console.log("print");
          }
          
        }
        )
        console.log(data.bookmarkedTitles[0].title_ID)
      }
      
    };
    fetchObject();
    //[] Forhindre programmet i at render hele tiden.. Idk how
  }, []);


  return (
    <button
      style={{
        backgroundColor: objectExists ? 'blue' : 'white',
      }}
    >
      Check if object exists
    </button>
  );
}
export default CheckObjectButton;