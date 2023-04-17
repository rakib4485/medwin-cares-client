import React from 'react';
import specialist from '../../../assests/specialist.avif'
import secure from '../../../assests/secure.avif'
import patient from '../../../assests/patient.avif'
import video from '../../../assests/video.avif'

const Trust = () => {
    return (
        <div className='my-5'>
            <div className='text-center text-4xl font-semibold'>
                <h1>Why you should trust us?</h1>
                <h1>Get know about us</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 mt-4'>
                <div className='text-center'>
                    <img className='rounded-full w-16 mx-auto' src={specialist} alt="" />
                    <h1 className='text-2xl font-semibold my-3'>All Specialist</h1>
                    <p className='w-2/3 mx-auto'>You can reach out more then 2500 doctors from 80+ specialties, who are experienced in telemedicine.</p>
                </div>
                <div>
                <div className='text-center'>
                    <img className='rounded-full w-16 mx-auto' src={secure} alt="" />
                    <h1 className='text-2xl font-semibold my-3'>Private & Secure</h1>
                    <p className='w-2/3 mx-auto'>You can reach out more then 2500 doctors from 80+ specialties, who are experienced in telemedicine.</p>
                </div>
                </div>
                <div>
                <div className='text-center'>
                    <img className='rounded-full w-16 mx-auto' src={patient} alt="" />
                    <h1 className='text-2xl font-semibold my-3'>Million Patients</h1>
                    <p className='w-2/3 mx-auto'>You can reach out more then 2500 doctors from 80+ specialties, who are experienced in telemedicine.</p>
                </div>
                </div>
                <div>
                <div className='text-center'>
                    <img className='rounded-full w-16 mx-auto' src={video} alt="" />
                    <h1 className='text-2xl font-semibold my-3'>Video Call Support</h1>
                    <p className='w-2/3 mx-auto'>You can reach out more then 2500 doctors from 80+ specialties, who are experienced in telemedicine.</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Trust;