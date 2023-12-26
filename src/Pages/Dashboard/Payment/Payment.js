import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import Loading from '../../../Shared/Loading/Loading';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise)

const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation();
    const { treatment, price, appointmentDate, slot } = booking;

    if(navigation.state === 'loading'){
        return <Loading/>
    }

    return (
        <div className='bg-gray-200 h-full p-5'>
            <h3 className="text-3xl">Payment for {treatment}</h3>
            <p className="text-xl my-3">Please pay <strong>{price} BDT</strong> for your appointment {appointmentDate} at {slot}</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                  <CheckoutForm booking={booking} />
                </Elements>
            </div>

            <div>
                <label htmlFor="">bKash Number</label>
                input:t
            </div>
        </div>
    );
};

export default Payment;