import React from 'react';
import expertiseImg from '../../../assests/expertise.jpg';
import { HiShieldCheck, HiPhoneOutgoing, HiOutlineDesktopComputer, HiOutlineTruck } from "react-icons/hi";

const Expertise = () => {
    return (
        <div className='my-5'>
            <div>
                <h1 className="text-center text-3xl font-semibold">Our Expertise</h1>
            </div>
            <div className='mt-4'>
                <div className='grid gap-3 grid-cols-1 lg:grid-cols-3 text-center '>
                    <div>
                       <div className='bg-gray-200 p-6'>
                        <div className='flex justify-center'>
                        <HiShieldCheck className='text-6xl bg-green-500 p-2 rounded-full text-white'/>
                        </div>
                       <h3 className='text-2xl font-semibold my-2'>Certified</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, ducimus?</p>
                       </div>
                    </div>
                    <div>
                    <div className='bg-blue-500 p-6 text-white'>
                    <div className='flex justify-center'>
                        <HiPhoneOutgoing className='text-6xl bg-green-500 p-2 rounded-full text-white'/>
                        </div>
                       <h3 className='text-2xl font-semibold my-2'>Emergency</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, ducimus?</p>
                       </div>
                    </div>
                    <div>
                    <div className='bg-gray-200 p-6'>
                    <div className='flex justify-center'>
                        <HiOutlineTruck className='text-6xl bg-green-500 p-2 rounded-full text-white'/>
                        </div>
                       <h3 className='text-2xl font-semibold my-2'>Ambulance</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, ducimus?</p>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expertise;