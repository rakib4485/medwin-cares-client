import React from 'react';
import { FaPlusCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Prescription = () => {
    return (
        <div className='bg-gradient-to-r from-cyan-500 to-blue-500 h-[100vh] p-4'>
            <div className=''>
            <h1 className='text-center text-2xl italic font-semibold my-4 text-white'>Write down the prescription</h1>
            <div className='mx-[7%]'>
                <form action="">
                    <div className='lg:flex gap-3'>
                    <input type="text" name="name" placeholder='Patient Name' className='input input-bordered rounded p-2' id="" /> 
                    <input type="text" name="name" placeholder='Age' className='input input-bordered rounded p-2' id="" /> 
                    <input type="text" name="name" placeholder='Gender' className='input  input-bordered rounded p-2' id="" /> 
                    </div>
                    <div className='lg:flex gap-3 items-center my-3'>
                        <input type="text" name="medicine" placeholder='Medicine Name' className="input  input-bordered rounded p-2" id="" required/>
                        <input type="text" name="quantity" placeholder='Per Day' className="input  input-bordered rounded p-2" id="" required/>
                        <input type="text" name="total" placeholder='Total Number of Medicine' className="input  input-bordered rounded p-2" id="" required/>
                        <button><FaPlusCircle className='text-2xl text-white'/></button>
                    </div>
                    <div className="lg:flex items-center gap-3">
                        <input type="text" name="test" placeholder='Test' className="input  input-bordered rounded p-2" id="" />
                        <button><FaPlusCircle className='text-2xl text-white'/></button>
                    </div>
                    <div className='my-3'>
                        <textarea className="input-bordered rounded p-2" name="suggestion" id="" placeholder='Suggestion' cols="42" rows="5"></textarea>
                        </div>
                    <div className='lg:flex justify-around items-center'>
                    <Link to='' className='text-white px-5 py-4 rounded font-semibold bg-gradient-to-r from-purple-500 to-pink-500'>Back to Dashboard</Link>
                    <input className='bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-3 rounded text-white font-semibold cursor-pointer' type="submit" placeholder='Submit' />
                    </div>
                </form>
            </div>
            </div>
        </div>
    );
};

export default Prescription;