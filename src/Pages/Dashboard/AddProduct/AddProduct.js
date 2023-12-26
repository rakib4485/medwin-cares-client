import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate();

    const handleAddProduct = data =>{
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData =>{
            console.log(imgData.data.url);
            const product={
                name: data.name,
                price: data.price,
                image: imgData.data.url
            }
           fetch('http://localhost:5000/shop',{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(product)
           }) 
           .then(res => res.json())
           .then(result =>{
            console.log(result);
            toast.success(`${data.name} is added successfully`);
                    navigate('/dashboard/manageproduct');
           })
        })
    }
    return (
        <div>
            <div className='bg-gray-200 h-full p-5'>
                <div className='w-96 p-7 shadow-lg bg-white rounded-md lg:mx-auto'>
                    <h1 className="text-3xl">Add a new product</h1>
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 py-[2px] rounded-lg mb-3 w-24"></div>
                    <form onSubmit={handleSubmit(handleAddProduct)}>
                        <div className="form-control w-full-max-w-xs">
                            <label className="label"><span className="label-text">Product Name</span></label>
                            <input {...register("name", { required: "Name is required" })} type="text" className="input input-bordered w-full max-w-xs" />
                            {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Price</span></label>
                            <input {...register("price", { required: "Price is required" })} type="text" className="input input-bordered w-full max-w-xs" />
                            {errors.price && <p className='text-red-600'>{errors.price?.message}</p>}
                        </div>
                        <div className="form-control w-full-max-w-xs">
                            <label className="label"><span className="label-text">Photo</span></label>
                            <input {...register("image", { required: "Photo is required" })} type="file" className="input input-bordered w-full max-w-xs" />
                            {errors.image && <p className='text-red-600'>{errors.image?.message}</p>}
                        </div>
                        <input className='btn btn-accent w-full my-3' value="Add Product" type="submit" />
                        <div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
