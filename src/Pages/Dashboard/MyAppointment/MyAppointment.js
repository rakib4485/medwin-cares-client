import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../Shared/Loading/Loading';
import { Link } from 'react-router-dom';
import * as Tabs from '@radix-ui/react-tabs';
import MyOrders from '../MyOrders/MyOrders';

const MyAppointment = () => {
    const { user } = useContext(AuthContext);


    const url = `https://medwin-cares-server-two.vercel.app/bookings?email=${user?.email}`;

    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    console.log(bookings)


    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <div className='m-2'>
                <Tabs.Root className="TabsRoot" defaultValue="tab1">
                    <Tabs.List className="TabsList" aria-label="Manage your account">
                        <Tabs.Trigger className="TabsTrigger" value="tab1">
                            My Appointments
                        </Tabs.Trigger>
                        <Tabs.Trigger className="TabsTrigger" value="tab2">
                            My Orders
                        </Tabs.Trigger>
                    </Tabs.List>
                    <Tabs.Content className="TabsContent" value="tab1">
                        <div className='bg-gray-200 h-full p-5'>
                            <h3 className="text-3xl">My Appointments</h3>
                            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 py-[2px] rounded-lg mb-3 w-24"></div>
                            <div className="overflow-x-auto">
                                <table className="table w-full text-lg">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Name</th>
                                            <th>Doctor Name</th>
                                            <th>Date</th>
                                            <th>Time</th>
                                            <th>Meet Link</th>
                                            <th>Amount</th>
                                            <th>Payment</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {bookings &&
                                            bookings.map((booking, i) => <tr key={booking._id}>
                                                <th>{i + 1}</th>
                                                <td>{booking.patient}</td>
                                                <td>{booking.treatment}</td>
                                                <td>{booking.appointmentDate}</td>
                                                <td>{booking.slot}</td>
                                                <td>
                                                    {
                                                        booking.prices && booking.paid && <p>{booking.meet}</p>
                                                    }
                                                </td>
                                                <td>{booking.prices} BDT</td>
                                                <td>
                                                    {
                                                        booking.prices && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}>
                                                            <button className='btn btn-primary btn-sm uppercase'>Pay</button>
                                                        </Link>
                                                    }
                                                    {
                                                        booking.prices && booking.paid === 'pending' && <span className='text-primary'>Pending Verify</span>
                                                    }
                                                    {
                                                        booking.prices && (booking.paid === 'true' || booking.paid === true) && <span className='text-primary'>Paid</span>
                                                    }
                                                </td>
                                            </tr>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Tabs.Content>
                    <Tabs.Content className="TabsContent" value="tab2">
                        <MyOrders />
                    </Tabs.Content>
                </Tabs.Root>
            </div>
        </div>
    );
};

export default MyAppointment;