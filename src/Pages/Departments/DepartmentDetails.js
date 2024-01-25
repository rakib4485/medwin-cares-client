import React from 'react';
import { Link } from 'react-router-dom';
import intro from '../../assests/intro.jpg'
import { HiArrowCircleRight } from 'react-icons/hi';

const DepartmentDetails = () => {
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
                                    Department
                                </h1>
                                <Link
                                    to="/"
                                    className="inline-block text-black font-bold py-2 px-4 rounded"
                                >
                                    <span className='hover:text-blue-700'>Home</span> - Department
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Page intro ended  */} 
            <div className='my-11 lg:w-[1380px] mx-auto'>
                <div className='grid gap-5 grid-cols-1 lg:grid-cols-2 mx-5 lg:mx-0'>
                    <div>
                        <h1 className='text-3xl lg:text-4xl font-semibold lg:font-bold'>What is orthopedics?</h1>
                        <p className='text-justify mt-2 lg:w-4/5'>Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>
                    </div>
                    <div>
                        <h1 className="text-3xl lg:text-4xl font-semibold lg:font-bold">What do orthopedists treat?</h1>
                        <p className="text-justify mt-2 lg:w-4/5">Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Cras ultricies ligula sed magna dictum porta.</p>
                        <div className="mt-2">
                            <div className='grid grid-cols-2'>
                                <div>
                                <p className='flex items-center gap-2 text-xl'><HiArrowCircleRight className='text-blue-700'/> Arthroscopy</p>
                                <p className='flex items-center gap-2 text-xl'><HiArrowCircleRight className='text-blue-700'/> Herniated Disk Surgery</p>
                                <p className='flex items-center gap-2 text-xl'><HiArrowCircleRight className='text-blue-700'/> Laminectomy</p>
                                </div>
                                <div>
                                <p className='flex items-center gap-2 text-xl'><HiArrowCircleRight className='text-blue-700'/> Joint Pain</p>
                                <p className='flex items-center gap-2 text-xl'><HiArrowCircleRight className='text-blue-700'/> Bone Fracture</p>
                                <p className='flex items-center gap-2 text-xl'><HiArrowCircleRight className='text-blue-700'/> Shoulder Pain</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='my-3' />
                <div className='grid gap-5 grid-cols-1 lg:grid-cols-2 mx-5 lg:mx-0'>
                    <div>
                        <h1 className='text-3xl lg:text-4xl font-semibold lg:font-bold'>Specialties</h1>
                        <p className='text-justify mt-2 lg:w-4/5'>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>
                    </div>
                    <div>
                        <h1 className="text-3xl lg:text-4xl font-semibold lg:font-bold">Treatments</h1>
                        <p className="text-justify mt-2 lg:w-4/5">Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DepartmentDetails;