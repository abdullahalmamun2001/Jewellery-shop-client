import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashHome = () => {
    return (
        <div>

            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <h1>hi</h1>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}

                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                        {/* <li><Link className='hover:text-red-400 px-4 pt-3 text-lg fw-bold text-white' to={"/addJewellery"}>Add Jewellery</Link></li>

                        <li><Link className='hover:text-red-400 px-4 pt-3 text-lg fw-bold text-white' to={"/manage-user"}>Manage User</Link></li> */}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashHome;