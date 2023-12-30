import React, { useContext, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';
import useAdmin from '../../hooks/useAdmin';
import { AuthContext } from '../../context/AuthProvider';
import { MdEdit } from "react-icons/md";
import { FaUserAlt } from 'react-icons/fa';
import useDoctor from '../../hooks/useDoctor/useDoctor';
import useRequest from '../../hooks/useRequest/useRequest';
import { useForm } from 'react-hook-form';
import useReception from '../../hooks/useReception/useReception';
import useUsers from '../../hooks/UseUsers/UseUsers';
import toast from 'react-hot-toast';

const DashboardLayout = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const { user } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(false);
  const [isAdmin] = useAdmin(user?.email);
  const [isDoctor] = useDoctor(user?.email);
  const [isReception] = useReception(user?.email);
  const [isUser] = useUsers(user?.email);
  const [isRequest] = useRequest(user?.email);

  const closeModal = (name) => {
    // Get the modal element
    const modal = document.getElementById(name);

    // Hide the modal
    modal.close();
};

  const handleUpdateProfile = event => {
  }

  const makeMeDoctor = () =>{
    const url = `http://localhost:5000/users/update/request?email=${user?.email}`;
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
                    closeModal('doctor-modal');
                    toast.success('Doctor Request Send Successfully!!')
                    setDisabled(true);
                }
            })
}
  
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer lg:drawer-open">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <div>
            <img src="" alt="" />
          </div>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <div className='mt-5 md:w-[280px] px-5 border-b-2 pb-5 '>
              <div className="avatar">
                <div className="w-24 ml-16 mask mask-hexagon">
                  {
                    user?.photoURL ?
                      <img src={user?.photoURL} alt='' /> :
                      <FaUserAlt className='text-[65px] ml-2 mt-4' />
                  }
                </div>
                {(!isAdmin && !isDoctor) &&
                  <MdEdit className='text-center text-2xl cursor-pointer z-[50]' onClick={() => document.getElementById('image-modal').showModal()} disabled={disabled} />
                }
              </div>
              <h3 className={`text-lg font-semibold  text-center ${user?.displayName.length > 15 && 'tooltip'}`} data-tip={`${user?.displayName}`}>{user.displayName}</h3>
              <p className='flex gap-3 justify-center items-center text-lg font-semibold'><span>Type : {
                (isAdmin || isDoctor || isReception) ? <>{isAdmin && 'Admin'} {isDoctor && 'Doctor'} {isReception && "Receptionist"} </> : 'User'
              }
              </span>
                {/* {
                  (!isAdmin && !isDoctor) &&
                  <button className="btn btn-xs " onClick={() => document.getElementById('doctor-modal').showModal()} >Doctor Request</button>
                } */}
                {
                  (!isAdmin && !isDoctor && !isReception && !isRequest) &&
                  <button className="btn btn-xs bg-gradient-to-r from-cyan-500 to-blue-500" onClick={() => document.getElementById('doctor-modal').showModal()} disabled={disabled}>Doctor Request</button>
                }

              </p>
            </div>
            <div className='text-lg'>
              {
                isUser && <>
                  <li><Link to='/dashboard'>My Appointment</Link></li>
                  <li><Link to='/dashboard/myorders'>My Orders</Link></li>
                </>
              }


              {
                isDoctor && <>
                  <li><Link to='/dashboard/patients'>My Patients</Link></li>
                  <li><Link to='/dashboard/createdoctor'>Create profile</Link></li>
                </>
              }
              {
                isReception && <>
                  <li><Link to='/dashboard/createuser'>Create User</Link></li>
                </>
              }
              {
                isAdmin && <>
                  <li><Link to='/dashboard/allusers'>Users List</Link></li>
                  <li><Link to='/dashboard/doctors'>Doctors</Link></li>
                  <li><Link to='/dashboard/products'>Products</Link></li>
                  {/* <li><Link to='/dashboard/products'>Doctor Request</Link></li> */}
                  <li><Link to='/dashboard/confirmation'>Confirmation Zone</Link></li>
                </>
              }
              {/* <li><Link to='/dashboard/appointment'>Appointments</Link></li> */}
            </div>
          </ul>

        </div>
      </div>
      {/* Update Profile modal  */}
      <dialog id="image-modal" className="modal">
        <div className="modal-box">
          <h1 className='text-2xl font-semibold mb-2'>Update your profile</h1>
          <form method="dialog" onSubmit={handleUpdateProfile}>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            <div>
              <textarea name="medical" placeholder='Write down your previous medical history...' id="" className='textarea textarea-primary w-full' rows="5"></textarea>
            </div>
            <p className='text-right mt-3'><input className='bg-black px-4 py-2 text-white cursor-pointer' type="submit" /></p>
          </form>
        </div>
      </dialog>

      {/* doctor request modal  */}
      <dialog id="doctor-modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h2 className="text-xl font-semibold mt-5 text-center">Do you really want to send a request for make you doctor!!</h2>
          <p className='text-right'><button onClick={makeMeDoctor} className="btn btn-outline btn-primary mt-5">Request</button></p>
        </div>
      </dialog>
    </div>
  );
};

export default DashboardLayout;