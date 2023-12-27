import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import Loading from '../../../Shared/Loading/Loading';
import toast from 'react-hot-toast';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise)

const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation();
    const { treatment, prices, appointmentDate, slot, _id, email } = booking;
    console.log(booking)

    const handlePayment = (event) => {
        event.preventDefault();
        const tId = event.target.tId.value;
        const payment = {
            price: prices,
            transactionId: tId,
            email,
            bookingId: _id
        }
        fetch('http://localhost:5000/payments?method=bkash', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(payment)
        })
            .then(res => res.json())
            .then(data => { 
                if (data.insertedId) {
                    toast.success("Please Wait for admin verification!!");
                }
            })
    }


    if(navigation.state === 'loading'){
        return <Loading/>
    }

    return (
        <div className='bg-gray-200 h-full p-5'>
            <h3 className="text-3xl">Payment for {treatment}</h3>
            <p className="text-xl my-3">Please pay <strong>{prices} BDT</strong> for your appointment {appointmentDate} at {slot}</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                  <CheckoutForm booking={booking} />
                </Elements>
            </div>
            <div className="divider">OR</div>

            <div>
                <h1 className="text-5xl text-center font-semibold">Bkash Payment</h1>
                <div className='my-20'>
                <h2 className="text-2xl font-semibold text-center">Appointment Fee: {prices}</h2>
                <h2 className="text-2xl font-semibold text-center text-red-500">Make bKash Payment To 01811458885</h2>

                <form className='mx-[10%] mt-10' onSubmit={handlePayment}>
                    <div className='flex gap-6 items-center md:flex-row flex-col justify-center'>
                        <span>Enter bKash Transaction ID <span className='text-red-500'>*</span></span> 
                        <input type="text" name='tId' placeholder="Transaction ID" className="input input-bordered input-accent w-full max-w-xs" required/>
                    
                    </div>
                    <div className='text-center'>
                    <h2 className="text-xl font-semibold text-center text-red-500 my-8">Please make sure you have filled all the fields correctly before submitting</h2>
                    <button type='submit' className="btn btn-outline btn-primary btn-wide" >Submit</button>
                    </div>
                </form>
            </div>
            </div>
        </div>
    );
};

export default Payment;