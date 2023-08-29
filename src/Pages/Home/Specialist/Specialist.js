import React from 'react';
import SpecialistCard from './SpecialistCard/SpecialistCard';
import { Link } from 'react-router-dom';

const Specialist = () => {
    const doctors = [
        {
            id: 1,
            name: 'Glenn Arredondo',
            img: 'https://i.ibb.co/Yb429Wr/team-1.jpg',
            specialist: 'Family Physicians'
        },
        {
            id: 2,
            name: 'Dorthy Winters',
            img: 'https://i.ibb.co/nbpMTD9/team-2.jpg',
            specialist: 'Gastroenterologists'
        },
        {
            id: 3,
            name: 'Christopher Perreault',
            img: 'https://i.ibb.co/6gnQTYc/team-3.jpg',
            specialist: 'Medicine Specialists'
        },
        {
            id: 4,
            name: 'Linda Flores',
            img: 'https://i.ibb.co/3F8hwpX/team-4.jpg',
            specialist: 'Gynecologists'
        },
    ];
    const doctorSlice = doctors.slice(0,3)
    return (
        <div className='my-11 mx-[7%]'>
            <div className='text-center'>
                <p className="uppercase text-blue-700 text-2xl">our specialist</p>
                <h1 className='lg:w-2/3 text-4xl lg:text-5xl mx-auto'>We have all the professional specialists in our hospital</h1>
            </div>
            <div class="container mx-auto p-10 md:p-20 grid gap-4 lg:grid-cols-2 2xl:grid-cols-3 grid-cols-1 gap-x-3 transform duration-500">
                {
                    doctorSlice.map(doctor => <SpecialistCard
                    key={doctor.id}
                    doctor={doctor}
                    ></SpecialistCard>)
                }
            </div>
            <div className='text-center'>
                <Link to='/doctors'>
                <button className='bg-gradient-to-r from-violet-500 to-fuchsia-500 px-3 py-4 rounded-md text-white font-bold'>Full List of Doctors</button>
                </Link>
            </div>
        </div>
    );
};

export default Specialist;