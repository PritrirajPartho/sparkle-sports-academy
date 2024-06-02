import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import useBooked from "../../../hooks/useBooked";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";

const NavBar = () => {
    const[booked] = useBooked();
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const[isInstructor] = useInstructor();


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navOptions = <>
            <div className="mt-1 flex flex-col sm:flex sm:flex-row sm:text-lg">
                <li className="mx-auto sm:mr-4"><NavLink to="/">Home</NavLink></li>
                <li className="mx-auto sm:mr-4"><NavLink to="/instructors">Instructors</NavLink></li>
                <li className="mx-auto sm:mr-4"><NavLink to="/classes">Classes</NavLink></li>
                {/* <li><NavLink to="/signup">Signup</NavLink></li> */}
            </div>
            <div className="sm:mt-2 mr-2">
                {
                    isAdmin? 
                        <li className="sm:text-lg mx-auto mr-2"><NavLink to="/dashboard/manageusers">Dashboard</NavLink></li> 
                    : 
                    <>
                        {
                            isInstructor ? 
                            <li className="sm:text-lg mx-auto mr-2"><NavLink to="/dashboard/myclasses">Dashboard</NavLink></li>
                            :
                                user?
                                <li className="sm:text-lg mx-auto mr-2"><NavLink to="/dashboard/mycart">Dashboard</NavLink></li>
                                :
                                ''
                        }
                    </>
                }
            </div>
            {
                user ?
                <>
                    <div className="avatar online">
                        <div className="w-14 rounded-full ms-6 mr-0 sm:m-0">
                            <img src={user?.photoURL} />
                        </div>
                    </div>
                    <li onClick={handleLogOut} className="custom-li sm:text-lg  font-bold ml-4 sm:mr-6 sm:mx-0 text-center sm:ml-4 mt-2 sm:mt-3 mb-2 px-2 rounded-md  hover:bg-red-500 hover:text-white">Logout</li>
                </>
                :
                <>
                    <li className="mt-1 sm:text-lg mx-auto text-center"><NavLink to="/login">Login</NavLink></li>
                </>
            }
    </>

    return (
        <>
            <div className="navbar font-bold bg-[#16D9F7] text-dark">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" menu menu-compact dropdown-content mt-3 py-6 px-12 bg-slate-400 rounded-box w-100 sm:flex sm: flex-row sm:justify-between">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl sm:text-3xl font-bold font-mono">Sparkle Sports Academy</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal sm:flex sm:flex-row sm:justify-between">
                        {navOptions}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default NavBar;