import React from 'react';
import { Link } from 'react-router-dom';
import signupImg from '../../assests/signup.jpg'

const SignUp = () => {
    return (
      <div className='mx-[7%]'>
      <div className='my-14 grid grid-cols-1 items-center lg:grid-cols-2'>
       <div className='hidden lg:block'>
         <img className='w-[86%]' src={signupImg} alt="" />
       </div>
      <div className='lg:w-3/4 mx-auto shadow-md shadow-cyan-600 px-6 py-28 rounded-md'>
           <h1 className='text-3xl font-bold'>Sign up!</h1>
           <p className="mb-8 mt-5">Please register here..</p>
           <form action="">
               <input type="text" className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:border-blue-500 mb-4" name="name" placeholder='Your Name' id="name" required />
               <input type="text" className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:border-blue-500 mb-4" name="phone" placeholder='Phone Number' id="phone" required />
               <input type="password"  className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:border-blue-500 mb-4" name="password" placeholder='Password' id="password" required />
               <p className='text-red-600'>Alreay have an account? <Link to='/login' className='text-blue-600'>Login</Link></p>
               <div className='my-4'>
               <button className='bg-green-600 w-full p-3 rounded text-white font-semibold'>Sign Up</button>
               
               </div>
   
               {/* <button className='w-full flex gap-3 items-center bg-cyan-900 rounded text-white p-2'><FaGoogle/> Login with Google</button> */}
           </form>
       </div>
      </div>
     </div>
    );
};

export default SignUp;