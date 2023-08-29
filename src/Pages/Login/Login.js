import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import loginImg from '../../assests/login.jpg'

const Login = () => {
    return (
      <div className='mx-[7%]'>
       <div className='my-14 grid grid-cols-1 items-center lg:grid-cols-2'>
       <div className='lg:w-3/4 mx-auto shadow-md shadow-cyan-600 px-6 py-28 rounded-md'>
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
    
                {/* <button className='w-full flex gap-3 items-center bg-cyan-900 rounded text-white p-2'><FaGoogle/> Login with Google</button> */}
            </form>
        </div>
        <div className='hidden lg:block'>
          <img className='w-[86%]' src={loginImg} alt="" />
        </div>
       </div>
      </div>
    );
};

export default Login;