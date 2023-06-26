import React from 'react';
import Hero from './Hero/Hero';
import Option from './Option/Option';
import AboutHome from './About/AboutHome';
import Department from './Department/Department';
import Choose from './Choose/Choose';
import Specialist from './Specialist/Specialist';
import Solution from './Solution/Solution';
import Booking from './Booking/Booking';

const Home = () => {
    return (
        <div className=''>
           <Hero/>
           <Option/>
           <AboutHome/>
           <Department/>
           <Choose/>
           <Specialist/>
           <Solution/>
           <Booking/>
        </div>
    );
};

export default Home;