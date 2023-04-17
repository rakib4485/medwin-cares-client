import React from 'react';
import ButtonTwo from '../../../components/Button/ButtonTwo/ButtonTwo';

const Experience = () => {
    return (
        <div className='lg:flex justify-around my-8 items-center'>
          <div>
          <div className=''>
                <h1 className='text-blue-400 text-3xl leading-10'>25+ years of experience</h1>
                <h3 className='text-6xl lg:w-2/3'>We always ensure best medical treatment for your health</h3>
                <p className='lg:w-2/3 mt-3 text-justify'>There are many variation passages of your health available but majority have suffered alteration in some form by injected humour. There are many variation passages of your health available but majority have suffered alteration in some form by injected humour.</p>
                
            </div>
            <div className='mt-10'>
            <ButtonTwo>Start Consultation</ButtonTwo>
            </div>
          </div>
            <div>
                <img className='' src="https://i.ibb.co/TKKk7tc/nurse-removebg-preview.png" alt="" />
            </div>
        </div>
    );
};

export default Experience;