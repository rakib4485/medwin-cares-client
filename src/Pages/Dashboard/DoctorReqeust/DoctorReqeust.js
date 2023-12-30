import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const DoctorReqeust = () => {
    const [requestEmail , setRequestEmail ] = useState('');
    const [role, setRole] = useState('');
    const [userName, setUserName] = useState('')

    const closeModal = (name) => {
        // Get the modal element
        const modal = document.getElementById(name);

        // Hide the modal
        modal.close();
    };

    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    });

    const handleRole = () =>{
        const url = `http://localhost:5000/users/update/${role}?email=${requestEmail}`;
        fetch(url, {
                method: 'PUT',
                headers: {
                    "content-type": "application/json"
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.acknowledged){
                        refetch();
                        closeModal('request-modal');
                        toast.success((role === 'confirm'? 'Doctor Request Accept Successfully!!' : 'Owner Deleted Successfully!!'));
                    }
                })
    }
    return (
        <div className='bg-gray-200 h-full p-5'>
            <h1 className='text-3xl'>Confirm Doctor Request</h1>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 py-[2px] rounded-lg mb-3 w-36"></div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Confirm</th>
      </tr>
    </thead>
    <tbody>
    {
                                        users.map((user, i) => (

                                            user.role === 'request' ?
                                                <tr key={i} className="hover">
                                                    <th></th>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user?.role !== 'admin' && <button onClick={() => {document.getElementById('request-modal').showModal(); setRequestEmail(user.email); setRole('confirm'); setUserName(user.name)}} className='btn btn-xs text-white btn-success'>Confirm</button>}</td>
                                                </tr> :
                                                <></>

                                        ))
                                    }
      <tr className="hover">
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
    </tbody>
  </table>
</div>
{/* request modal  */}
<dialog id="request-modal" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h2 className="text-xl font-semibold mt-5 capitalize text-center">{role === 'confirm'? `Do you really want to make ${userName} as a owner!!`: `Do you really want to Delete ${userName}!!`}</h2>
                    <p className='text-right'><button onClick={handleRole} className={`btn btn-outline ${role === 'confirm'? 'btn-success':'btn-error'} mt-5`}>{role === 'confirm'? 'Confirm' : 'Delete'}</button></p>

                </div>
            </dialog>
        </div>
    );
};

export default DoctorReqeust;