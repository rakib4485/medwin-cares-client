import React from 'react';
import { MdCalendarMonth, MdFactCheck, MdLightbulbOutline, MdPersonSearch } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Solution = () => {
    return (
        <div className=''>
            {/* <div className="text-center">
            <p className="uppercase text-blue-700 text-2xl">solution</p> 
                 <h1 className='lg:w-1/2 text-3xl lg:text-5xl mx-auto'>Some easy steps to get your proper solution</h1>
            </div>
            <div className="my-4 mx-3 lg:mx-0">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <div className=''>
                    <MdPersonSearch className='text-8xl my-2 ms-14 text-blue-700 border-2  border-gray-400 rounded-full p-4'/>
                    <h1 className='text-3xl lg:text-4xl'>Search Doctor</h1>
                    </div>
                    <div className=''>
                    <MdFactCheck className='text-8xl my-2 ms-14 text-blue-700 border-2  border-gray-400 rounded-full p-4'/>
                    <h1 className='text-3xl lg:text-4xl'>Check doctor profile</h1>
                    </div>
                    <div className=''>
                    <MdCalendarMonth className='text-8xl my-2 ms-14 text-blue-700 border-2  border-gray-400 rounded-full p-4'/>
                    <h1 className='text-3xl lg:text-4xl'>Doctor appointment</h1>
                    </div>
                    <div className=''>
                    <MdLightbulbOutline className='text-8xl my-2 ms-14 text-blue-700 border-2  border-gray-400 rounded-full p-4'/>
                    <h1 className='text-3xl lg:text-4xl'>Get first solution</h1>
                    </div>
                </div>
            </div> */}
            <div className='bg-blue-500'>
               <div className='py-28'>
               <h1 className='text-center text-4xl lg:text-7xl text-white font-bold w-3/4 mx-auto'>Make Your Healthcare Comfortable With Medwin Cares</h1>
                <div className='text-center mt-9'>
                        <Link to='/appointments' className='bg-black text-white py-5 px-8 rounded-md'>Book Appointment</Link>
                    </div>
               </div>
            </div>
        </div>
    );
};

export default Solution;