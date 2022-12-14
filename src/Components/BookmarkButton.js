import React, { useState, useEffect } from 'react';


//Skal lave to forskellige buttons, så der både er til actors og titles
function CheckObjectButton() {
  const [objectExists, setObjectExists] = useState(false);
  //const objectExists = false;
  console.log("asdf")

  useEffect(() => {
    const fetchObject = async () => {
      const response = await fetch('http://localhost:5001/api/users/testing123');
      console.log(response.status)
      if (response.status === 200) {
        const data = await response.json();
        setObjectExists(true);

        console.log("data: ", data)
        console.log("ex: ", objectExists)
      }
    };
    fetchObject();
  });


  return (
    <button
      style={{
        backgroundColor: objectExists ? 'white' : 'blue',
      }}
    >
      Check if object exists
    </button>
  );
}
export default CheckObjectButton;