import React from 'react';
import Banner from './Banner/Banner';
import Expertise from './Expertise/Expertise';
import Surgon from './Surgon/Surgon';
import Subscribe from './Subscribe/Subscribe';
import Experience from './Experience/Experience';
import Doctors from './Doctors/Doctors';
import Testimonials from './Testimonials/Testimonials';
import BannerTwo from './BannerTwo/BannerTwo';
import Trust from './Trust/Trust';

const Home = () => {
    return (
        <div className='lg:w-[1380px] mx-auto'>
           <Banner/>
           <Expertise/>
           <Experience/>
           <Surgon/>
           <Doctors/>
           <BannerTwo/>
           <Trust/>
           <Testimonials/>
           <Subscribe/>
        </div>
    );
};

export default Home;