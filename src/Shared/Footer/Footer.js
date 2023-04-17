import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-black text-white'>
            
        <div className="mx-auto container py-16 xl:px-20 lg:px-12 sm:px-6 px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 gap-4">
               <div className="sm:ml-0 ml-8 flex flex-col">
               <h2 className="text-base font-semibold leading-4 dark:text-white">Solution</h2>
               <Link className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 dark:text-white cursor-pointer">Appointment</Link>
               <Link className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 dark:text-white cursor-pointer">Doctor List</Link>
               <Link className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 dark:text-white cursor-pointer">Community</Link>
               <Link className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 dark:text-white cursor-pointer">Medicine</Link>
               <Link className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 dark:text-white cursor-pointer">Tracking</Link>
                </div> 
                <div className="sm:ml-0 ml-8 flex flex-col">
                    <h2 className="text-base font-semibold leading-4 dark:text-white">Pricing</h2>
                    <Link className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 dark:text-white cursor-pointer">Surgery</Link>
                    <Link className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 dark:text-white cursor-pointer">Patient Consult</Link>
                    <Link className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 dark:text-white cursor-pointer">Covid 19 Test</Link>
                    <Link className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 dark:text-white cursor-pointer">Treatment</Link>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-base font-semibold leading-4 dark:text-white">Product</h2>
                    <Link className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 dark:text-white cursor-pointer">Video call with doctor</Link>
                    <Link className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 dark:text-white cursor-pointer">Health Management</Link>
                    <Link className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 dark:text-white cursor-pointer">Private Consult</Link>
                    <Link className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 dark:text-white cursor-pointer">Hospital Abroad</Link>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-base font-semibold leading-4 dark:text-white">About</h2>
                    <Link className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 dark:text-white cursor-pointer">Company</Link>
                    <Link className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 dark:text-white cursor-pointer">Careers</Link>
                    <Link className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 dark:text-white cursor-pointer">Blog</Link>
                    <Link className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 dark:text-white cursor-pointer">Contact Us</Link>
                    <Link className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 dark:text-white cursor-pointer">Privacy Policy</Link>
                </div>
            </div>
        </div>
        <p className="text-center">@copyright all rights reserved to Medwin Cares 2023</p>
        </div>
    );
};

export default Footer;