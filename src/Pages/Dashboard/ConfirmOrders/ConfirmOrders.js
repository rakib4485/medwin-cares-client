import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const ConfirmOrders = () => {
  const {data: orders = [], refetch} = useQuery({
    queryKey: ['order'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/orders/');
      const data = await res.json();
      return (data);
    }
  })

  const handleConfirm = id => {
    fetch(`http://localhost:5000/orders/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      }
      
    })
    .then(res => res.json())
      .then(data => {
        if(data.acknowledged){
          toast.success("Order Confirmed")
          refetch()
        }
      })
  }
    return (
        <div className='bg-gray-200 h-full p-5'>
            <h3 className="text-3xl">Orders Confirmation</h3>
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
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {
        orders.map((order, i) =>  <tr key={i}>
          <th>{i+1}</th>
          <td>{order.name}</td>
          <td>{order.phone}</td>
          <td>{order.address}</td>
          <td>{order.productName}</td>
          <td>{order.price}</td>
          <td>{order.status ? 'Ordered': <span className='btn btn-primary btn-sm' onClick={() => handleConfirm(order._id)}>Confirm</span>}</td>
        </tr>)
      }
     
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ConfirmOrders;