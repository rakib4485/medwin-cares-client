import React from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import { HiEnvelope, HiPhone } from "react-icons/hi2";

const Contact = () => {
    return (
        <div>
            <div className='text-center my-5 bg-black p-8 text-white' style={{borderTopLeftRadius: "70px", borderBottomRightRadius: "70px"}}>
                <h1 className='text-6xl font-semibold'>We'd love to hear from you</h1>
            </div>
            <div className='my-5'>
                <p className='uppercase mb-2 ml-28 font-semibold'>have a question</p>
                <div className='grid grid-cols-1 lg:grid-cols-3 w-3/4 mx-auto'>
                <div className='text-center'>
                    <div className='flex justify-center text-7xl'>
                        <HiPhone className='bg-red-500 text-white p-3 rounded-full mb-3'/>
                    </div>
                    <h1 className='text-3xl'>Call Us</h1>
                    <h1 className='text-gray-700'>+61 383 765 284</h1>
                </div>
                <div className='text-center'>
                    <div className='flex justify-center text-7xl'>
                        <HiLocationMarker className='bg-red-500 text-white p-3 rounded-full mb-3'/>
                    </div>
                    <h1 className="text-3xl">Location</h1>
                    <h1 className="text-gray-700">Vencouver, Canada</h1>
                </div>
                <div className='text-center'>
                    <div className='flex justify-center text-7xl'>
                    <HiEnvelope className='bg-red-500 text-white p-3 rounded-full mb-3'/>
                    </div>
                    <h1 className="text-3xl">Say Hello</h1>
                    <h1 className="text-gray-700">medwin@care.com</h1>
                </div>
                </div>
              
            </div>
            <div className='lg:flex items-center my-12 mx-5'>
                <div className='mb-5 lg:mb-0'>
                <h1 className='text-6xl font-bold'>Can't find what you need?</h1>
                <p className='text-3xl lg:w-3/4'>Please get in touch and our support team will answer all your questions.</p>
                </div>
                <div>
                    <form action="">
                        <div className='flex gap-3'>
                        <div className='mb-2'>
                        <p className='text-2xl'>First Name</p>
                        <input type="text" name="name" id="" className='py-2 w-full' style={{borderBottom: "3px solid red"}}/>
                        </div>
                       <div>
                       <p className='text-2xl'>Last Name</p>
                        <input type="text" name="name" id="" className='py-2 w-full' style={{borderBottom: "3px solid red"}}/>
                       </div>
                        </div>
                        <p className='text-2xl'>Email</p>
                        <input type="text" name="email" id="" className='py-2 w-full' style={{borderBottom: "3px solid red"}}/>
                        <p className="text-2xl my-2">Message</p>
                        <textarea name="" id="" cols="70" rows="4" className='w-full' style={{borderBottom: "3px solid red"}}></textarea>
                        <button className='uppercase bg-purple-400 px-4 py-3 text-white'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;