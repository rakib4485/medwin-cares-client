import React from 'react';
import SpecialistCard from './SpecialistCard/SpecialistCard';

const Specialist = () => {
    return (
        <div className='my-11 lg:w-[1380px] mx-auto'>
            <div className='text-center'>
                <p className="uppercase text-blue-700 text-2xl">our specialist</p>
                <h1 className='lg:w-2/3 text-4xl lg:text-5xl mx-auto'>We have all the professional specialists in our hospital</h1>
            </div>
            <div>
                <SpecialistCard />
            </div>
        </div>
    );
};

export default Specialist;