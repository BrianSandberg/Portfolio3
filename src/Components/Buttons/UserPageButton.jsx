import React from 'react';

function UserPageButton(){
    const loginurl = 'http://localhost:3000/users/'+localStorage.getItem('username');

    return(
        <div>
            <button onClick={() => window.location.href = loginurl}>
                Your Page
            </button>
        </div>
    );
}

export default UserPageButton;