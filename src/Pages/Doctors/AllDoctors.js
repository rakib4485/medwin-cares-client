import React, { useState } from 'react';
import teamOne from '../../assests/team-1.jpg';
import teamTwo from '../../assests/team-2.jpg';
import teamThree from '../../assests/team-3.jpg';
import teamFour from '../../assests/team-4.jpg';
import AllDoctorsCard from './AllDoctorsCard';
import { Link } from 'react-router-dom';

const AllDoctors = () => {
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
    const [search, setSearch] = useState('');
    console.log(search)
    return (
        <div>
            <div className='my-4'>
            <div className="text-center">
                <h1 className='text-4xl font-bold'>Find a Doctor</h1>
                <p className='text-2xl'>Find a healthcare provider at Medwin Cares</p>
                <div className=" rounded-md items-center w-2/3  mx-auto mt-5 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-4">
      <form action="">
      <input
        type="search" onChange={(e) => setSearch(e.target.value)}
        className="py-2 px-4 border w-full  border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 "
        placeholder="Search doctors..."
      />
      </form>
    </div>
            </div>
        </div>
            <div>
             <div class="container mx-auto p-10 md:p-20 grid gap-6 lg:grid-cols-2 2xl:grid-cols-3 grid-cols-1 gap-x-3 transform duration-500">
        {
            doctors.filter((doctor) => {
                return search.toLowerCase() === '' ? doctor : doctor.specialist.toLowerCase().includes(search)
            }).map( doctor => <AllDoctorsCard
            key={doctor.id}
            doctor={doctor}
            ></AllDoctorsCard>)
        }
    </div>

        </div>
        </div>
    );
};

export default AllDoctors;