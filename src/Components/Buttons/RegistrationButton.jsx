import React from 'react';

function RegisterButton(){
    const loginurl = 'http://localhost:3000/users/register'

    return(
        <div>
            <button onClick={() => window.location.href = loginurl}>
                Register
            </button>
        </div>
    );
}

export default RegisterButton;