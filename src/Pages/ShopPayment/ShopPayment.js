import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/AuthProvider';

const ShopPayment = () => {
    const { register, formState: {errors}, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);

    const handleOrder = data =>{

    }
    return (
        <div className='mx-5 my-5'>
            <h1 className='text-4xl'>Order Form</h1>
            <p>Product Id</p>
            <p>Product Name</p>
            <p>Product Price</p>
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
    );
};

export default ShopPayment;