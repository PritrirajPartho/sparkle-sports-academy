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
            <div className="mt-1 flex">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/instructors">Instructors</NavLink></li>
                <li><NavLink to="/classes">Classes</NavLink></li>
                <li><NavLink to="/signup">Signup</NavLink></li>
            </div>
            <div className="mt-1 mr-2">
                {
                    isAdmin? 
                    <li><NavLink to="/dashboard/manageusers">Dashboard</NavLink></li> 
                    : 
                    <>
                        {
                            isInstructor ? 
                            <li><NavLink to="/dashboard/myclasses">Dashboard</NavLink></li>
                            :
                                user?
                                <li><NavLink to="/dashboard/userhome">Dashboard</NavLink></li>
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
                        <div className="w-12 rounded-full">
                            <img src={user?.photoURL} />
                        </div>
                    </div>
                    <button onClick={handleLogOut} className="btn btn-ghost ms-2">LogOut</button>
                </>
                :
                <>
                    <li className="mt-1"><NavLink to="/login">Login</NavLink></li>
                </>
            }
    </>

    return (
        <>
            <div className="navbar bg-primary max-w-screen-xl text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="sm:grid sm:grid-rows-3 menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-400 rounded-box w-[600px]">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Sparkle Sports Academy</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal">
                        {navOptions}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default NavBar;