import React from 'react';

function DeleteUserButton(){
    const loginurl = 'http://localhost:3000/users/deleteuser'

    return(
        <div>
            <button onClick={() => window.location.href = loginurl}>
                Delete Profile
            </button>
        </div>
    );
}

export default DeleteUserButton;