import React from 'react';

const DoctorsSearch = () => {
    return (
        <div className='my-8'>
            <div className="text-center">
                <h1 className='text-4xl font-bold'>Find a Doctor</h1>
                <p className='text-2xl'>Find a healthcare provider at Medwin Cares</p>
                <div className="flex items-center space-x-4 w-1/2 mx-auto mt-5">
      <input
        type="text"
        className="py-2 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex-grow"
        placeholder="Search..."
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg transition duration-300"
      >
        Search
      </button>
    </div>
            </div>
        </div>
    );
};

export default DoctorsSearch;