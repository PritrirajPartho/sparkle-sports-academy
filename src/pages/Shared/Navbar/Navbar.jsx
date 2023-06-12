import { useContext } from "react";
import { Link } from "react-router-dom";
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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/instructors">Instructors</Link></li>
            <li><Link to="/classes">Classes</Link></li>
            <li><Link to="/signup">Signup</Link></li>
        </div>
        {/* <li>
            <button className="btn">
               <div className="badge badge-secondary">+{booked?.length || 0}</div>
            </button>
        </li> */}
        <div className="mt-1 mr-2">
            {
                isAdmin ? <li><Link to="/dashboard/manageusers">Dashboard</Link></li> : 
                <>
                    {
                        isInstructor ? 
                        <li><Link to="/dashboard/myclasses">Dashboard</Link></li>
                        :
                        <li><Link to="/dashboard/myselectedclasses">Dashboard</Link></li>
                    }
                </>
            }
        </div>
        {
            user ? <>
                <div className="avatar online">
                    <div className="w-12 rounded-full">
                        <img src={user?.photoURL} />
                    </div>
                </div>
                <button onClick={handleLogOut} className="btn btn-ghost ms-2">LogOut</button>
             </>
               :
              <>
                <li className="mt-1"><Link to="/login">Login</Link></li>
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
                        <ul tabIndex={0} className="flex flex-col menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-400 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Sparkle Sports School</a>
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