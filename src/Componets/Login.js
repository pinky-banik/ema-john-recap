import React, { useState } from 'react';
import { useSignInWithGoogle, useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../Firebase/Config';


const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassWord] = useState('');

    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    const[ user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    
    
    
    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }
    const handlePassWordBlur = event =>{
        setPassWord(event.target.value);
    }
    const handleGoogleSignIn =()=>{
        signInWithGoogle();
        console.log(user);
    }

    const handleSignIn = e =>{
        e.preventDefault();
        signInWithEmailAndPassword(email,password);
        if(user){
            navigate('/');
        }
        console.log(user);
    }
    
    return (
        <div className='flex justify-center items-center shadow-lg w-3/4 m-auto my-5'>
            <h2>
                {error?.message}
            </h2>
            <form onSubmit={handleSignIn} className='w-full p-5' >
                <h1 className='text-center py-8 text-2xl font-bold'>Login</h1>
                <div className='flex-row '>
                    <label htmlFor="email">Email</label>
                    <br />
                    <input onBlur={handleEmailBlur} className='p-3 my-2 border rounded w-full' type="email" name="email" placeholder='Email' />
                </div>
                <div className='flex-row '>
                    <label htmlFor="password">Password</label>
                    <br />
                    <input onBlur={handlePassWordBlur} className='p-3 my-2 border rounded w-full' type="password" name="password" placeholder='Password' />
                </div>
                {loading && <p>Loding...</p> }
                <input className='bg-orange-300 hover:bg-orange-400 w-full p-3 rounded my-2' type="submit" value="Login"/>
                <Link className='text-center mx-auto' to="/signup">
                <small >New to Ema john? <span className='text-orange-500'> Register</span> </small>
                </Link>

                <div className='flex mx-auto justify-center'>
                    <p>--------------- </p>
                    <p>Or</p>
                    <p> ----------------</p>

                </div>
                <p>{error?.message}</p>
                <button onClick={handleGoogleSignIn} className='border-4 rounded p-2 mx-auto w-full'>Google Sign In</button>
            </form>
        </div>
    );
};

export default Login;