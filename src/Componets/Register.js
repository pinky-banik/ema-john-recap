import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {createUserWithEmailAndPassword } from "firebase/auth";
import auth from './../Firebase/Config';


const Register = () => {
    const[email,setEmail] = useState('');
const [password,setPassWord] = useState('');
const [confirmPassword,setConfirmPassword] = useState('');
const [error,setError] = useState('');

const handleEmailBlur = event =>{
    setEmail(event.target.value);
}
const handlePassWordBlur = event =>{
    setPassWord(event.target.value);
}
const handleConfirmPasswordlBlur = event =>{
    setConfirmPassword(event.target.value);
}
const handleCreateUser = event =>{
    event.preventDefault();
    if(password !== confirmPassword){
        setError("Your two password didn't match");
        return;
    }
}


    return (
        <div className='flex justify-center items-center shadow-lg w-3/4 m-auto my-5'>
            <form onSubmit={handleCreateUser} className='w-full p-5'  action=""> 
                <h1 className='text-center py-8 text-2xl font-bold'>Please SignUp</h1>
                <div className='flex-row '>
                    <label htmlFor="email">Email</label>
                    <br />
                    <input onBlur={handleEmailBlur} className='p-3 my-2 border rounded w-full' type="email" name="email" placeholder='Email' required/>
                </div>
                <div className='flex-row '>
                    <label htmlFor="password">Password</label>
                    <br />
                    <input onBlur={handlePassWordBlur} className='p-3 my-2 border rounded w-full' type="password" name="password" placeholder='Password' required/>
                </div>
                <div className='flex-row '>
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <br />
                    <input onBlur={handleConfirmPasswordlBlur} className='p-3 my-2 border rounded w-full' type="password" name="confirm-password" placeholder='Confirm Password' required/>
                </div>
                <p className='text-red-700'>{error}</p>
                <input className='bg-orange-300 cursor-pointer hover:bg-orange-400 w-full p-3 rounded my-2' type="submit" value="Sign Up"/>
                <Link className='text-center mx-auto' to="/login">
                <small >Already have an account? <span className='text-orange-500'>Login</span> </small>
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

export default Register;