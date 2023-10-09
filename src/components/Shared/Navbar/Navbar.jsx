import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../../providers/AuthProvider';
import useAdminSecure from '../../../hooks/UseAdminSecure';

const Navbar = () => {
  const { user, logOut,loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdminSecure();
  if (isAdminLoading) {
    <span className="loading loading-dots loading-lg"></span>
  }
  if (!user) {
    <span className="loading loading-dots loading-lg"></span>
  }
  if (loading) {
    <span className="loading loading-dots loading-lg"></span>
  }
  console.log(isAdmin);

  const handleLogOut = () => {
    logOut()
      .then(result => { })
  }
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">


              <Link className='m-7' to={"/home"}>Home</Link>
              <Link to={"/allJewellery"}>All Jewellery</Link>
              <Link to={"/myJewellery"}>My Jewellery</Link>
              <Link to={"/addJewellery"}>Add Jewellery</Link>
              <Link to={"/blog"}>Blog</Link>
              <Link to={"/register"}>Register</Link>
              {
                user ? <Link onClick={handleLogOut}>logOut</Link> : <Link to={"/login"}>Login</Link>
              }

            </ul>
          </div>
          <Link to={'/'} className="normal-case text-xl ms-3 fw-bold font-sans">BlueStone Jewellarys</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">

            <Link className='hover:text-red-400 px-4 pt-3 text-lg fw-bold text-white' to={"/"}>Home</Link>

            {
              user? <><Link className='hover:text-red-400 px-4 pt-3 text-lg fw-bold text-white' to={"/allJewellery"}>All Jewellery</Link>
              <Link className='hover:text-red-400 px-4 pt-3 text-lg fw-bold text-white' to={"/myJewellery"}>My Jewellery</Link></>:""
            }
            {
              isAdmin && <>
              <Link className='hover:text-red-400 px-4 pt-3 text-lg fw-bold text-white' to={"/addJewellery"}>Add Jewellery</Link>
              <Link className='hover:text-red-400 px-4 pt-3 text-lg fw-bold text-white' to={"/manage-user"}>Manage User</Link>
              </>
            }

            {
              user ? "" : <Link className='hover:text-red-400 px-4 pt-3 text-lg fw-bold text-white' to={"/register"}>Register</Link>
            }
            {
              user ? "" : <Link className='px-4 pt-3 text-lg fw-bold text-white' to={"/login"}>Login</Link>
            }


          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            {
              user ? <>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </label>
              </> : ""
            }
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li>
                {
                  user ? <Link className='text-lg fw-bold text-white' onClick={handleLogOut}>LogOut</Link> : ""
                }
                <Link className='hover:text-red-400 px-4 pt-3 text-lg fw-bold text-white' to={"/blog"}>Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;