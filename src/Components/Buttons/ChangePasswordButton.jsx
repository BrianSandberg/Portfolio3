import React from 'react';

function ChangePasswordButton(){
    const url = 'http://localhost:3000/user/updatepassword';

    return(
        <div>
            <button onClick={() => window.location.href = url}>
                Change Password
            </button>
        </div>
    );
}

export default ChangePasswordButton;