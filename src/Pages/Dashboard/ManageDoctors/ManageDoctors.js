import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loading from '../../../Shared/Loading/Loading';
import ConfirmationModal from '../../../Shared/ConfirmationModal/ConfirmationModal';
import toast from 'react-hot-toast';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);

    const closeModal = () => {
        setDeletingDoctor(null);
    }
    const { data: appointmentOptions, isLoading, refetch} = useQuery({
        queryKey: ['appointmentOptions'],
        queryFn: async () => {
            try {
                const res = await fetch('https://medwin-cares-server-bayaziddeveloper-gmailcom.vercel.app/appointmentOptions', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    })

    const handleDeleteDoctor = appointmentOption => {
        fetch(`https://medwin-cares-server-bayaziddeveloper-gmailcom.vercel.app/appointmentOptions/${appointmentOption._id}`, {
            method: 'DELETE', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`Doctor ${appointmentOption.names} deleted successfully`)
            }
        })
    }

    if(isLoading){
        return <Loading/>
    }

    return (
        <div className='bg-gray-200 h-full p-5'>
            <h1 className='text-3xl'>Manage Doctors</h1>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 py-[2px] rounded-lg mb-3 w-24"></div>
            <div className="overflow-x-auto">
                <table className="table text-lg">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointmentOptions &&
                            appointmentOptions.map((appointmentOption, i) => <tr key={appointmentOption._id}>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={appointmentOption.image} alt=''/>
                                    </div>
                                </div>
                                </td>
                                <td>{appointmentOption.names}</td>
                                <td>{appointmentOption.email}</td>
                                <td>{appointmentOption.name}</td>
                               <td><label onClick={() => setDeletingDoctor(appointmentOption)} htmlFor="confirmation-modal" className="btn btn-xs btn-error">Delete</label></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingDoctor && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingDoctor.names}. It cannot be undone.`}
                    successAction = {handleDeleteDoctor}
                    successButtonName="Delete"
                    modalData = {deletingDoctor}
                    closeModal = {closeModal}
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default ManageDoctors;