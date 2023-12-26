import DepartmentCard from './DepartmentCard';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Autoplay } from 'swiper/modules';
import { useQuery } from '@tanstack/react-query';

const Department = () => {
    const {data: departments = []} = useQuery({
        queryKey: ['departments'],
        queryFn: async() =>{
            const res = await fetch('https://medwin-cares-server-bayaziddeveloper-gmailcom.vercel.app/departments');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className='my-11 mx-[7%]'>
            <div className="text-center">
                <p className="uppercase text-blue-700 text-2xl">our department</p>
                <h1 className='lg:w-2/3 text-3xl lg:text-5xl mx-auto'>Our hospital has all kinds of departments, so you can get all kinds of treatment</h1>
            </div>
            <div className='container mx-auto p-10 md:py-20 px-5 md:p-10 md:px-0'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    freeMode={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[FreeMode, Autoplay]}
                    className="mySwiper"
                >
                    {departments.map(department => <SwiperSlide key={department.id}> <DepartmentCard

                        department={department}
                    ></DepartmentCard></SwiperSlide>)}
                </Swiper>
            </div>
        </div>
    );
};

export default Department;