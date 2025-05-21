import React, { use } from 'react';
import { NavLink } from 'react-router';
import AuthContext from '../../Context/AuthContext';

const Header = () => {

    const { user, logOut, userPhoto, userName } = use(AuthContext);
    // console.log(user)

    const handelLogOut = () => {
        logOut();
    }

    return (
        <div>
            <nav>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li><NavLink to='/'>Home</NavLink></li>
                                <li><NavLink to='/add-task'>Add Task</NavLink></li>
                                <li><NavLink to='/browse-task'>Browse Tasks</NavLink></li>
                                <li><NavLink to='/my-posted-task'>My Posted Tasks</NavLink></li>
                            </ul>
                        </div>
                        <img className='w-25' src="https://image.status.io/z6aeO6kAGsAG.png" alt="" />
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/add-task'>Add Task</NavLink></li>
                            <li><NavLink to='/browse-task'>Browse Tasks</NavLink></li>
                            <li><NavLink to='/my-posted-task'>My Posted Tasks</NavLink></li>
                        </ul>
                    </div>
                    <div className="navbar-end gap-3">


                        {
                            user && <>
                                <div className="flex gap-2">
                                    <div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img
                                                    alt="User"
                                                    src={`${userPhoto ? userPhoto : user.photoURL}`} />
                                            </div>
                                        </div>
                                        <ul
                                            tabIndex={0}
                                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                            <li>
                                                <a className="justify-between">
                                                    Profile
                                                    <span className="badge">{user.displayName || userName}</span>
                                                </a>
                                            </li>
                                            <li>
                                                <p>{user.email}</p>
                                            </li>
                                            <li className='btn' onClick={handelLogOut}>Logout</li>
                                        </ul>
                                    </div>
                                </div>
                            </>
                        }

                        {
                            user ? '' : <>
                                <NavLink to='/auth/login' className="">Log in</NavLink>
                                <NavLink to='/auth/sign-up' className="btn font-normal bg-green-600 border-0 rounded-xl text-white">Sign Up</NavLink>
                            </>
                        }

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;