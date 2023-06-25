import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowRightCircle, HiUserGroup, HiIdentification, HiBookmark, HiChatBubbleLeftRight } from "react-icons/hi2";

const About = () => {
    return (
        <div className='my-5 lg:w-[1380px] mx-auto'>
            <div className='mt-10 bg-blue-600 pt-10 pb-28'>
                <div className='mt-6 text-white mx-4 lg:mx-0'>
                    <div className="text-center">
                        <p className='uppercase text-2xl'>best medical treatment</p>
                        <h1 className='text-5xl font-semibold mt-2'>Our Qualified Team is Always <br /> Ready to Help You!</h1>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 lg:mx-5 mt-6'>
                        <div className='text-black lg:w-2/3 bg-blue-200 py-16 px-5 lg:text-justify rounded-2xl'>
                            <p className='text-3xl'>"Our mission is to improve the health of our community by providing high quality, comprehensive medical care in a welcoming & compassionate environment."</p>
                            <div className='mt-3 flex items-center gap-2'>
                                <div>
                                    {/* doctor image  */}
                                    <img className='w-14 h-14 rounded-full' src="https://i.ibb.co/PMMn1D9/best3.jpg" alt="" />
                                </div>
                                <div>
                                    <p className='text-lg font-semibold'>Dr. Jhon Abraham</p>
                                    <p>Cardiologist, MRCP (UK)</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className='text-3xl lg:mt-0 mt-5'>Experienced in multiple medical services</h3>
                            <div className='mt-3 mb-8'>
                                <ul>
                                    <li className='flex items-center gap-3 leading-9'><HiOutlineArrowRightCircle/>Over 400 leading hospitals and clinics</li>
                                    <li className='flex items-center gap-3 leading-9'><HiOutlineArrowRightCircle/>Trusted doctors across 20+ specialties</li>
                                    <li className='flex items-center gap-3 leading-9'><HiOutlineArrowRightCircle/>Online consultations with doctors 24/7</li>
                                    <li className='flex items-center gap-3 leading-9'><HiOutlineArrowRightCircle/>Award-winning practice management</li>
                                    <li className='flex items-center gap-3 leading-9'><HiOutlineArrowRightCircle/>In the mission of improve health</li>
                                    <li className='flex items-center gap-3 leading-9'><HiOutlineArrowRightCircle/>Feel like you are at home service</li>
                                </ul>
                            </div>
                            <Link className='px-3 py-2' style={{border: "2px solid white"}}>Book an appointment</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white lg:w-[920px] mx-auto p-8 text-center -mt-10 rounded-3xl'>
                <div className='grid grid-cols-1 lg:grid-cols-3'>
                    <div className=''>
                        <div className='flex justify-center mb-2'>
                        <HiUserGroup className='text-7xl text-blue-600 bg-gray-300 p-2 rounded-3xl'/>
                        </div>
                        <h1 className='text-4xl font-semibold'>1.5 Crore+</h1>
                        <p className='text-2xl text-gray-600'>Statisfied Patient</p>
                    </div>
                    <div>
                        <div className='flex justify-center mb-2'>
                        <HiIdentification className='text-7xl text-blue-600 bg-gray-300 p-2 rounded-3xl'/>
                        </div>
                        <h1 className='text-4xl font-semibold'>2 Millions+</h1>
                        <p className='text-2xl text-gray-600'>Doctor Appointments</p>
                    </div>
                    <div>
                        <div className='flex justify-center mb-2'>
                        <HiBookmark className='text-7xl text-blue-600 bg-gray-300 p-2 rounded-3xl'/>
                        </div>
                        <h1 className='text-4xl font-semibold'>200,000+</h1>
                        <p className='text-2xl text-gray-600'>Certified Experts</p>
                    </div>
                </div>
            </div>
            {/* story  */}
            <div className='grid grid-cols-1 lg:grid-cols-2 mx-5 my-14'>
                <div className='lg:mt-16'>
                <p className="uppercase">our story</p>
                <h1 className='text-5xl font-semibold'>We've been in business <br /> since 2012.</h1>
                <div className='lg:w-3/4 text-justify'>
                <p className='mt-3'>Medwin care hospital has proudly served the community 2012, growing along with our rapidly expanding . We have built new facilites, expanded our technology and services.</p>
                <p className='mt-3'>Our medical staff to include over 350 highly skilled physicians and medical provider located in more than 50 convenient locations. </p>
                </div>
                </div>
                <div>
                    <img className='w-[90%] rounded-3xl' src="https://i.ibb.co/7VfxDwv/story.jpg" alt="" />
                </div>
            </div>
            {/* mission  */}
            {/* <div className='grid grid-cols-1 lg:grid-cols-2 mx-5 my-14'>
                <div className=''>
                    <img className='rounded-3xl w-[90%]' src="https://i.ibb.co/gJLm5vC/mission.jpg" alt="" />
                </div>
                <div className='lg:mt-16'>
                <p className="uppercase">our mission</p>
                <h1 className='text-5xl font-semibold'>Our mission is to help <br /> patients live better</h1>
                <div className='lg:w-3/4 text-justify'>
                <p className='mt-3'>Our team of highly professionals uses the latest healing technologies to restore you to pain-free health quickly and easily. We thoroughly evaluate & treat all of the contributing root factors related to your issues. But is not limit, your work and home stressors.</p>
                <p className='mt-3'>Our missions to improve the health of our community by providing high quality medical care in a welcoming & compassionate environment.</p>
                </div>
                </div>
            </div> */}
            <div className='text-white lg:flex'>
                <div className='bg-blue-700'>
                    <div className="mx-6 py-5">
                    <h1 className='text-4xl font-semibold'>Our Vision</h1>
                    <p className='text-justify mt-3'>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh. Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta.</p>
                    </div>
                </div>
                <div className='bg-gray-900'>
                   <div className="mx-6 py-5">
                   <h1 className='text-4xl font-semibold'>Our Mission</h1>
                    <p className='text-justify mt-3'>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh. Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta.</p>
                   </div>
                </div>
            </div>
            <div>

            </div>
            {/* booking area  */}
            <div className='lg:flex justify-around lg:w-[980px] mx-auto my-14 bg-green-100 p-5 items-center'>
                <div>
                    <HiChatBubbleLeftRight className='text-8xl bg-white p-4 rounded-full text-blue-700'/>
                </div>
                <div>
                    <h1 className='text-4xl font-semibold'>Get own personalized health plan </h1>
                    <p className='text-gray-700'>Get in touch to book your first appointment</p>
                </div>
                <div className='mt-5 lg:mt-0'>
                    <Link className='bg-blue-700 p-3 text-white rounded-xl'>Book an appointment</Link>
                </div>
            </div>
        </div>
    );
};

export default About;