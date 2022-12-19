import React from 'react';

function LoginButton(){
    const loginurl = 'http://localhost:3000/users/login'

    return(
        <div>
            <button onClick={() => window.location.href = loginurl}>
                Login
            </button>
        </div>
    );
}

export default LoginButton;