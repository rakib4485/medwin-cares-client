import React, { useEffect, useRef } from 'react';
import videoUrl from '../../../assests/surgeon.mp4'

const Surgon = () => {
    const videoRef = useRef(null);

    useEffect(() => {
      videoRef.current.play();
    }, []);
    return (
        <div className='my-5 hidden lg:block'>
            <div className="relative flex items-center justify-center py-80 mt-3">
      <video
        ref={videoRef}
        src={videoUrl}
        muted
        loop
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="relative z-10 p-8 bg-gray-900 bg-opacity-50 text-white">
        <h1 className="text-3xl font-bold mb-2">"Best Surgeon in the town"</h1>
        <button className='uppercase p-3 mt-3' style={{border: "2px solid white"}}>Contact Us</button>
      </div>
    </div>
    </div>
    );
};

export default Surgon;