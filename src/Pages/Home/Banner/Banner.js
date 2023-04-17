import React from 'react';
import bannerImg from '../../../assests/banner.gif';
import ButtonHome from '../../../components/Button/ButtonHome/ButtonHome';

const Banner = () => {
    return (
        <div className='lg:flex items-center  mt-5'>
            <div>
            <div>
               <h1 className='banner-text text-6xl lg:w-3/4'>Get the best <span className='text-blue-400'>Treatment</span> at your doorstep</h1> 
            </div>
            <div className='mt-5'>
            <ButtonHome className="mt-4">Book Appointment</ButtonHome>
            </div>
            </div>
            <div>
                <img className='w-full' src="https://i.ibb.co/FKHgTTc/pexels-los-muertos-crew-8460157-removebg-preview.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;