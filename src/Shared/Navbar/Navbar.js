import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { HiOutlineUser } from "react-icons/hi";

export default function Index() {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error))
  }

  const menuItem = (
    <React.Fragment>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'>About Us</Link>
      </li>
      <li>
        <Link to='/doctors'>Find A Doctor</Link>
      </li>
      <li>
        <Link to='/appointments'>Appointment</Link>
      </li>
      <li>
        <Link to='/shop'>Shop</Link>
      </li>
      <li>
        <Link to='/contact'>Contact Us</Link>
      </li>
    </React.Fragment>
  )

  return (
    <div className="dark:bg-gray-900">
      <div className="navbar text-black py-5 px-9">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#2B3440] rounded-box w-52">
              {menuItem}
            </ul>
          </div>
          <Link to='/' className="text-3xl font-bold italic text-gray-800 dark:text-white nav-title">Medwin Cares</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-6  px-1">
            {menuItem}
          </ul>
        </div>
        <div className="navbar-end">
          {user?.uid ? (
            <>

              <div className="dropdown dropdown-hover">
                <label tabIndex={0} className="rounded-full">
                  {
                    user?.photoURL ? (
                      <>

                        <div className="avatar">
                          <div className="w-12 rounded-full">
                            <img src={user.photoURL} alt='' />
                          </div>
                        </div>
                      </>
                    ) :
                      (
                        <HiOutlineUser className='text-2xl lg:mr-4' />
                      )
                  }
                </label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box -ml-24 w-44">
                  <li>
                    <Link to='/dashboard' className='text-black'>My Dashboard</Link>
                  </li>
                  <li>
                    <Link to='/wishlist' className='text-black'>WishList</Link>
                  </li>
                  <li className='text-center'>
                    <Link className='text-black text-center  px-5 py-3 font-semibold rounded' onClick={handleLogOut}>Log Out</Link>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <><Link to='/login'>
              <button className='text-black border-2 hover:bg-cyan-300 border-cyan-300 px-5 py-3 font-semibold rounded'>Log In</button>
            </Link></>
          )}
          <label htmlFor="dashboard-drawer" className=" btn btn-ghost lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></label>
        </div>
      </div>
    </div>
  );
}
