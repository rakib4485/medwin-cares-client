import React from 'react';
import { Link } from 'react-router-dom';
import intro from '../../assests/intro.jpg'
import doctorProfile from '../../assests/team-1.jpg'
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineViewGrid } from 'react-icons/hi';

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
                    <div className='lg:w-2/4 lg:ms-28'>
                        <h1 className='text-4xl bg-blue-500 p-3 text-white'>Appointmet Time</h1>
                    </div>
                </div>
                {/* Doctor education started  */}
                <div className='my-3 grid grid-cols-1 gap-6 lg:grid-cols-2'>
                  <div className=''>
                   <h1 className='text-4xl bg-gray-300 p-3'>Education</h1>
                   <div className="mt-5">
                    <p className='flex items-center gap-4 text-xl'><span className='text-blue-800'><HiOutlineViewGrid/></span>University of Washington School of Medicine <br />New York, NY USA (2013)</p>
                    <p className='flex items-center gap-4 text-xl my-3'><span className='text-blue-800'><HiOutlineViewGrid/></span>Behavioral Medicine and Neuropsychology Internship <br /> University of Washington (2010) (2013)</p>
                    <p className='flex items-center gap-4 text-xl'><span className='text-blue-800'><HiOutlineViewGrid/></span>Mayo School of Graduate Medical Education <br /> University of Washington (2009)</p>
                   </div>
                  </div>
                  <div className='lg:w-2/4 lg:ms-28'>
                   <h1 className='text-4xl bg-blue-500 p-3 text-white'>Write a review</h1>
                   <div className='mt-2'>
                   <form action="">
                    <textarea type="text" className='px-20 py-9 rounded' placeholder='Please leave your review' name="" id="" />
                    <input type="text" className='py-2 rounded' name="" id="" placeholder='Your email'/>
                    <input type="submit" className='mt-2 bg-slate-700 text-white w-full p-4 rounded' value="Submit review" />
                   </form>
                   </div>
                  </div>
                </div>
                {/* Doctor education end  */}
                {/* Employment & membership started  */}
                <div className='grid grid-cols-1 gap-5 lg:grid-cols-2'>
                        <div>
                        <h1 className='text-4xl bg-gray-300 p-3'>Employment</h1>
                        </div>
                        <div>
                        <h1 className='text-4xl bg-gray-300 p-3'>Memberships</h1>
                        </div>
                </div>
                {/* Employment & membership end  */}
            </div>
            {/* Doctor biography end  */}
            </div>
        </div>
    );
};

export default DoctorsDetailsCard;