import React from 'react';
import departmentOne from '../../../assests/department-1.jpg'
import departmentTwo from '../../../assests/department-2.jpg'
import departmentThree from '../../../assests/department-3.jpg'
import departmentFour from '../../../assests/department-4.jpg'
import departmentFive from '../../../assests/department-5.jpg'
import departmentSix from '../../../assests/department-6.jpg'
import departmentSeven from '../../../assests/department-7.jpg'
import departmentEight from '../../../assests/department-8.jpg'
import { MdArrowForward } from 'react-icons/md';

const DepartmentCard = () => {
    return (
        <div>
            <div className="container mx-auto p-10 md:py-20 px-5 md:p-10 md:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
                    {/* Card One  */}
                    <article className="mx-auto pb-5 max-w-sm transform duration-500 hover:-translate-y-1 cursor-pointer group bg-white p-3 rounded-md">
                        <div className="max-h-125 overflow-hidden">
                            <img className="transform duration-300 group-hover:scale-110" src={departmentOne} alt="" />
                        </div>
                        <h2 className="font-semibold text-3xl my-5 ">Dental</h2>
                        <div className="flex justify-end mt-3 ">
                        <button className='italic border-2 border-black p-2 hover:bg-black hover:text-white flex gap-1 items-center'>Learn More <span><MdArrowForward/></span></button>
                        </div>
                    </article>

                    {/* Card Two  */}
                    <article className="mx-auto pb-5 max-w-sm transform duration-500 hover:-translate-y-1 cursor-pointer group bg-white p-3 rounded-md">
                        <div className="max-h-125 overflow-hidden">
                            <img className="transform duration-300 group-hover:scale-110" src={departmentTwo} alt="" />
                        </div>
                        <h2 className="font-semibold text-3xl  my-5">Orthopedics</h2>
                        <div className="flex justify-end mt-3 ">
                        <button className='italic border-2 border-black p-2 hover:bg-black hover:text-white flex gap-1 items-center'>Learn More <span><MdArrowForward/></span></button>
                        </div>
                    </article>

                    {/* Card Three  */}
                    <article className="mx-auto pb-5 max-w-sm transform duration-500 hover:-translate-y-1 cursor-pointer group bg-white p-3 rounded-md">
                        <div className="max-h-125 overflow-hidden">
                            <img className="transform duration-300 group-hover:scale-110" src={departmentThree} alt="" />
                        </div>
                        <h2 className="font-semibold text-3xl  my-5">Neuroscience</h2>
                        <div className="flex justify-end mt-3 ">
                        <button className='italic border-2 border-black p-2 hover:bg-black hover:text-white flex gap-1 items-center'>Learn More <span><MdArrowForward/></span></button>
                        </div>
                    </article>

                    {/* Card Four  */}
                    <article className="mx-auto pb-5 max-w-sm transform duration-500 hover:-translate-y-1 cursor-pointer group bg-white p-3 rounded-md">
                        <div className="max-h-125 overflow-hidden">
                            <img className="transform duration-300 group-hover:scale-110" src={departmentFour} alt="" />
                        </div>
                        <h2 className="font-semibold text-3xl  my-5">Cancer Care</h2>
                        <div className="flex justify-end mt-3 ">
                            <button className='italic border-2 border-black p-2 hover:bg-black hover:text-white flex gap-1 items-center'>Learn More <span><MdArrowForward/></span></button>
                        </div>
                    </article>

                    {/* Card Five  */}
                    <article className="mx-auto pb-5 max-w-sm transform duration-500 hover:-translate-y-1 cursor-pointer group bg-white p-3 rounded-md">
                        <div className="max-h-125 overflow-hidden">
                            <img className="transform duration-300 group-hover:scale-110" src={departmentFive} alt="" />
                        </div>
                        <h2 className="font-semibold text-3xl  my-5">Gastroenterology</h2>
                        <div className="flex justify-end mt-3 ">
                            <button className='italic border-2 border-black p-2 hover:bg-black hover:text-white flex gap-1 items-center'>Learn More <span><MdArrowForward/></span></button>
                        </div>
                    </article>

                    {/* Card Six  */}
                    <article className="mx-auto pb-5 max-w-sm transform duration-500 hover:-translate-y-1 cursor-pointer group bg-white p-3 rounded-md">
                        <div className="max-h-125 overflow-hidden">
                            <img className="transform duration-300 group-hover:scale-110" src={departmentSix} alt="" />
                        </div>
                        <h2 className="font-semibold text-3xl  my-5">Medicine</h2>
                        <div className="flex justify-end mt-3 ">
                            <button className='italic border-2 border-black p-2 hover:bg-black hover:text-white flex gap-1 items-center'>Learn More <span><MdArrowForward/></span></button>
                        </div>
                    </article>

                    {/* Card Seven  */}
                    <article className="mx-auto pb-5 max-w-sm transform duration-500 hover:-translate-y-1 cursor-pointer group bg-white p-3 rounded-md">
                        <div className="max-h-125 overflow-hidden">
                            <img className="transform duration-300 group-hover:scale-110" src={departmentSeven} alt="" />
                        </div>
                        <h2 className="font-semibold text-3xl  my-5">Cardiology</h2>
                        <div className="flex justify-end mt-3 ">
                            <button className='italic border-2 border-black p-2 hover:bg-black hover:text-white flex gap-1 items-center'>Learn More <span><MdArrowForward/></span></button>
                        </div>
                    </article>

                    {/* Card Eight  */}
                    <article className="mx-auto pb-5 max-w-sm transform duration-500 hover:-translate-y-1 cursor-pointer group bg-white p-3 rounded-md">
                        <div className="max-h-125 overflow-hidden">
                            <img className="transform duration-300 group-hover:scale-110" src={departmentEight} alt="" />
                        </div>
                        <h2 className="font-semibold text-3xl my-5">Surgery</h2>
                        <div className="flex justify-end mt-3 ">
                            <button className='italic border-2 border-black p-2 hover:bg-black hover:text-white flex gap-1 items-center'>Learn More <span><MdArrowForward/></span></button>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default DepartmentCard;