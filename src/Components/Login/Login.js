import { getAuth } from 'firebase/auth';
import React from 'react';
//import useFirebase from '../../hooks/Usefirebase';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import {useLocation,useNavigate} from 'react-router-dom';
const auth=getAuth(app)

const Login = () => {
    //const {googleSingIn}=useFirebase({})
    const [signInWithGoogle, user, loading, error]=useSignInWithGoogle(auth)
    const location=useLocation();
    const navigate=useNavigate();
    const from =location?.state?.from?.pathname || '/';
    const handleGooglesingin=()=>{
        signInWithGoogle()
        .then(()=>{
            navigate(from,{replace:true})
        })
    }
    return (
        <div>
            <h2>Please Login</h2>
            <div>
               {/*  <button onClick={googleSingIn}>Google Singin</button> */}
                <button onClick={handleGooglesingin}>Google Singin</button>
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