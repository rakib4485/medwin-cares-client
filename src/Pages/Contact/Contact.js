import React from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import { HiEnvelope, HiPhone } from "react-icons/hi2";
import { FaFacebook, FaInstagram, FaTwitterSquare, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
import intro from '../../assests/intro.jpg'

const Contact = () => {
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
              Contact Us
            </h1>
            <Link
              to="/"
              className="inline-block text-black font-bold py-2 px-4 rounded"
            >
              <span className='hover:text-blue-700'>Home</span> - Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
            </div>
            {/* Page intro end */}
            <div className='lg:w-[1380px] mx-auto'>
            <div className='my-5'>
                <p className='uppercase mb-2 ml-28 font-semibold'>have a question</p>
                <div className='grid grid-cols-1 lg:grid-cols-3 w-3/4 mx-auto'>
                <div className='text-center'>
                    <div className='flex justify-center text-7xl'>
                        <HiPhone className='bg-red-500 text-white p-3 rounded-full mb-3'/>
                    </div>
                    <h1 className='text-3xl'>Call Us</h1>
                    <h1 className='text-gray-700'>+61 383 765 284</h1>
                </div>
                <div className='text-center'>
                    <div className='flex justify-center text-7xl'>
                        <HiLocationMarker className='bg-red-500 text-white p-3 rounded-full mb-3'/>
                    </div>
                    <h1 className="text-3xl">Location</h1>
                    <h1 className="text-gray-700">Vencouver, Canada</h1>
                </div>
                <div className='text-center'>
                    <div className='flex justify-center text-7xl'>
                    <HiEnvelope className='bg-red-500 text-white p-3 rounded-full mb-3'/>
                    </div>
                    <h1 className="text-3xl">Say Hello</h1>
                    <h1 className="text-gray-700">medwin@care.com</h1>
                </div>
                </div>
              
            </div>
            <hr />
            <div className='lg:flex items-center my-12 mx-5'>
                <div className='mb-5 lg:mb-0'>
                <h1 className='text-6xl font-bold'>Can't find what you need?</h1>
                <p className='text-3xl lg:w-3/4'>Please get in touch and our support team will answer all your questions.</p>
                </div>
                <div>
                    <form action="">
                        <div className='flex gap-3'>
                        <div className='mb-2'>
                        <p className='text-2xl'>First Name</p>
                        <input type="text" name="name" id="" className='py-2 w-full' style={{borderBottom: "3px solid red"}}/>
                        </div>
                       <div>
                       <p className='text-2xl'>Last Name</p>
                        <input type="text" name="name" id="" className='py-2 w-full' style={{borderBottom: "3px solid red"}}/>
                       </div>
                        </div>
                        <p className='text-2xl'>Email</p>
                        <input type="text" name="email" id="" className='py-2 w-full' style={{borderBottom: "3px solid red"}}/>
                        <p className="text-2xl my-2">Message</p>
                        <textarea name="" id="" cols="70" rows="4" className='w-full' style={{borderBottom: "3px solid red"}}></textarea>
                        <button className='uppercase bg-purple-400 px-4 py-3 text-white'>Submit</button>
                    </form>
                </div>
            </div>
            </div>
            <div className='bg-black py-5'>
                <div className='flex items-center my-5 text-3xl justify-center gap-5'>
                    <div className='bg-white p-2 rounded-full hover:bg-black hover:text-white borders'>
                        <Link>
                        <FaFacebook/>
                        </Link>
                    </div>
                    <div className='bg-white p-2 rounded-full hover:bg-black hover:text-white borders'>
                        <Link>
                        <FaInstagram/>
                        </Link>
                    </div>
                    <div className='bg-white p-2 rounded-full hover:bg-black hover:text-white borders'>
                        <Link>
                        <FaTwitterSquare/>
                        </Link>
                    </div>
                    <div className='bg-white p-2 rounded-full hover:bg-black hover:text-white borders'>
                        <Link>
                        <FaLinkedinIn/>
                        </Link>
                    </div>
                    <div className='bg-white p-2 rounded-full hover:bg-black hover:text-white borders' style={{}}>
                        <Link>
                        <FaYoutube/>
                        </Link>
                    </div>
                </div>
                <p className="text-center text-white">@copyright all rights reserved to Medwin Cares 2023</p>
            </div>
        </div>
    );
};

export default Contact;