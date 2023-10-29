import React from 'react';

const DoctorsSearch = () => {
    return (
        <div className='my-8'>
            <div className="text-center">
                <h1 className='text-4xl font-bold'>Find a Doctor</h1>
                <p className='text-2xl'>Find a healthcare provider at Medwin Cares</p>
                <div className=" rounded-md items-center w-2/3  mx-auto mt-5 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-4">
      <form action="">
      <input
        type="search"
        className="py-2 px-4 border w-full  border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 "
        placeholder="Search doctors..."
      />
      </form>
    </div>
            </div>
        </div>
    );
};

export default DoctorsSearch;