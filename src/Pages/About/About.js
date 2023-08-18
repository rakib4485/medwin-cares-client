import React from 'react';
import AboutIntro from './AboutIntro/AboutIntro';
import HowAppointment from './HowAppointment/HowAppointment';
import WhyUS from './WhyUS/WhyUS';
import History from './History/History';
import ModernService from './ModernService/ModernService';

const About = () => {
    return (
        <div>
            <AboutIntro/>
            <ModernService/>
            <HowAppointment/>
            <WhyUS/>
            <History/>
        </div>
    );
};

export default About;