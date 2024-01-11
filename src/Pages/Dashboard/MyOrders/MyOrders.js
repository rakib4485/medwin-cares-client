import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const MyOrders = () => {
  const {user} = useContext(AuthContext);
  const {data: orders = [], isLoading} = useQuery({
    queryKey: ['order'],
    queryFn: async () => {
      const res = await fetch(`https://medwin-cares-server-bayaziddeveloper-gmailcom.vercel.app/myorders?email=${user?.email}`);
      const data = await res.json();
      return data;
    }
  })
    return (
        <div className='bg-gray-200 h-full p-5'>
           <h2 className="text-3xl">My Orders</h2>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 py-[2px] rounded-lg mb-3 w-24"></div>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Customer Name</th>
        <th>Phone Number</th>
        <th>Address</th>
        <th>Product Name</th>
        <th>Price</th>
        <th>Delivery Type</th>
        <th>Delivery Time</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        orders.map((order, i) => <tr key={order._id}>
          <th>{i+1}</th>
          <td>{order.name}</td>
          <td>{order.phone}</td>
          <td>{order.address}</td>
          <td>{order.productName}</td>
          <td>{order.price} <strong>BDT</strong></td>
          <td>Cash On Delivery</td>
          <td>{order.status ? <span className='text-primary'>Your Product Will be delivered within 24 Hours</span> : 'Pending...'}</td>
        </tr>)
      }
      
      {/* row 2 */}
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrders;