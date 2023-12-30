import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {
  const [deletingUser, setDeletingUser] = useState();

  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch('https://medwin-cares-server-two.vercel.app/users');
      const data = await res.json();
      return data;
    }
  });

  const handleMakeAdmin = id => {
    fetch(`https://medwin-cares-server-two.vercel.app/users/admin/${id}`, {
      method: 'PUT',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          toast.success('Made admin successfully')
          refetch();
        }
      })
  }

  const handleMakeReceptionist = id => {
    fetch(`http://localhost:5000/users/reception/${id}`, {
      method: 'PUT',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          toast.success('Made receptionist successfully')
          refetch();
        }
      })
  }

  const handleDeleteUser = id => {
    fetch(`https://medwin-cares-server-two.vercel.app/users/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`User deleted successfully`)
        }
      })
  }

  return (
    <div className='bg-gray-200 h-full p-5'>
      <h2 className="text-3xl">Users List</h2>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 py-[2px] rounded-lg mb-3 w-24"></div>
      <div className="overflow-x-auto">
        <table className="table w-full text-lg">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Receptionist</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, i) => <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
                <td>{user?.role !== 'reception' && <button onClick={() => handleMakeReceptionist(user._id)} className='btn btn-xs btn-info'>Make Receptionist</button>}</td>
                <td><button onClick={() => handleDeleteUser(user._id)} className='btn btn-xs btn-error'>Delete</button></td>
              </tr>)
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;