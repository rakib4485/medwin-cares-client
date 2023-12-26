import React from 'react';

const ShopCard = ({product}) => {
    const {id, name, image, price} = product;
    return (
        <div>
            <div className='my-11 flex justify-center items-center'>
            <div className="max-w-xs rounded overflow-hidden shadow-lg transition-transform transform hover:scale-105">
                <div className="relative">
                    <img
                        src={image} 
                        alt="Product"
                        className="w-full h-auto"
                    />
                </div>
                <div className="px-6 py-4">
                    <h1 className="font-bold text-xl mb-2">{name}</h1>
                    <p className=" text-base">{price} BDT</p>
                    <div className='flex gap-5 mt-4'>
                        <button className='bg-gradient-to-r from-violet-500 to-fuchsia-500 px-3 py-2 rounded-md text-white'>Buy Now</button>
                        <button className='bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-3 text-white rounded-md'>Add to cart</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ShopCard;