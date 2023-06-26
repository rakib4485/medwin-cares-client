import React from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import { HiEnvelope, HiPhone } from "react-icons/hi2";
import { FaFacebook, FaInstagram, FaTwitterSquare, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
import intro from '../../assests/intro.jpg'
import { useState } from 'react';

const Contact = () => {
    // return (
    //     <div>
    //         {/* Page intro started  */}
    //         <div>
    //         <div className="relative">
    //   <div className="relative bg-gray-900">
    //     <img
    //       className="object-cover w-full h-[60vh]"
    //       src={intro}
    //       alt="Page Intro"
    //     />
    //     <div className="absolute inset-0 bg-blue-700 opacity-25"></div>
    //     <div className="absolute inset-0 flex items-center justify-center">
    //       <div className="text-center bg-white rounded-md px-20 py-3">
    //         <h1 className="text-4xl font-bold text-black mb-4 italic">
    //           Contact Us
    //         </h1>
    //         <Link
    //           to="/"
    //           className="inline-block text-black font-bold py-2 px-4 rounded"
    //         >
    //           <span className='hover:text-blue-700'>Home</span> - Contact
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    //         </div>
    //         {/* Page intro end */}
    //         <div className='lg:w-[1380px] mx-auto'>
    //         <div className='my-5'>
    //             <p className='uppercase mb-2 ml-28 font-semibold'>have a question</p>
    //             <div className='grid grid-cols-1 lg:grid-cols-3 w-3/4 mx-auto'>
    //             <div className='text-center'>
    //                 <div className='flex justify-center text-7xl'>
    //                     <HiPhone className='bg-red-500 text-white p-3 rounded-full mb-3'/>
    //                 </div>
    //                 <h1 className='text-3xl'>Call Us</h1>
    //                 <h1 className='text-gray-700'>+61 383 765 284</h1>
    //             </div>
    //             <div className='text-center'>
    //                 <div className='flex justify-center text-7xl'>
    //                     <HiLocationMarker className='bg-red-500 text-white p-3 rounded-full mb-3'/>
    //                 </div>
    //                 <h1 className="text-3xl">Location</h1>
    //                 <h1 className="text-gray-700">Vencouver, Canada</h1>
    //             </div>
    //             <div className='text-center'>
    //                 <div className='flex justify-center text-7xl'>
    //                 <HiEnvelope className='bg-red-500 text-white p-3 rounded-full mb-3'/>
    //                 </div>
    //                 <h1 className="text-3xl">Say Hello</h1>
    //                 <h1 className="text-gray-700">medwin@care.com</h1>
    //             </div>
    //             </div>
              
    //         </div>
    //         <hr />
    //         <div className='lg:flex items-center my-12 mx-5'>
    //             <div className='mb-5 lg:mb-0'>
    //             <h1 className='text-6xl font-bold'>Can't find what you need?</h1>
    //             <p className='text-3xl lg:w-3/4'>Please get in touch and our support team will answer all your questions.</p>
    //             </div>
    //             <div>
    //                 <form action="">
    //                     <div className='flex gap-3'>
    //                     <div className='mb-2'>
    //                     <p className='text-2xl'>First Name</p>
    //                     <input type="text" name="name" id="" className='py-2 w-full' style={{borderBottom: "3px solid red"}}/>
    //                     </div>
    //                    <div>
    //                    <p className='text-2xl'>Last Name</p>
    //                     <input type="text" name="name" id="" className='py-2 w-full' style={{borderBottom: "3px solid red"}}/>
    //                    </div>
    //                     </div>
    //                     <p className='text-2xl'>Email</p>
    //                     <input type="text" name="email" id="" className='py-2 w-full' style={{borderBottom: "3px solid red"}}/>
    //                     <p className="text-2xl my-2">Message</p>
    //                     <textarea name="" id="" cols="70" rows="4" className='w-full' style={{borderBottom: "3px solid red"}}></textarea>
    //                     <button className='uppercase bg-purple-400 px-4 py-3 text-white'>Submit</button>
    //                 </form>
    //             </div>
    //         </div>
    //         </div>
    //         <div className='bg-black py-5'>
    //             <div className='flex items-center my-5 text-3xl justify-center gap-5'>
    //                 <div className='bg-white p-2 rounded-full hover:bg-black hover:text-white borders'>
    //                     <Link>
    //                     <FaFacebook/>
    //                     </Link>
    //                 </div>
    //                 <div className='bg-white p-2 rounded-full hover:bg-black hover:text-white borders'>
    //                     <Link>
    //                     <FaInstagram/>
    //                     </Link>
    //                 </div>
    //                 <div className='bg-white p-2 rounded-full hover:bg-black hover:text-white borders'>
    //                     <Link>
    //                     <FaTwitterSquare/>
    //                     </Link>
    //                 </div>
    //                 <div className='bg-white p-2 rounded-full hover:bg-black hover:text-white borders'>
    //                     <Link>
    //                     <FaLinkedinIn/>
    //                     </Link>
    //                 </div>
    //                 <div className='bg-white p-2 rounded-full hover:bg-black hover:text-white borders' style={{}}>
    //                     <Link>
    //                     <FaYoutube/>
    //                     </Link>
    //                 </div>
    //             </div>
    //             <p className="text-center text-white">@copyright all rights reserved to Medwin Cares 2023</p>
    //         </div>
    //     </div>
    // );
    const [show, setShow] = useState(false);
    return (
        <div className="bg-gradient-to-b from-purple-600 to-indigo-700 h-96 w-full">
            <div className="md:px-20 px-4 py-8">
                <div className="flex items-center justify-between">
                    <div className="lg:hidden text-white" onClick={() => setShow(!show)}>
                        {show ? (
                            <div id="close" className=" close-m-menu" onclick="MenuHandler(false)">
                                <svg aria-label="Close" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1={18} y1={6} x2={6} y2={18} />
                                    <line x1={6} y1={6} x2={18} y2={18} />
                                </svg>
                            </div>
                        ) : (
                            <svg id="open" onclick="MenuHandler(true)" aria-haspopup="true" aria-label="Main Menu" xmlns="http://www.w3.org/2000/svg" className="show-m-menu icon icon-tabler icon-tabler-menu" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1={4} y1={8} x2={20} y2={8} />
                                <line x1={4} y1={16} x2={20} y2={16} />
                            </svg>
                        )}
                    </div>
                </div>
                {show && (
                    <nav className="lg:hidden relative z-40">
                        <div className="w-full">
                            <div className="visible flex items-center">
                                <ul id="list" className=" p-2 bg-white absolute rounded top-0 left-0 right-0 shadow mt-6">
                                    <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                        <a href="javascript:void(0)">
                                            <span className="ml-2 font-bold">Home</span>
                                        </a>
                                    </li>
                                    <li className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center" onclick="dropdownHandler(this)">
                                        <a href="javascript:void(0)">
                                            <span className="ml-2 font-bold">About</span>
                                        </a>
                                    </li>
                                    <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                        <a href="javascript:void(0)">
                                            <span className="ml-2 font-bold">Page</span>
                                        </a>
                                    </li>
                                    <li className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center" onclick="dropdownHandler(this)">
                                        <a href="javascript:void(0)">
                                            <span className="ml-2 font-bold">Doc</span>
                                        </a>
                                    </li>
                                    <li className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center" onclick="dropdownHandler(this)">
                                        <a href="javascript:void(0)">
                                            <span className="ml-2 font-bold">Contact</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                )}
            </div>
            <div className="w-full flex items-center justify-center my-12">
                <div className="absolute top-40 bg-white shadow rounded py-12 lg:px-28 px-8">
                    <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">Let’s chat and get a quote!</p>
                    <div className="md:flex items-center mt-12">
                        <div className="md:w-72 flex flex-col">
                            <label className="text-base font-semibold leading-none text-gray-800">Name</label>
                            <input tabIndex={0} arial-label="Please input name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input  name" />
                        </div>
                        <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label className="text-base font-semibold leading-none text-gray-800">Email Address</label>
                            <input tabIndex={0} arial-label="Please input email address" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input email address" />
                        </div>
                    </div>
                    <div className="md:flex items-center mt-8">
                        <div className="md:w-72 flex flex-col">
                            <label className="text-base font-semibold leading-none text-gray-800">Company name</label>
                            <input tabIndex={0} role="input" arial-label="Please input company name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 " placeholder="Please input company name" />
                        </div>
                        <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label className="text-base font-semibold leading-none text-gray-800">Country</label>
                            <input tabIndex={0} arial-label="Please input country name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input country name" />
                        </div>
                    </div>
                    <div>
                        <div className="w-full flex flex-col mt-8">
                            <label className="text-base font-semibold leading-none text-gray-800">Message</label>
                            <textarea tabIndex={0} aria-label="leave a message" role="textbox" type="name" className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none" defaultValue={""} />
                        </div>
                    </div>
                    <p className="text-xs leading-3 text-gray-600 mt-4">By clicking submit you agree to our terms of service, privacy policy and how we use data as stated</p>
                    <div className="flex items-center justify-center w-full">
                        <button className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Contact;