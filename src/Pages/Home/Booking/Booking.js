import React from 'react';

const Booking = () => {
    return (
        <div>
            <div className="bg-blue-700 p-10">
                <div className='lg:flex items-center justify-around'>
                   <div>
                   <h1 className='text-white text-4xl font-bold'>Knock us out today to get medical services</h1>
                   </div>
                    <div>
                        <button className='bg-black text-white py-5 px-8 rounded-md'>Book Appointment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;