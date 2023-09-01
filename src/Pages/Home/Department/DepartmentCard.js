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
import { Link } from 'react-router-dom';

const DepartmentCard = ({department}) => {
    const {id, departmentName, img} = department;
    return (
        <div>
            <div className="">
                <div className="">
                    {/* Card One  */}
                    <article className="mx-auto pb-5 max-w-sm transform duration-500 hover:-translate-y-1 cursor-pointer group bg-white p-3 rounded-md">
                        <div className="max-h-125 overflow-hidden">
                            <img className="transform duration-300 group-hover:scale-110" src={img} alt="" />
                        </div>
                        <h2 className="font-semibold text-3xl my-5 ">{departmentName}</h2>
                        <div className="flex justify-end mt-3 ">
                        <Link to='/departments' className='italic border-2 border-black p-2 hover:bg-black hover:text-white flex gap-1 items-center'>Learn More <span><MdArrowForward/></span></Link>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default DepartmentCard;