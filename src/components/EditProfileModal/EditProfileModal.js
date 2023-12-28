import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const EditProfileModal = ({editProfile, setEditProfile}) => {
    const { user } = useContext(AuthContext);
    const handleEditProfile = event =>{

    }
    return (
        <>
            <input type="checkbox" id="edit-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold">Edit Profile</h3>
          <form onSubmit={handleEditProfile} className='grid grid-cols-1 gap-3 mt-10'>
            <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Full Name" className="input input-bordered w-full" />
            <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Email" className="input input-bordered w-full" />
            <input name='phone' type="text" defaultValue={user?.phone} placeholder="Phone Number"  className="input input-bordered w-full" />
          <p className='text-red-500'> Note: You must have to complete the payment for confirm your appointment</p>
            <input className='btn btn-accent w-full' type="submit" value="Submit" />
          </form>
        </div>
      </div>
        </>
    );
};

export default EditProfileModal;