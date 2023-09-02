import React from 'react';
import { Link } from 'react-router-dom';

const DoctorAppointment = () => {
    return (
        <div>
            <div className='m-5 flex items-center justify-between'>
            <h1 className='text-3xl font-bold'>Appointments</h1>
            <h3 className='text-2xl font-semibold'>Total appointment: 3</h3>
            </div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className='text-lg'>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Phone Number</th>
        <th>Date</th>
        <th>Slot</th>
        <th>Appointment Type</th>
        <th>Payment Status</th>
        <th>Prescription</th>
      </tr>
    </thead>
    <tbody className='text-lg'>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Bayazid Hossain</td>
        <td>+8801851993828</td>
        <td>2 September 2023</td>
        <td>08.00 AM - 08.30 AM</td>
        <td>Online</td>
        <td>Paid</td>
        <td>
            <Link to='/prescription'><button className="btn btn-sm btn-secondary">Write</button></Link>
        </td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Rasel Mia</td>
        <td>+8801851993828</td>
        <td>2 September 2023</td>
        <td>08.00 AM - 08.30 AM</td>
        <td>Offline</td>
        <td>Unpaid</td>
        <td><button className="btn btn-sm btn-secondary">Write</button></td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Rasel Mia</td>
        <td>+8801851993828</td>
        <td>2 September 2023</td>
        <td>08.00 AM - 08.30 AM</td>
        <td>Online</td>
        <td>Paid</td>
        <td><button className="btn btn-sm btn-secondary">Write</button></td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
    );
};

export default DoctorAppointment;