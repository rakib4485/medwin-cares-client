import React from 'react';

const ConfirmOrders = () => {
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
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      {/* row 2 */}
      <tr className="hover">
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ConfirmOrders;