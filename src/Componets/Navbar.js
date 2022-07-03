import React from 'react';
import logo from '../images/Logo.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from './../Firebase/Config';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const handleSignOut = () =>{
        signOut(auth);
        navigate('/');
    }
    return (
        <div className=' bg-black flex justify-between px-20 py-2 items-center '>
            <img src={logo} alt="logo" />
            <nav className='text-white'>
                <NavLink className="px-5 hover:text-orange-500" to="/">Home</NavLink>
                <NavLink className="px-5 hover:text-orange-500" to="/shop">Shop</NavLink>
                <NavLink className="px-5 hover:text-orange-500" to="/orders">Orders</NavLink>
                <NavLink className="px-5 hover:text-orange-500" to="/signup">Sign Up</NavLink>
                {
                    user?.email ?
                    <button onClick={handleSignOut} className='bg-red-500 p-2 rounded-xl'>Sign Out</button> : 
                    <NavLink className="px-5 hover:text-orange-500" to="/login">Login</NavLink>
                }
                <span className='text-orange-600 p-2'>{user?.displayName}</span>
                
            </nav>
        </div>
    );
};

export default Navbar;