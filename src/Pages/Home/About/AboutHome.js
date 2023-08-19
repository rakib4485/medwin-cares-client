import React from 'react';
import aboutOne from '../../../assests/about-1.jpg'
import aboutTwo from '../../../assests/about-2.jpg'
import aboutThree from '../../../assests/about-3.jpg'
import { MdCleanHands, MdLocalPharmacy, MdOutlineHandshake, MdOutlineMedicalServices } from 'react-icons/md';

const AboutHome = () => {
    return (
        <div className='my-11 mx-[7%]'>
            <div className='grid gap-8 grid-cols-1 lg:grid-cols-2 items-center'>
                <div>
                    <div className='lg:flex gap-3 mb-2'>
                        <div className='hidden lg:block'>
                            <img className='' src={aboutOne} alt="" />
                        </div>
                        <div>
                            <h1 className='lg:mt-10 text-4xl'>Connect with <span className='text-blue-700'>Medwin</span> Cares</h1>
                            <img className='lg:mt-12' src={aboutTwo} alt="" />
                        </div>
                    </div>
                    <div className='hidden lg:block'>
                        <img src={aboutThree} alt="" />
                    </div>
                </div>
                <div className='mx-3 lg:mx-0'>
                    <p className="uppercase text-blue-700 text-2xl">who we are</p>
                    <h1 className='text-3xl lg:text-4xl font-medium my-2 w-'>We have been providing services to patients for over 20 years</h1>
                    <p className='text-xl text-justify'>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat.</p>
                    <div className='grid gap-3 lg:grid-cols-2 mt-7'>
                        <div>
                            <MdCleanHands className='text-4xl text-blue-700'/>
                            <h1 className='text-3xl font-semibold my-2'>1K+ Healing Hands</h1>
                            <p className='lg:w-2/3 text-justify'>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Proin eget tortor risus.</p>
                        </div>
                        <div>
                            <MdOutlineMedicalServices className='text-4xl text-blue-700'/>
                            <h1 className='text-3xl font-semibold my-2'>Experience Doctors</h1>
                            <p className='lg:w-2/3 text-justify'>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Proin eget tortor risus.</p>
                        </div>
                        <div>
                            <MdOutlineHandshake className='text-4xl text-blue-700'/>
                            <h1 className='text-3xl font-semibold my-2'>Advanced Healthcare</h1>
                            <p className='lg:w-2/3 text-justify'>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Proin eget tortor risus.</p>
                        </div>
                        <div>
                            <MdLocalPharmacy className='text-4xl text-blue-700'/>
                            <h1 className='text-3xl font-semibold my-2'>50+ Pharmacies</h1>
                            <p className='lg:w-2/3 text-justify'>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Proin eget tortor risus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutHome;