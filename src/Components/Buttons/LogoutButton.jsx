function logout() {

    return (
      <button
  
      //Removes the users jwt token and their username, from the localstorage
        onClick={() => { localStorage.removeItem('token'); localStorage.removeItem('username'); }}
      >
        Logout    </button>
    );
  }
  
  
  export default logout;