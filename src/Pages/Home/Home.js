import React from 'react';
import Hero from './Hero/Hero';
import Option from './Option/Option';
import AboutHome from './About/AboutHome';
import Department from './Department/Department';
import Choose from './Choose/Choose';
import Specialist from './Specialist/Specialist';

const Home = () => {
    return (
        <div className='lg:w-[1380px] mx-auto'>
           {/* <Hero/> */}
           <Option/>
           <AboutHome/>
           <Department/>
           <Choose/>
           <Specialist/>
        </div>
    );
};

export default Home;