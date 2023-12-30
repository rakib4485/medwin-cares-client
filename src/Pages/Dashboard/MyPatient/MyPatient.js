import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const MyPatient = () => {
    const {user} = useContext(AuthContext);

    // const url = `http://localhost:5000/doctorBookings?email=${user?.email}`;

    // const { data: bookings = [], isLoading } = useQuery({
    //     queryKey: ['bookings', user?.email],
    //     queryFn: async () => {
    //         const res = await fetch(url, {
    //             headers: {
    //                 authorization: `bearer ${localStorage.getItem('accessToken')}`
    //             }
    //         });
    //         const data = await res.json();
    //         return data;
    //     }
    // })

    const {data: bookings = [], isLoading} = useQuery({
        queryKeyL: ['booking'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/doctorBookings?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })
    
    return (
        <div className='bg-gray-200 h-full p-5'>
            <h1 className="text-3xl font-semibold">My Paitents</h1>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 py-[2px] rounded-lg mb-3 w-24"></div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Appointment Date</th>
                            <th>Appointment Slot</th>
                            <th>Appointment Type</th>
                            <th>Prescription</th>
                            <th>Meet Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                                [...bookings].reverse().map((booking, i) => <tr key={booking._id} className='hover'>
                                    <th>{i + 1}</th>
                                    <td><p className="text-blue-700 cursor-pointer" onClick={() => document.getElementById('patient-modal').showModal()}>{booking.patient}</p></td>
                                    <td>{booking.appointmentDate}</td>
                                    <td>{booking.slot}</td>
                                    <td>{booking?.paid === 'true' ? <span className="text-primary">Paid</span> : booking.paid}</td>
                                    <td><p className="text-blue-700 cursor-pointer" onClick={() => document.getElementById('prescription-modal').showModal()}>Write Prescription</p></td>
                                    <td>
                                    {/* {booking?.paid === 'true' ? <Link target='_blank' to={booking.meet} className="btn btn-primary btn-sm">join meet</Link> : booking.paid} */}
                                    <Link target='_blank' to={booking.meet} className={`btn btn-primary btn-sm `}>join meet</Link>
                                    </td>
                                    
                                </tr>)
                            }
                    </tbody>
                </table>
            </div>
            {/* patients dialog  */}
            <dialog id="patient-modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          <h2 className="text-xl font-semibold mt-5 text-center">Medical History</h2>
          <textarea className="textarea textarea-primary w-full my-3 py-7" placeholder="Bio"></textarea>
            <p className='text-right'><button className="btn btn-outline btn-primary mt-5">Done</button></p>
          </form>
        </div>
      </dialog>
            {/* prescription dialog  */}
            <dialog id="prescription-modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            <h2 className="text-xl font-semibold mt-5 text-center">Prescription</h2>
            <div>
                <label htmlFor="">Patients Name</label>
                <input name='name' type="text" placeholder="" defaultValue="name" className="input input-bordered w-full" />
            </div>
            <div className='my-2'>
                <label htmlFor="">Age</label>
                <input name='age' type="text" placeholder="" className="input input-bordered w-full" />
            </div>
            <div className='my-2'>
                <label htmlFor="">Medicine</label>
                <input name='medicine' type="text" placeholder="" defaultValue="Medicine" className="input input-bordered w-full" />
            </div>
            <div className='my-2'>
                <label htmlFor="">Test or Guideline</label>
                <textarea className="textarea textarea-bordered w-full" placeholder="Bio"></textarea>
            </div>
           <p className='text-right mt-3'><input className='bg-black px-4 py-2 text-white cursor-pointer' type="submit" /></p>
          </form>
          
        </div>
      </dialog>
        </div>
    );
};

export default MyPatient;