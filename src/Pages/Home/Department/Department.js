import React from 'react';
import DepartmentCard from './DepartmentCard';

const Department = () => {
    return (
        <div className='my-11 mx-[7%]'>
            <div className="text-center">
                 <p className="uppercase text-blue-700 text-2xl">our department</p> 
                 <h1 className='lg:w-2/3 text-3xl lg:text-5xl mx-auto'>Our hospital has all kinds of departments, so you can get all kinds of treatment</h1>
            </div>
            <div className=''>
                <DepartmentCard/>
            </div>
        </div>
    );
};

export default Department;