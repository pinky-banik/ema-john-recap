import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div className='flex justify-center items-center shadow-lg w-3/4 m-auto my-5'>
            <form className='w-full p-5'  action="">
                <h1 className='text-center py-8 text-2xl font-bold'>Login</h1>
                <div className='flex-row '>
                    <label htmlFor="email">Email</label>
                    <br />
                    <input className='p-3 my-2 border rounded w-full' type="email" name="email" placeholder='Email' />
                </div>
                <div className='flex-row '>
                    <label htmlFor="password">Password</label>
                    <br />
                    <input className='p-3 my-2 border rounded w-full' type="password" name="password" placeholder='Password' />
                </div>
                <input className='bg-orange-300 hover:bg-orange-400 w-full p-3 rounded my-2' type="submit" value="Login"/>
                <Link className='text-center mx-auto' to="/signup">
                <small >New to Ema john? <span className='text-orange-500'> Register</span> </small>
                </Link>

                <div className='flex mx-auto justify-center'>
                    <p>--------------- </p>
                    <p>Or</p>
                    <p> ----------------</p>

                </div>
                <button className='border-4 rounded p-2 mx-auto w-full'>Google Sign In</button>
            </form>
        </div>
    );
};

export default Login;