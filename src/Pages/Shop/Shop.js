import React from 'react';
import productOne from '../../assests/product-2.jpg'
import { Link } from 'react-router-dom';
import intro from '../../assests/intro.jpg'

const Shop = () => {
    return (
        <div>
            {/* Page intro started  */}
            <div>
                <div className="relative">
                    <div className="relative bg-gray-900">
                        <img
                            className="object-cover w-full h-[60vh]"
                            src={intro}
                            alt="Page Intro"
                        />
                        <div className="absolute inset-0 bg-blue-700 opacity-25"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center bg-white rounded-md px-20 py-3">
                                <h1 className="text-4xl font-bold text-black mb-4 italic">
                                    Shop
                                </h1>
                                <Link
                                    to="/"
                                    className="inline-block text-black font-bold py-2 px-4 rounded"
                                >
                                    <span className='hover:text-blue-700'>Home</span> - Shop
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Page intro end */}
            {/* Shoping started  */}
            <div className='my-11 lg:w-[1380px] mx-auto'>
            <div className="max-w-xs rounded overflow-hidden shadow-lg ">
                <div className="relative">
                    <img
                        src={productOne} 
                        alt="Product"
                        className="w-full h-auto"
                    />
                    <div className="absolute inset-0 flex gap-2 items-center justify-center opacity-0 hover:opacity-100">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Add to Cart
                        </button>
                        <button className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded">
                            Buy Now
                        </button>
                    </div>
                </div>
                <div className="px-6 py-4">
                    <h1 className="font-bold text-xl mb-2">Violet glass gel</h1>
                    <p className=" text-base">$99.99</p>
                </div>
            </div>
            </div>
            {/* Shoping end  */}
        </div>
    );
};

export default Shop;