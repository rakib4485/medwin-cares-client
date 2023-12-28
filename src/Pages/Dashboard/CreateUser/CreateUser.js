import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import useToken from '../../../hooks/useToken';

const CreateUser = ({refetch}) => {
    const { register, formState: { errors }, handleSubmit } = useForm();
  const { createUser, updateUser} = useContext(AuthContext);
  const [signUpError, setSignUPError] = useState('');
  const [createdUserEmail, setCreatedUserEmail] = useState('')
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();

    const handleSignup = (data) => {
        setSignUPError('');
        createUser(data.email, data.password)
          .then(result => {
            const user = result.user;
            console.log(user);
            toast('User Created Successfully')
            navigate('/')
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
    
      const saveUser = (name, email) => {
        const user = { name, email };
        fetch('https://medwin-cares-server-two.vercel.app/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(user)
        })
          .then(res => res.json())
          .then(data => {
            setCreatedUserEmail(email);
          })
      }
    
    return (
        <div className='bg-gray-200 h-full p-5'>
            <div className='w-96 p-7 shadow-lg bg-white rounded-md lg:mx-auto'>
            <h1 className="text-3xl">Create New User</h1>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 py-[2px] rounded-lg mb-3 w-24"></div>
           
            <form onSubmit={handleSubmit(handleSignup)}>
              <div className="form-control w-full-max-w-xs">
                <label className="label"><span className="label-text">Name</span></label>
                <input {...register("name", { required: "Name is required" })} type="text" className="input input-bordered w-full max-w-xs" />
                {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label"><span className="label-text">Email</span></label>
                <input {...register("email", { required: "Email Address is required" })} type="text" className="input input-bordered w-full max-w-xs" />
                {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label"><span className="label-text">Password</span></label>
                <input {...register("password", { required: "Password is required", minLength: { value: 6, message: 'Password must be 6 characters or longer' } })} type="password" className="input input-bordered w-full max-w-xs" />
                {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
              </div>
              <input className='btn btn-accent w-full my-3' value="Create User" type="submit" />
              {signUpError && <p className='text-red-600'>{signUpError}</p>}
              <div>
              </div>
            </form>

            </div>
        </div>
    );
};

export default CreateUser;