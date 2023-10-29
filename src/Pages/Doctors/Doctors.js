import React from 'react';
import DoctorsIntro from './DoctorsIntro';
import DoctorsSearch from './DoctorsSearch';
import AllDoctors from './AllDoctors';

const Doctors = () => {
    return (
        <div>
            <DoctorsIntro/>
            <div className='lg:w-[1380px] mx-auto'>
            {/* <DoctorsSearch/> */}
            <AllDoctors/>
            </div>
        </div>
    );
};

export default Doctors;