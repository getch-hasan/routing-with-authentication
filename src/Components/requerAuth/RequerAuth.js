import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import {Navigate,useLocation} from 'react-router-dom'
const auth=getAuth(app)
const RequerAuth = ({children}) => {
    let location=useLocation();
    const [user]=useAuthState(auth)
    if(!user){
        return <Navigate to="/login" state={{from:location}} replace></Navigate>
    }
    return  children;
    
};

export default RequerAuth;