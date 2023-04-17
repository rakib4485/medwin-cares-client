import React from 'react';
import ButtonTwo from '../../../components/Button/ButtonTwo/ButtonTwo';

const BannerTwo = () => {
    return (
        <div className='lg:flex items-center justify-around mb-9 bg-purple-300 p-5'>
        <div>
            <img src="https://i.ibb.co/xz7dfm6/banner-Two.png" alt="" />
        </div>
           <div>
           <div className='mt-3'>
                <h1 className='text-5xl font-semibold'>Consult a doctor <br /> anytime, anywhere <br /> by <span className='text-pink-500' style={{borderBottom: "3px solid red", borderRadius: "40%"}}>video call</span></h1>
                <p>Talk with a doctor using our highly secured end-to-end encrypted video call.</p>
            </div>
            <div className='mt-9'>
            <ButtonTwo>Book an video call appointment</ButtonTwo>
            </div>
           </div>
        </div>
    );
};

export default BannerTwo;