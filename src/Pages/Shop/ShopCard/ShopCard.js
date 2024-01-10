import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import toast from 'react-hot-toast';

const ShopCard = ({product}) => {
    const {_id, name, image, price} = product;
    const {user} = useContext(AuthContext)

    const handleCart = () => {
        const item = {
            productId : _id,
            name,
            image,
            price,
            bookedEmail: user?.email
        }

        fetch('http://localhost:5000/carts', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(item),
        })
            .then((res) => res.json())
            .then((data) => {
                if(data.acknowledged){
                    toast.success('Item added to the cart');
                }
            });
        }
    

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
                        <button className='bg-gradient-to-r from-violet-500 to-fuchsia-500 px-3 py-2 rounded-md text-white'>
                            <Link to={`/ShopPayment/${_id}`}>Buy Now</Link>
                        </button>
                        <button className='bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-3 text-white rounded-md' onClick={handleCart}>Add to cart</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ShopCard;