import React from 'react';
import { Link } from 'react-router-dom';

const AllDoctorsCard = ({ doctor }) => {
    const { id, names, name, image, specialty } = doctor
    return (
        <div>
            <div>
                <div className="max-w-sm mx-auto shadow-lg bg-cyan-100 p-2 rounded-lg overflow-hidden">
                    <img
                        className=" h-72 w-72 object-cover object-center rounded-full mx-auto"
                        src={image}
                        alt={names}
                    />
                    <div className="p-4 text-center mt-2">
                        <h2 className="text-xl font-semibold text-gray-800">{names}</h2>
                        <p className="text-gray-600">{name}</p>
                        {/* <p className="text-lg text-gray-800 mt-2">${}</p> */}
                    </div>
                    <div className="flex justify-center items-center p-4">
                        {/* <Link to='/doctorDetails' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            View Profile
                        </Link> */}
                        <Link to="/appointments" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                            Make Appointment
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllDoctorsCard;