import React from 'react';
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
    return (
        <div>
            <div>
             <div class="container mx-auto p-10 md:p-20 grid gap-6 lg:grid-cols-2 2xl:grid-cols-3 grid-cols-1 gap-x-3 transform duration-500">
        {
            doctors.map( doctor => <AllDoctorsCard
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