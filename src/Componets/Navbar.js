import React from 'react';
import logo from '../images/Logo.svg';
import {NavLink} from 'react-router-dom';
import auth from '../Firebase/Config';
import { useAuthState } from 'react-firebase-hooks/auth';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    
    return (
        <div className=' bg-black flex justify-between px-20 py-2 items-center '>
            <img src={logo} alt="logo" />
            <nav className='text-white'>
                <NavLink className="px-5 hover:text-orange-500" to="/">Home</NavLink>
                <NavLink className="px-5 hover:text-orange-500" to="/shop">Shop</NavLink>
                <NavLink className="px-5 hover:text-orange-500" to="/orders">Orders</NavLink>
                <NavLink className="px-5 hover:text-orange-500" to="/login">Login</NavLink>
                <span>{user?.displayName}</span>
                <NavLink className="px-5 hover:text-orange-500" to="/signup">Sign Up</NavLink>
            </nav>
        </div>
    );
};

export default Navbar;