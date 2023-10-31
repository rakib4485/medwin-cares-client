import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import signupImg from '../../assests/signup.jpg'
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';

const SignUp = () => {
  const { register, formState: {errors}, handleSubmit } = useForm();
  const {createUser, updateUser} = useContext(AuthContext);
  const [signUpError, setSignUPError] = useState('');
  const navigate = useNavigate();
  
  const handleSignup = (data) =>{
    setSignUPError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Successfully')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email);
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
  }

  const saveUser = (name, email) =>{
    const user = {name, email};
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log('save user', data);
      navigate('/');
    })
  }

    return (
      <div className='mx-[7%]'>
      <div className='my-10 grid grid-cols-1 items-center lg:grid-cols-2'>
       <div className='hidden lg:block'>
         <img className='w-[86%]' src={signupImg} alt="" />
       </div>
      {/* <div className='lg:w-3/4 mx-auto shadow-md shadow-cyan-600 px-6 py-28 rounded-md'>
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
   
               <button className='w-full flex gap-3 items-center bg-cyan-900 rounded text-white p-2'><FaGoogle/> Login with Google</button>
           </form>
       </div> */}

<div className='h-[800px] flex justify-center items-center'>
          <div className='w-96 p-7 shadow-md shadow-blue-300 rounded-md'>
          <h2 className="text-3xl text-center mb-2">Sign up</h2>
          <form onSubmit={handleSubmit(handleSignup)}>
            <div className="form-control w-full-max-w-xs">
              <label className="label"><span className="label-text">Name</span></label>
              <input {...register("name", {required: "Name is required"})} type="text" className="input input-bordered w-full max-w-xs"/>
              {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label"><span className="label-text">Email</span></label>
            <input {...register("email", {required: "Email Address is required"})} type="text" className="input input-bordered w-full max-w-xs"/>
            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label"><span className="label-text">Password</span></label>
            <input {...register("password", {required: "Password is required",  minLength: {value: 6, message: 'Password must be 6 characters or longer'}})} type="password" className="input input-bordered w-full max-w-xs"/>
            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
            </div>
            <input className='btn btn-accent w-full my-3' value="Sign Up" type="submit" />
            {signUpError && <p className='text-red-600'>{signUpError}</p>}
            <div>
            </div>
          </form>
          <p>Already have an account? <Link to='/login' className='text-blue-700'>Login</Link></p>
          <div className="divider">OR</div>
          <button className='uppercase w-full btn btn-outline'>continue with google</button>
          </div>
        </div>
      </div>
     </div>
    );
};

export default SignUp;