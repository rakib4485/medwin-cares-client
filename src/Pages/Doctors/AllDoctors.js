import React, { useState } from 'react';
import teamOne from '../../assests/team-1.jpg';
import teamTwo from '../../assests/team-2.jpg';
import teamThree from '../../assests/team-3.jpg';
import teamFour from '../../assests/team-4.jpg';
import AllDoctorsCard from './AllDoctorsCard';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const AllDoctors = () => {
    const { data: appointmentOptions = [], isLoading } = useQuery({
        queryKey: ['appointmentOptions'],
        queryFn: async () => {
            const res = await fetch('https://medwin-cares-server-bayaziddeveloper-gmailcom.vercel.app/appointmentOptions');
            const data = await res.json();
            return data;
        }
    })
    console.log(appointmentOptions)
    const [search, setSearch] = useState('');
    console.log(search)
    if(isLoading){
        return <Loading/>
    }
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
                        appointmentOptions.filter((appointmentOption) => {
                            return search.toLowerCase() === '' ? appointmentOption : appointmentOption.names.toLowerCase().includes(search)
                        }).map(appointmentOption => <AllDoctorsCard
                            key={appointmentOption.id}
                            doctor={appointmentOption}
                        ></AllDoctorsCard>)
                    }
                </div>

            </div>
        </div>
    );
};

export default AllDoctors;