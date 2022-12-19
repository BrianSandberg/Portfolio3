import React from 'react';

function ChangePasswordButton(){
    const loginurl = 'http://localhost:3000/users/updatepassword';

    return(
        <div>
            <button onClick={() => window.location.href = loginurl}>
                Change Password
            </button>
        </div>
    );
}

export default ChangePasswordButton;