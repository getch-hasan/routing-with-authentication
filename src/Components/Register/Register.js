import React from 'react';
import './Register.css'

const Register = () => {
    return (
        <div>
            <h3>Please Register</h3>
            <form className='Form'>
                <input type="text" placeholder='Enter your name' /><br />
                <input type="email" name=""placeholder='Enter your email' id="" /><br />
                <input type="password" name="" placeholder='Enter a password' id="" /><br />
                <button type="submit" value='register'>Register</button>

            </form>
            
        </div>
    );
};

export default Register;