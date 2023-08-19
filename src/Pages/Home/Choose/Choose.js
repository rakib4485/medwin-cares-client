import React from 'react';
import chooseImg from '../../../assests/choose-us-img.jpg'
import icon from '../../../assests/icon-2.svg'

const Choose = () => {
    return (
        <div className='my-11 mx-[7%]'>
            <div className='grid gap-4 lg:grid-cols-2 mx-3 lg:mx-0'>
                <div>
                    <div className='mb-6'>
                    <p className="uppercase text-blue-700 text-2xl">why choose us</p>
                    <h3 className='text-2xl lg:text-4xl font-semibold'>Our hospital has professional doctors who provide low cost 24 hour service</h3> 
                    <p className="mt-2 lg:w-4/5">Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat.</p>
                    </div>
                    <div>
                        <div className='flex gap-3 items-center'>
                            <div className='bg-blue-700 p-5 rounded-full'>
                            <h1 className='text-2xl lg:text-3xl text-white'>1</h1>
                            </div>
                            <div>
                                <h1 className='text-2xl lg:text-4xl mb-2'>Modern Technology</h1>
                                <p className='lg:w-2/3 text-justify'>Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
                            </div>
                        </div>
                    </div>
                    <div className='my-5'>
                        <div className='flex gap-3 items-center'>
                            <div className='bg-black p-5 rounded-full'>
                            <h1 className='text-2xl lg:text-3xl text-white'>2</h1>
                            </div>
                            <div>
                                <h1 className='text-2xl lg:text-4xl mb-2'>Professional Doctors</h1>
                                <p className='lg:w-2/3 text-justify'>Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex gap-3 items-center'>
                            <div className='bg-blue-700 p-5 rounded-full'>
                            <h1 className='text-2xl lg:text-3xl text-white'>3</h1>
                            </div>
                            <div>
                                <h1 className='text-2xl lg:text-4xl mb-2'>Affordable Price</h1>
                                <p className='lg:w-2/3 text-justify'>Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img className='w-3/4 rounded-xl' src={chooseImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Choose;