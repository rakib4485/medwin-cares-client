import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import loginImg from '../../assests/login.jpg'
import { useForm } from 'react-hook-form';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const handleLogin = data =>{
    console.log(data)
  }
  return (
    <div className='mx-[7%]'>
      <div className='my-14 grid grid-cols-1 items-center lg:grid-cols-2'>
        {/* <div className='lg:w-3/4 mx-auto shadow-md shadow-cyan-600 px-6 py-28 rounded-md'>
            <h1 className='text-3xl font-bold'>Welcome Back!</h1>
            <p className="mb-8 mt-5">Please Log in to your account.</p>
            <form action="">
                <input type="text"  className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:border-blue-500 mb-4" name="phone" placeholder='Phone Number' id="phone" required />
                <input type="password"  className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:border-blue-500 mb-4" name="password" placeholder='Password' id="password" required />
                <Link className='text-red-600'>Forget Password?</Link>
                <div className='flex gap-7 my-4'>
                <button className='bg-green-600 px-9 rounded text-white font-semibold'>Login</button>
                <Link to='/signup' className='border-green-600 border-2 p-2 rounded text-blue-600 font-semibold'>Create account</Link>
                </div>
    
                <button className='w-full flex gap-3 items-center bg-cyan-900 rounded text-white p-2'><FaGoogle/> Login with Google</button>
            </form>
        </div> */}
        <div className='h-[800px] flex justify-center items-center'>
          <div className='w-96 p-7 shadow-md shadow-blue-300 rounded-md'>
          <h2 className="text-3xl text-center mb-2">Login</h2>
          <form onSubmit={}>
            <div className="form-control w-full max-w-xs">
              <label className="label"><span className="label-text">Email</span></label>
            <input {...register("email")} type="text" className="input input-bordered w-full max-w-xs"/>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label"><span className="label-text">Password</span></label>
            <input {...register("password")} type="password" className="input input-bordered w-full max-w-xs"/>
            <label className="label"><span className="label-text">Forget Password?</span></label>
            </div>
            <input className='btn btn-accent w-full' value="Login" type="submit" />
          </form>
          <p className='mt-2'>New to Medwin Cares? <Link to='/signup' className='text-blue-700'>Create an account</Link></p>
          <div className="divider">OR</div>
          <button className='uppercase w-full btn btn-outline'>continue with google</button>
          </div>
        </div>
        <div className='hidden lg:block'>
          <img className='w-[86%]' src={loginImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;