import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import Loading from '../../../Shared/Loading/Loading';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate();

    const {data: specialties, isLoading} = useQuery({
        querykey: ['specialty'],
        queryFn: async () =>{
            const res = await fetch('https://medwin-cares-server-two.vercel.app/appointmentSpecialty');
            const data = await res.json();
            return data;
        }
    })
    const handleAddDoctor = data => {
        const image = data.image[0];
        console.log(image);
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData =>{
            if(imgData.success){
                console.log(imgData.data.url);
                const doctor = {
                    names: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    image: imgData.data.url,
                    meet: data.meet,
                    prices: 500,
                    slots: [
                        "08.00 AM - 08.30 AM",
                        "08.30 AM - 09.00 AM",
                        "09.00 AM - 9.30 AM",
                        "09.30 AM - 10.00 AM",
                        "10.00 AM - 10.30 AM",
                        "10.30 AM - 11.00 AM",
                        "11.00 AM - 11.30 AM",
                        "11.30 AM - 12.00 AM",
                        "1.00 PM - 1.30 PM",
                        "1.30 PM - 2.00 PM",
                        "2.00 PM - 2.30 PM",
                        "2.30 PM - 3.00 PM",
                        "3.00 PM - 3.30 PM",
                        "3.30 PM - 4.00 PM",
                        "4.00 PM - 4.30 PM",
                        "4.30 PM - 5.00 PM"
                      ]
                }

                fetch('https://medwin-cares-server-bayaziddeveloper-gmailcom.vercel.app/appointmentOptions',{
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    toast.success(`${data.name} is added successfully`);
                    // navigate('/dashboard/managedoctors');
                })
            }
        })
    }
    if(isLoading){
        return <Loading/>
    }
    return (
        <div className='bg-gray-200 h-full p-5'>
            <div className='w-96 p-7 shadow-lg bg-white rounded-md lg:mx-auto'>
            <h1 className="text-3xl">Add a new doctor</h1>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 py-[2px] rounded-lg mb-3 w-24"></div>
                <form onSubmit={handleSubmit(handleAddDoctor)}>
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
                        <label className="label"><span className="label-text">Google Meet Link</span></label>
                        <input {...register("meet", { required: "Google Meet link is required" })} type="text" className="input input-bordered w-full max-w-xs" />
                        {errors.meet && <p className='text-red-600'>{errors.meet?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Specialty</span></label>
                        <select {...register("specialty", { required: "Specialty is required" })} className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Pick a specialty</option>
                            {
                                specialties.map(specialty =><option 
                                    key={specialty._id}
                                    value={specialty.name}
                                >{specialty.name}</option>)
                            }
                            
                        </select>
                    </div>
                    <div className="form-control w-full-max-w-xs">
                        <label className="label"><span className="label-text">Photo</span></label>
                        <input {...register("image", { required: "Photo is required" })} type="file" className="input input-bordered w-full max-w-xs" />
                        {errors.image && <p className='text-red-600'>{errors.image?.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full my-3' value="Add Doctor" type="submit" />
                    <div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;