import React from 'react';

function UserPageButton(){
    const url = 'http://localhost:3000/user/'+localStorage.getItem('username');

    return(
        <div>
            <button onClick={() => window.location.href =  url}>
                Your Page
            </button>
        </div>
    );
}

export default UserPageButton;