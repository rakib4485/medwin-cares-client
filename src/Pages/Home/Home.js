import React from 'react';
import Hero from './Hero/Hero';
import Option from './Option/Option';
import AboutHome from './About/AboutHome';
import Department from './Department/Department';
import Choose from './Choose/Choose';
import Specialist from './Specialist/Specialist';
import Solution from './Solution/Solution';

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
        </div>
    );
};

export default Home;