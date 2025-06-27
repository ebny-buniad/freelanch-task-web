import React from 'react';
import { NavLink, Outlet } from 'react-router';

const DashboardLayout = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="drawer-toggle" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="w-full p-4 bg-base-100 shadow-md lg:hidden">
                    <label htmlFor="drawer-toggle" className="btn btn-primary drawer-button">
                        ☰
                    </label>
                </div>
                <div className="p-6">
                    <Outlet></Outlet>
                </div>
            </div>

            <div className="drawer-side">
                <label htmlFor="drawer-toggle" className="drawer-overlay"></label>
                <ul className="menu p-4 w-64 min-h-full bg-base-200 text-base-content">
                    <li><NavLink to=''>Dashboard</NavLink></li>
                    <li><NavLink to='my-account'>My Account</NavLink></li>
                    <li><NavLink to='add-task'>Add Task</NavLink></li>
                    <li><NavLink to='my-posted-task'>My Posted Tasks</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardLayout;