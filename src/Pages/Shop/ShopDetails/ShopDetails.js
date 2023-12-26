import React, { useState } from 'react';
import ShopCard from '../ShopCard/ShopCard';
import { FaSearch } from "react-icons/fa";
import { useQuery } from '@tanstack/react-query';


const ShopDetails = () => {
    const {data: shop = []} = useQuery({
        queryKey: ['shop'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/shop');
            const data = await res.json();
            return data;
        }
    })
    const [search, setSearch] = useState('');
    return (
        <div>
            <div className='text-center mb-5 mt-5 lg:mt-11'>
            <h1 className='text-3xl lg:text-4xl font-semibold'>Your Medicine Heaven</h1>
            <p className='w-2/4 mx-auto mt-2'>Welcome to our online medicine shop, where your well-being takes center stage. Discover a curated selection of top quality medications and health essentials, ensuring a journey to vitality and wellness like never before.</p>
            </div>
            <div className='flex justify-center items-center'>
                
                <input type="search" onChange={(e) => setSearch(e.target.value)} placeholder="Search by the name of the medicine" className="input input-bordered input-primary w-full max-w-xs" /> <span><FaSearch className='text-4xl bg-blue-400  px-2'/></span>
                
            </div>
            <div className="grid grid-cols-4">
                {
                    shop.filter((product) =>{
                        return search.toLowerCase() === '' ? product : product.name.toLowerCase().includes(search)}).map(product => <ShopCard key={product.id} product={product}></ShopCard>)
                }
        </div>
        </div>
    );
};

export default ShopDetails;