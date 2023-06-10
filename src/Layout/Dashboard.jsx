import React from 'react';
import { FaBook, FaCalendarAlt, FaElementor, FaHome, FaShoppingCart, FaUserAlt, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    console.log(isAdmin);
    const[isInstructor] = useInstructor();
    console.log(isInstructor)
    return (
        <div>
        <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center ">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>
                </div> 
                <div className="drawer-side -ml-40">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">

                    {
                            isAdmin ? <>
                                <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome> Admin Home</NavLink></li>
                                <li><NavLink to="/dashboard/addItem"> <FaUtensils></FaUtensils> Add an Item</NavLink></li>
                                <li><NavLink to="/dashboard/manageitems"><FaWallet></FaWallet> Manage Items</NavLink></li>
                                <li><NavLink to="/"><FaBook></FaBook> Manage Bookings(not implemented)</NavLink></li>
                                <li><NavLink to="/dashboard/manageusers"><FaUsers></FaUsers> Manage Users</NavLink></li>
                                
                            </>
                             : 
                             <>
                              {
                                isInstructor?
                                <>
                                    <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome> Instructor Home</NavLink></li>
                                    <li><NavLink to="/dashboard/addItem"> <FaUtensils></FaUtensils> Add an Item</NavLink></li>
                                    <li><NavLink to="/dashboard/manageitems"><FaWallet></FaWallet> Manage Items</NavLink></li>
                                    <li><NavLink to="/"><FaBook></FaBook> Manage Class By Ins</NavLink></li>
                                    <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li>
                                </>
                                :
                                <>
                                    <li><NavLink to="/dashboard/userhome"><FaHome></FaHome> User Home</NavLink></li>
                                    <li><NavLink to="/"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
                                    <li><NavLink to="/"><FaWallet></FaWallet> Payment History</NavLink></li>
                                    <li>
                                        <NavLink to="/dashboard/myclasses"><FaShoppingCart></FaShoppingCart>My Selected Classes</NavLink>
                                    </li>
                                </>
                               }
                            </>
                        }

                        <div className="divider"></div>
                        <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                        <li><NavLink to="/classes"><FaElementor></FaElementor>Classes</NavLink></li>
                        <li><NavLink to="/signup"><FaUserAlt></FaUserAlt>Sign up</NavLink></li>
                  </ul>
                </div>
                </div>
        </div>
    );
};

export default Dashboard;