import React from 'react';
import teamOne from '../../../../assests/team-1.jpg';
import teamTwo from '../../../../assests/team-2.jpg';
import teamThree from '../../../../assests/team-3.jpg';
import teamFour from '../../../../assests/team-4.jpg';
import { Link } from 'react-router-dom';
import ViewButton from '../../../../components/ViewButton/ViewButton';
import AppointmentButton from '../../../../components/AppointmentButton/AppointmentButton';

const SpecialistCard = ({doctor}) => {
    const {id, img, name, specialist} = doctor;
    return (
        <div>
            <div>
                <div class="shadow-md mx-auto max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer">
                    <div class="max-h-140 overflow-hidden">
                        <img class="w-full h-auto" src={img}
                            alt="" />
                    </div>
                    <div class="p-7 ">
                        <Link to='/doctorDetails'>
                        <h1 class="text-2xl font-semibold text-gray-700">{name}</h1>
                        </Link>
                        <p class="text-xl font-light leading-relaxed mt-5">{specialist} </p>
                        <div className='flex justify-between items-center mt-3'>
                            <Link to='/doctorDetails'>
                                <ViewButton>View Profile</ViewButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SpecialistCard;