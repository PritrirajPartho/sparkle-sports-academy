import React from 'react';
import { FaAddressCard, FaAdjust, FaAdn, FaBook, FaBookReader, FaBox, FaCalendarAlt, FaElementor, FaHome, FaShoppingCart, FaUserAlt, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
// import useAdmin from '../hooks/useAdmin';
// import useInstructor from '../hooks/useInstructor';

const Dashboard = () => {
    // const [isAdmin] = useAdmin();
    // console.log(isAdmin);
    // const[isInstructor] = useInstructor();
    // console.log(isInstructor)
    const isAdmin = false;
    const isInstructor = true;
    // const user = true;
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
                    <ul className="menu p-4 w-80 h-full bg-[#e879f9] text-base-content">
            {
                isAdmin && 
                <>
                                <li><NavLink to="/"><FaHome></FaHome> Admin Home</NavLink></li>
                                <li><NavLink to="/dashboard/manageclasses"><FaAddressCard></FaAddressCard> Manage Courses</NavLink></li>
                                <li><NavLink to="/dashboard/manageusers"><FaUsers></FaUsers> Manage Users</NavLink></li>            
                </>
                }
                { isInstructor && 
                <>
                                    <li><NavLink to="/instructors"><FaHome></FaHome> Instructor Home</NavLink></li>
                                    <li><NavLink to="/dashboard/addcourses"> <FaAdn></FaAdn> Add A Course</NavLink></li>
                                    <li><NavLink to="/"><FaBook></FaBook> Manage Course</NavLink></li>
                                    <li><NavLink to="/dashboard/myclasses"> <FaBox></FaBox> My Courses</NavLink></li>
                </>
                }
                {/* {!isInstructor && 
                <>
                                    <li><NavLink to="/dashboard/userhome"><FaHome></FaHome> User Home</NavLink></li>
                                    <li><NavLink to="/dashboard/myenrolledclasses"><FaBookReader></FaBookReader> My Enrolled Courses</NavLink></li>
                                    <li><NavLink to="/dashboard/paymenthistory"><FaWallet></FaWallet> Payment History</NavLink></li>
                                    <li>
                                        <NavLink to="/dashboard/myselectedclasses"><FaShoppingCart></FaShoppingCart>My Selected Course</NavLink>
                                    </li>
                </>
                } */}

                    {/* {
                            isAdmin ? <>
                                <li><NavLink to="/"><FaHome></FaHome> Admin Home</NavLink></li>
                                <li><NavLink to="/dashboard/manageclasses"><FaAddressCard></FaAddressCard> Manage Courses</NavLink></li>
                                <li><NavLink to="/dashboard/manageusers"><FaUsers></FaUsers> Manage Users</NavLink></li>            
                            </>
                             : 
                             <>
                              {
                                isInstructor?
                                <>
                                    <li><NavLink to="/instructors"><FaHome></FaHome> Instructor Home</NavLink></li>
                                    <li><NavLink to="/dashboard/addcourses"> <FaAdn></FaAdn> Add A Course</NavLink></li>
                                    <li><NavLink to="/"><FaBook></FaBook> Manage Course</NavLink></li>
                                    <li><NavLink to="/dashboard/myclasses"> <FaBox></FaBox> My Courses</NavLink></li>
                                </>
                                :
                                <>
                                    <li><NavLink to="/dashboard/userhome"><FaHome></FaHome> User Home</NavLink></li>
                                    <li><NavLink to="/dashboard/myenrolledclasses"><FaBookReader></FaBookReader> My Enrolled Courses</NavLink></li>
                                    <li><NavLink to="/dashboard/paymenthistory"><FaWallet></FaWallet> Payment History</NavLink></li>
                                    <li>
                                        <NavLink to="/dashboard/myselectedclasses"><FaShoppingCart></FaShoppingCart>My Selected Course</NavLink>
                                    </li>
                                </>
                               }
                            </>
                        } */}

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