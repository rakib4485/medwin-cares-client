import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const BkashPayment = () => {
    const {data: bookings = [], refetch} = useQuery({
        queryKey: ['booking'],
        queryFn: async () => {
            const res = await fetch('https://medwin-cares-server-bayaziddeveloper-gmailcom.vercel.app/allbookings',{
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
            });
            const data = await res.json()
            return data;
        }
    })

    const handleReceived = (id) => {
        fetch(`https://medwin-cares-server-bayaziddeveloper-gmailcom.vercel.app/payments?id=${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
            })
                .then(res => res.json())
                .then(data => { 
                    console.log(data)
                    refetch();
                })
    }
    console.log(bookings)
    return (
        <div className='bg-gray-200 h-full p-5'>
            <h3 className="text-3xl">Appointment Confirmation</h3>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 py-[2px] rounded-lg mb-3 w-24"></div>
            <div className="overflow-x-auto">
                <table className="table w-full text-lg">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Doctor Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Amount</th>
                            <th>Transaction Id</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {   bookings && 
                            [...bookings].reverse().map((booking, i) => <tr key={booking._id}>
                                <th>{i+1}</th>
                                <td>{booking.patient}</td>
                                <td>{booking.treatment}</td>
                                <td>{booking.appointmentDate}</td>
                                <td>{booking.slot}</td>
                                
                                <td>{booking.prices} BDT</td>
                                <td>{booking.transactionId}</td>
                                <td>
                                    {
                                       booking.prices && !booking.paid && 
                                       <span className='text-primary'>Not Paid Yet</span>
                                    }
                                    {
                                        booking.prices && booking.paid === 'pending' && <span className='btn btn-primary btn-sm uppercase' onClick={() => handleReceived(booking._id)}>Received</span>
                                    }
                                    {
                                        booking.prices && (booking.paid === 'true' || booking.paid === true) && <span className='text-primary'>Paid</span>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BkashPayment;