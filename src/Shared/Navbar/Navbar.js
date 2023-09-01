import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

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
      {/* <li>
                <Link to='/doctors'>Find A Doctor</Link>
            </li> */}
      <li>
        <Link to='/appointments'>Appointment</Link>
      </li>
      <li>
        <Link to='/shop'>Shop</Link>
      </li>
      <li>
        <Link to='/contact'>Contact Us</Link>
      </li>
      {user?.uid ?
        <>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><button onClick={handleLogOut}>Sign Out</button></li>
        </>
        :
        <li><Link to="/login">Login</Link></li>}
    </React.Fragment>
  )

  return (
    <div className=" dark:bg-gray-900">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={1} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {menuItem}
            </ul>
          </div>
          <Link to='/' className="text-3xl font-bold italic text-gray-800 dark:text-white nav-title">Medwin Cares</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {menuItem}
          </ul>
        </div>
        <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
      </div>
    </div>
  );
}
