import React from 'react';

function RegisterButton(){
    const url = 'http://localhost:3000/user/register'

    return(
        <div>
            <button onClick={() => window.location.href = url}>
                Register
            </button>
        </div>
    );
}

export default RegisterButton;