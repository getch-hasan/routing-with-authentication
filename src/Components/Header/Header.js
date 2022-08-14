import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/Usefirebase';
import './Header.css'

const Header = () => {
    const { user,handleSingOut } = useFirebase();
    return (
        <div className='header'>
            <nav>
                <Link to={"/"}> Home</Link>
                <Link to={"/products"}> Products</Link>
                <Link to={"/order"}> Order</Link>
                <Link to={"/order review"}> Order Review</Link>

                <Link to={"/register"}> Register</Link>


                {
                    user ?

                        <button onClick={handleSingOut}>sing Out</button>
                        :
                        <Link to={"/login"}>Login</Link>
                }
            </nav>

        </div>
    );
};

export default Header;