import React from 'react';
import useFirebase from '../../hooks/Usefirebase';

const Login = () => {
    const {googleSingIn}=useFirebase({})
    return (
        <div>
            <h2>Please Login</h2>
            <div>
                <button onClick={googleSingIn}>Google Singin</button>
            </div>
            <form className='Form'>
               
                <input type="email" name=""placeholder='Enter your email' id="" /><br />
                <input type="password" name="" placeholder='Enter a password' id="" /><br />
                <button type="submit" value='login'>Login</button>

            </form>
        </div>
    );
};

export default Login;