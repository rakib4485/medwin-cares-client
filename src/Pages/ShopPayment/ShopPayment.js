import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/AuthProvider';
import { useLoaderData, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const ShopPayment = () => {
  const product = useLoaderData();
    const { register, formState: {errors}, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleOrder = data =>{

      const order = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        address : data.address,
        productName: product.name,
        price: product.price
      }
      
      fetch('https://medwin-cares-server-bayaziddeveloper-gmailcom.vercel.app/orders/', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(order)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.acknowledged){
          toast.success('Order Request send successfully');
          navigate('/dashboard');
        }
      })
    }
    return (
        <div className='bg-gray-300 p-7'>
          <div className='w-96 p-7 shadow-lg bg-white rounded-md lg:mx-auto'>

          <h1 className='text-4xl'>Order Form</h1>
            {/* <p>Product Id: {product._id}</p> */}
            <p>Product Name: {product.name}</p>
            <p>Product Price: {product.price} <strong>BDT</strong></p>
            <div>
            <form onSubmit={handleSubmit(handleOrder)}>
            <div className="form-control w-full max-w-xs">
              <label className="label"><span className="label-text">Name</span></label>
            <input {...register("name", {required: "Name is required"})} defaultValue={user?.displayName} type="text" className="input input-bordered w-full max-w-xs"/>
            {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label"><span className="label-text">Email</span></label>
            <input {...register("email", {required: "Email Address is required"})} defaultValue={user?.email} type="text" className="input input-bordered w-full max-w-xs"/>
            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label"><span className="label-text">Phone Number</span></label>
            <input {...register("phone", {required: "Phone Number is required"})} defaultValue="" type="text" className="input input-bordered w-full max-w-xs"/>
            {errors.phone && <p className='text-red-600'>{errors.phone?.message}</p>}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label"><span className="label-text">Address</span></label>
            <textarea {...register("address", {required: "Address is required"})} defaultValue="" type="text" className="textarea textarea-bordered w-full max-w-xs"/>
            {errors.address && <p className='text-red-600'>{errors.address?.message}</p>}
            </div>
            
            <input className='btn btn-accent w-full my-3' value="Submit Order" type="submit" />
              {/* {loginError && <p className='text-red-600'>{loginError}</p>} */}
          </form>
            </div>
          </div>
        </div>
    );
};

export default ShopPayment;