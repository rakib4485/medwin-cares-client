import React from 'react';
import SpecialistCard from './SpecialistCard/SpecialistCard';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const Specialist = () => {
    const { data: appointments = [] } = useQuery({
        queryKey: ['appointments'],
        queryFn: async () => {
            const res = await fetch('https://medwin-cares-server-bayaziddeveloper-gmailcom.vercel.app/appointmentOptions');
            const data = await res.json();
            return data;
        }
    })
    const doctorSlice = appointments.slice(0,3)
    return (
        <div className='my-8 mx-[7%]'>
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