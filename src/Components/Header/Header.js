import { getAuth ,signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
import useFirebase from '../../hooks/Usefirebase';
import './Header.css'
const auth=getAuth(app)

const Header = () => {
   // const { user,handleSingOut } = useFirebase(); eta use korle button use hobe {/* <button onClick={handleSingOut}>sing Out</button> */}
   const [user]=useAuthState(auth)
    return (
        <div className='header'>
            <nav>
                <Link to={"/"}> Home</Link>
                <Link to={"/products"}> Products</Link>
                <Link to={"/order"}> Order</Link>
                <Link to={"/order review"}> Order Review</Link>

                <Link to={"/register"}> Register</Link>
                <span>{user?.displayName && user.displayName}</span>


                {
                    user ?

                        
                        <button onClick={()=>signOut(auth)}>sing Out</button>
                        :
                        <Link to={"/login"}>Login</Link>
                }
            </nav>

        </div>
    );
};

export default Header;