import React from 'react';
import Hero from './Hero/Hero';
import Option from './Option/Option';
import AboutHome from './About/AboutHome';
import Department from './Department/Department';

const Home = () => {
    return (
        <div className='lg:w-[1380px] mx-auto'>
           {/* <Hero/> */}
           <Option/>
           <AboutHome/>
           <Department/>
        </div>
    );
};

export default Home;