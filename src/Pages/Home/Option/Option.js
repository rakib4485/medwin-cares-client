import React from 'react';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { MdAttachMoney, MdMedication, MdPermIdentity, MdPersonSearch } from "react-icons/md";

const Option = () => {
    return (
        <div className='my-5 lg:w-[1380px] mx-auto'>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5'>
                <div className='text-3xl bg-green-100 py-4 rounded text-center hover:bg-blue-700'>
                    <HiOutlineDesktopComputer className='flex text-5xl text-blue-700 ms-7'/>
                    <h1 className='mt-2'>Consult Online</h1>
                </div>
                <div className='text-3xl bg-green-100 py-4 rounded text-center'>
                    <MdPermIdentity className='flex text-5xl text-blue-700 ms-5'/>
                    <h1 className='mt-2'>Patients & Visitors</h1>
                </div>
                <div className='text-3xl bg-green-100 py-4 rounded text-center'>
                    <MdMedication className='flex text-5xl text-blue-700 ms-6'/>
                    <h1 className='mt-2'>Buy Medicine</h1>
                </div>
                <div className='text-3xl bg-green-100 py-4 rounded text-center'>
                    <MdAttachMoney className='flex text-5xl text-blue-700 ms-6'/>
                    <h1 className='mt-2'>Pay a Bill</h1>
                </div>
                <div className='text-3xl bg-green-100 py-4 rounded text-center'>
                    <MdPersonSearch className='flex text-5xl text-blue-700 ms-6'/>
                    <h1 className='mt-2'>Find a Doctor</h1>
                </div>
            </div>
        </div>
    );
};

export default Option;