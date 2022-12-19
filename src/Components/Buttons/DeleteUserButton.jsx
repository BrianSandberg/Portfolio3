import React from 'react';

function DeleteUserButton(){
    const url = 'http://localhost:3000/user/deleteuser'

    return(
        <div>
            <button onClick={() => window.location.href = url}>
                Delete Profile
            </button>
        </div>
    );
}

export default DeleteUserButton;