import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';
import useAdmin from '../../hooks/useAdmin';
import { AuthContext } from '../../context/AuthProvider';
import { FaUserAlt } from 'react-icons/fa';
import useDoctor from '../../hooks/useDoctor/useDoctor';

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isDoctor] = useDoctor(user?.email);
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
                            {/* <MdEdit className='text-center text-2xl cursor-pointer z-[50]' onClick={() => document.getElementById('image-modal').showModal()} /> */}
                        </div>
                        <h3 className={`text-lg font-semibold  text-center ${user?.displayName.length > 15 && 'tooltip'}`} data-tip={`${user?.displayName}`}>{user.displayName}</h3>
                        <p className='flex justify-center items-center mt-3 text-lg font-semibold'><span>Type : {
                            (isAdmin || isDoctor ) ? <>{isAdmin && 'Admin'} {isDoctor && 'Doctor'} </> : 'User'
                        }
                        </span>
                            {/* {
                                (!isAdmin && !isDoctor) &&
                                <button className="btn btn-xs" onClick={() => document.getElementById('owner-modal').showModal()} >Owner Request</button>
                            } */}


                        </p>
                    </div>
            <div className='text-lg'>
              <li><Link to='/dashboard'>My Appointment</Link></li>
              <li><Link to='/dashboard/myorders'>My Orders</Link></li>
              {
                isAdmin && <>
                  <li><Link to='/dashboard/allusers'>Users List</Link></li>
                  <li><Link to='/dashboard/doctors'>Doctors</Link></li>
                  <li><Link to='/dashboard/products'>Products</Link></li>
                  <li><Link to='/dashboard/confirmpayment'>Confirm Payment</Link></li>
                </>
              }
              {/* <li><Link to='/dashboard/appointment'>Appointments</Link></li> */}
            </div>
          </ul>

        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;