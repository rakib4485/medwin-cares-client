import React from 'react';
import { Link } from 'react-router-dom';
import intro from '../../assests/intro.jpg'
import doctorProfile from '../../assests/team-1.jpg'
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineArrowCircleRight, HiOutlineTemplate, HiOutlineViewGrid } from 'react-icons/hi';
import AppointmentButton from '../../components/AppointmentButton/AppointmentButton';

const DoctorsDetailsCard = () => {
    return (
        <div>
            {/* Page intro started  */}
            <div>
                <div className="relative">
                    <div className="relative bg-gray-900">
                        <img
                            className="object-cover w-full h-[60vh]"
                            src={intro}
                            alt="Page Intro"
                        />
                        <div className="absolute inset-0 bg-blue-700 opacity-25"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center bg-white rounded-md px-20 py-3">
                                <h1 className="text-4xl font-bold text-black mb-4 italic">
                                    Doctor Details
                                </h1>
                                <Link
                                    to="/"
                                    className="inline-block text-black font-bold py-2 px-4 rounded"
                                >
                                    <span className='hover:text-blue-700'>Home</span> - Find a Doctor - Doctor Details
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Page intro end  */}
            <div className='lg:w-[1380px] mx-auto'>
                {/* Doctor profile start  */}
            <div className='my-11'>
                <div className="flex flex-col md:flex-row items-center md:items-start bg-white shadow-lg rounded-lg p-6">
                    <div className="md:w-1/3 md:mr-6 mb-4 md:mb-0">
                        <img
                            src={doctorProfile} // Replace with the actual image source
                            alt="Doctor"
                            className="rounded-full w-56 h-56 mx-auto md:mx-0"
                        />
                    </div>
                    <div className="md:w-2/3">
                        <h2 className="text-2xl font-bold mb-2">Dr. Glenn Arredondo</h2>
                        <p className="text-lg mb-2">Family Physicians</p>
                        <p className="mb-2"><span className='font-bold'>Address:</span> 5599 Harvey Laneb Grand Forks, ND 8855</p>
                        <p className="mb-2"><span className='font-bold'>Phone:</span> (616) 999-95544</p>
                        <p className="mb-2"><span className='font-bold'>Language:</span> English, German, Italian</p>
                        <div className='flex gap-6 mt-4'>
                            <Link className='bg-black text-2xl text-white p-2 rounded-full'><FaFacebook/></Link>
                            <Link className='bg-black text-2xl text-white p-2 rounded-full'><FaInstagram/></Link>
                            <Link className='bg-black text-2xl text-white p-2 rounded-full'><FaLinkedinIn/></Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Doctor profile end  */}
            {/* Doctor biography started  */}
            <div className='my-11'>
                <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
                    <div>
                        <h1 className='text-4xl bg-gray-300 p-3'>Biography</h1>
                        <p className='text-justify mt-3 lg:mx-0 mx-2'>Donec rutrum congue leo eget malesuada. Donec rutrum congue leo eget malesuada. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Cras ultricies ligula sed magna dictum porta. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. <br /> <br /> Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Pellentesque in ipsum id orci porta dapibus. Curabitur non nulla sit amet nisl tempus convallis quis.</p>
                    </div>
                    <div>
                    <div className=''>
                   <h1 className='text-4xl bg-gray-300 p-3'>Education</h1>
                   <div className="mt-5">
                    <p className='flex items-center gap-4 text-xl'><span className='text-blue-800'><HiOutlineViewGrid/></span>University of Washington School of Medicine <br />New York, NY USA (2013)</p>
                    <p className='flex items-center gap-4 text-xl my-3'><span className='text-blue-800'><HiOutlineViewGrid/></span>Behavioral Medicine and Neuropsychology Internship <br /> University of Washington (2010) (2013)</p>
                    <p className='flex items-center gap-4 text-xl'><span className='text-blue-800'><HiOutlineViewGrid/></span>Mayo School of Graduate Medical Education <br /> University of Washington (2009)</p>
                   </div>
                  </div>  
                    </div>
                </div>
                {/* Employment & membership started  */}
                
                {/* Membership started  */}
                <div className='my-3 grid gap-6 grid-cols-1 lg:grid-cols-2'> 
                <div>
                <div>
                        <h1 className='text-4xl bg-gray-300 p-3'>Employment</h1>
                        <div className="mt-5">
                        <p className='flex items-center gap-4 text-xl'><span className='text-blue-800'><HiOutlineArrowCircleRight/></span>University of Washington School of Medicine <br />2021-2023</p>
                        <p className='flex items-center gap-4 text-xl my-3'><span className='text-blue-800'><HiOutlineArrowCircleRight/></span>Resident, Physical Medicine and Rehabilitation, Bexi Hospital <br />2018-2021</p>
                        <p className='flex items-center gap-4 text-xl'><span className='text-blue-800'><HiOutlineArrowCircleRight/></span>Specialist of Physical Medicine and Rehabilitation <br />2024-2018</p>
                        </div>
                        </div>
                </div>
                    <div>
                    <h1 className='text-4xl bg-gray-300 p-3'>Membership</h1>
                <div className="mt-5">
                <p className='flex items-center gap-4 text-xl'><span className='text-blue-800'><HiOutlineTemplate/></span>Member, International Association for the Study of Pain</p>
                <p className='flex items-center gap-4 text-xl my-3'><span className='text-blue-800'><HiOutlineTemplate/></span>Member, Society for Affective Science</p>
                <p className='flex items-center gap-4 text-xl my-3'><span className='text-blue-800'><HiOutlineTemplate/></span>International Society of Physical and Rehabilitation</p>
                <p className='flex items-center gap-4 text-xl'><span className='text-blue-800'><HiOutlineTemplate/></span>Division of General Internal Medicine</p>
                </div>
                    </div>
                </div>
                {/* Membership end */}
            </div>
            {/* Doctor biography end  */}
            <Link className='text-center'>
            <AppointmentButton>Book an Appointment</AppointmentButton>
            </Link>
            <div className="my-5">

            </div>
            </div>
        </div>
    );
};

export default DoctorsDetailsCard;