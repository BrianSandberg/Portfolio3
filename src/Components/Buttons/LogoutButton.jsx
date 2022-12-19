function logout() {

  return (
    <button

      //Removes the users jwt token and their username, from the localstorage
      onClick={() => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        window.location.href="http://localhost:3000/"
      }}
    >
      Logout    </button>
  );
}


export default logout;