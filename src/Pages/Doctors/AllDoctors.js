import React, { useState } from 'react';
import teamOne from '../../assests/team-1.jpg';
import teamTwo from '../../assests/team-2.jpg';
import teamThree from '../../assests/team-3.jpg';
import teamFour from '../../assests/team-4.jpg';
import AllDoctorsCard from './AllDoctorsCard';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const AllDoctors = () => {
    const { data: doctors = [] } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/doctors');
            const data = await res.json();
            return data;
        }
    })
    const [search, setSearch] = useState('');
    console.log(search)
    return (
        <div>
            <div className='my-4'>
                <div className="text-center">
                    <h1 className='text-4xl font-bold'>Find a Doctor</h1>
                    <p className='text-2xl'>Find a healthcare provider at Medwin Cares</p>

                    <div className='my-3'>
                        <input type="search" onChange={(e) => setSearch(e.target.value)} placeholder="Search by the doctor specialist area.." className="input input-bordered input-primary w-full max-w-xs" />
                    </div>
                </div>
            </div>
            <div>
                <div class="container mx-auto p-10 md:p-20 grid gap-6 lg:grid-cols-2 2xl:grid-cols-3 grid-cols-1 gap-x-3 transform duration-500">
                    {
                        doctors.filter((doctor) => {
                            return search.toLowerCase() === '' ? doctor : doctor.specialty.toLowerCase().includes(search)
                        }).map(doctor => <AllDoctorsCard
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