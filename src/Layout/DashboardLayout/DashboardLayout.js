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

const DashboardLayout = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const { user } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(false);
  const [isAdmin] = useAdmin(user?.email);
  const [isDoctor] = useDoctor(user?.email);
  const [isReception] = useReception(user?.email);
  const [isUser] = useUsers(user?.email);
  const [isRequest] = useRequest(user?.email);

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
                <MdEdit className='text-center text-2xl cursor-pointer z-[50]' onClick={() => document.getElementById('image-modal').showModal()} />
              </div>
              <h3 className={`text-lg font-semibold  text-center ${user?.displayName.length > 15 && 'tooltip'}`} data-tip={`${user?.displayName}`}>{user.displayName}</h3>
              <p className='flex gap-3 justify-center items-center text-lg font-semibold'><span>Type : {
                (isAdmin || isDoctor || isReception) ? <>{isAdmin && 'Admin'} {isDoctor && 'Doctor'} {isReception && "Receptionist"} </> : 'User'
              }
              </span>
                {/* {
                  (!isAdmin && !isDoctor) &&
                  <button className="btn btn-xs " onClick={() => document.getElementById('owner-modal').showModal()} >Doctor Request</button>
                } */}
                {
                                (!isAdmin && !isDoctor && !isRequest) &&
                                <button className="btn btn-xs bg-gradient-to-r from-cyan-500 to-blue-500" onClick={() => document.getElementById('owner-modal').showModal()} disabled={disabled}>Doctor Request</button>
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
                <li><Link to=''>My Patients</Link></li>
                <li><Link to='/dashboard/adddoctor'>Create profile</Link></li>
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
                  <li><Link to='/dashboard/products'>Doctor Request</Link></li>
                  <li><Link to='/dashboard/confirmation'>Confirmation Zone</Link></li>
                </>
              }
              {/* <li><Link to='/dashboard/appointment'>Appointments</Link></li> */}
            </div>
          </ul>

        </div>
      </div>
      <dialog id="image-modal" className="modal">
        <div className="modal-box">
          <h1 className='text-2xl font-semibold'>Update your profile</h1>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <form>
            <div className="form-control w-full">
              <label className="label"><span className="label-text">Name</span></label>
              <input {...register("name", { required: "Name is required" })} defaultValue={user?.displayName} disabled type="text" className="input input-bordered w-full" />
              {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
            </div>
            <div className="form-control w-full">
              <label className="label"><span className="label-text">Email</span></label>
              <input {...register("email", { required: "email is required" })} defaultValue={user?.email} disabled type="text" className="input input-bordered w-full" />
              {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
            </div>
            <div className="form-control w-full">
              <label className="label"><span className="label-text">Phone Number</span></label>
              <input {...register("phone", { required: "phone is required" })} type="text" className="input input-bordered w-full" />
              {errors.phone && <p className='text-red-600'>{errors.phone?.message}</p>}
            </div>
            <div className="form-control w-full">
              <label className="label"><span className="label-text">NID number / Birth certificate number / Passport Number</span></label>
              <input {...register("phone", { required: "phone is required" })} type="text" className="input input-bordered w-full" />
              {errors.phone && <p className='text-red-600'>{errors.phone?.message}</p>}
            </div>
            <div className="form-control w-full">
              <label className="label"><span className="label-text">Medical History</span></label>
              <textarea {...register("medical", { required: "Medical history is required" })} className="textarea textarea-primary w-full" />
              {errors.medical && <p className='text-red-600'>{errors.medical?.message}</p>}
            </div>
            <div className=" w-full">
              <label className="label"><span className="label-text">Choose Image</span></label>
             <input type="file" src="" alt="" />
            </div>
            <p className='text-right mt-3'><input className='bg-black px-4 py-2 text-white cursor-pointer' type="submit" /></p>
          </form>
        </div>
      </dialog>

      {/* doctor request modal  */}
      <dialog id="owner-modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h2 className="text-xl font-semibold mt-5 text-center">Do you really want to send a request for make you doctor!!</h2>
          <p className='text-right'><button className="btn btn-outline btn-primary mt-5">Request</button></p>
        </div>
      </dialog>
    </div>
  );
};

export default DashboardLayout;