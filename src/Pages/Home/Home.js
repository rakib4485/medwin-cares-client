import React from 'react';
import Banner from './Banner/Banner';
import Expertise from './Expertise/Expertise';
import Surgon from './Surgon/Surgon';
import Subscribe from './Subscribe/Subscribe';
import Experience from './Experience/Experience';
import Doctors from './Doctors/Doctors';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
           <Banner/>
           <Expertise/>
           <Experience/>
           <Surgon/>
           <Doctors/>
           <Testimonials/>
           <Subscribe/>
        </div>
    );
};

export default Home;