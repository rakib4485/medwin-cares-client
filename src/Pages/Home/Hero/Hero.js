import React from 'react';
import HeroCarousel from './HeroCarousel';

const Hero = () => {
    const slide = [
        {
          image: 'https://ibb.co/D16sTWV',
          text: 'Lorem ipsum dolor sit amet 1',
        },
        {
          image: 'image-url-2.jpg',
          text: 'Lorem ipsum dolor sit amet 2',
        },
        {
          image: 'image-url-3.jpg',
          text: 'Lorem ipsum dolor sit amet 3',
        },
      ];
      
    return (
        <div>
            {
            slide.map(slides => <HeroCarousel
                 key={slides} slides={slides}>
                 </HeroCarousel>)
            }
        </div>
    );
};

export default Hero;