import { AiFillHome, AiFillShopping } from "react-icons/ai";
import { FaBlog, FaUser } from "react-icons/fa";
import { BsBuildingFillAdd, BsFillCartFill } from "react-icons/bs";
import { GiTeacher } from "react-icons/gi";
import { IoMdLogIn } from "react-icons/io";
import { MdDraw,MdPayment, MdReviews } from "react-icons/md";
import { SiGnuprivacyguard} from "react-icons/si";
import { NavLink, useLocation } from "react-router-dom";

import { useState } from "react";
import User from "./User/User";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";
import logo from "../../../../public/favicon.png"


const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const [isAdmin] = useAdmin();
  console.log(isAdmin);
  const[isInstructor] = useInstructor();
  console.log(isInstructor)
  const location = useLocation();
  const { pathname } = location;
  const [isOpen, setOpen] = useState(false);
  return (
    <aside
      className={`bg-[#1692F7] absolute left-0 top-0 z-10 flex h-screen w-72 flex-col overflow-y-hidden 
     shadow-lg duration-300 ease-linear  lg:static lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="sidebar flex items-center justify-between gap-2 px-6 py-6 lg:py-6 ms-6 mb-1">
        <NavLink to="/dashboard">
          <div className="flex items-center gap-4 w-100 sm:p-0">
            <img className="w-10" src={logo} alt="Logo" />
            <span className="text-xs font-bold sm:text-[14px] text-black-2 w-full sm:ml-0">Sparkle Sports Academy</span>
          </div>
        </NavLink>

        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}
      {/* I use a user components */}
      <div>
        <User></User>
      </div>
      <div className="sidebar-head ">
        {/* <!-- Sidebar Menu --> */}
        <nav className="sidebar sidebar-nav">
          <h3 className="mb-4 ml-4 text-sm font-semibold text-black-2 border-b-2 border-s-black-2">
            MENU
          </h3>
          {/* <!-- Menu Group --> */}
          <div>
            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Dashboard submenu All--> */}
              {
                isAdmin ? <>
                  {/* <!-- Admin Home --> */}
                  <li>
                    <NavLink
                      to="/dashboard/adminhome"
                      className={`sidebar-menu-item ${pathname.includes("adminhome") &&
                        "bg-slate-300 dark:bg-meta-4"
                        }`}
                    >
                      <AiFillHome className="w-5 h-5" />
                      Admin Home
                    </NavLink>
                  </li>
                  {/* <!-- Admin Home --> */}
                  {/* <!-- Manage Users --> */}
                  <li>
                    <NavLink
                      to="/dashboard/manageusers"
                      className={`sidebar-menu-item ${pathname.includes("manageusers") && "bg-slate-300 dark:bg-meta-4"
                        }`}
                    >
                      <MdReviews className="w-5 h-5" />
                      Manage Users
                    </NavLink>
                  </li>
                  {/* <!--Manage Classes --> */}
                  <li>
                    <NavLink
                      to="/dashboard/manageclasses"
                      className={`sidebar-menu-item ${pathname.includes("managecourses") && "bg-slate-300 dark:bg-meta-4"
                        }`}
                    >
                      <MdReviews className="w-5 h-5" />
                      Manage Classes
                    </NavLink>
                  </li>
                </>
                  :
                  <>
                    {
                      isInstructor?
                        <>
                          {/* <!-- My Booking --> */}
                          <li>
                            <NavLink
                              to="/dashboard/addaclass"
                              className={`sidebar-menu-item ${pathname.includes("calendar") &&
                                "bg-slate-300 dark:bg-meta-4"
                                }`}
                            >
                              <BsBuildingFillAdd className="w-5 h-5" />
                              Add a Class
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/dashboard/myclasses"
                              className={`sidebar-menu-item ${pathname.includes("insaddcourses") &&
                                "bg-slate-300 dark:bg-meta-4"
                                }`}
                            >      
                              <GiTeacher className="w-5 h-5" />
                              Instructor Classes
                            </NavLink>
                          </li>
                        </>
                        :
                        <>
                          {/* <!-- user home --> */}
                          <li>
                            <NavLink
                              to="/dashboard/userhome"
                              className={`sidebar-menu-item ${pathname.includes("userhome") &&
                                "bg-slate-300 dark:bg-meta-4"
                                }`}
                            >
                              <FaUser className="w-5 h-5" />
                              User Home
                            </NavLink>
                          </li>
                          {/* <!-- user Home --> */}
                          {/* <!-- My Cart --> */}
                            <li>
                            <NavLink
                              to="/dashboard/mycart"
                              className={`sidebar-menu-item ${pathname.includes("mycart") && "bg-slate-300 dark:bg-meta-4"
                                }`}
                            >
                              <BsFillCartFill className="w-5 h-5" />
                              My Cart
                            </NavLink>
                          </li>
                          {/* <!-- My Cart --> */}
                          {/* <!-- Payment History --> */}
                          <li>
                            <NavLink
                              to="/dashboard/payment"
                              className={`sidebar-menu-item ${pathname.includes("payment") &&
                                "bg-slate-300 dark:bg-meta-4"
                                }`}
                            >
                              <MdPayment className="w-5 h-5" />
                              Payment
                            </NavLink>
                          </li>
                          {/* <!-- Payment History --> */}
                          {/* <!-- Payment History --> */}
                          <li>
                            <NavLink
                              to="/dashboard/payment"
                              className={`sidebar-menu-item ${pathname.includes("payment") &&
                                "bg-slate-300 dark:bg-meta-4"
                                }`}
                            >
                              <MdPayment className="w-5 h-5" />
                              Payment History
                            </NavLink>
                          </li>
                          {/* <!-- Payment History --> */}
                        </>
                    }
                  </>
              }

              {/* <!-- Others Group --> */}
              <div>
                <h3 className="mb-4 ml-4 text-sm font-semibold text-black-2 border-b-2 border-black-2">
                  OTHERS
                </h3>

                <ul className="mb-6 flex flex-col gap-1.5">
                  {/* <!-- Home Item --> */}
                  <li>
                    <NavLink
                      to="/"
                      className={`sidebar-menu-item ${pathname.includes("home") && "bg-slate-300 dark:bg-meta-4"
                        }`}
                    >
                      <AiFillHome className="w-5 h-5" />
                      Home
                    </NavLink>
                  </li>
                  {/* <!-- Home Item --> */}
                  {/* <!--Singup option --> */}
                  <li>
                    <NavLink
                      to="/signup"
                      className={`sidebar-menu-item ${pathname.includes("signup") &&
                        "bg-slate-300 dark:bg-meta-4"
                        }`}
                    >
                      <SiGnuprivacyguard className="w-5 h-5" />
                      Signup
                    </NavLink>
                  </li>
                  {/* <!-- signup --> */}
                  {/* <!-- Contact Item --> */}
                  <li>
                    <NavLink
                      to="/login"
                      className={`sidebar-menu-item ${pathname.includes("contact") &&
                        "bg-slate-300 dark:bg-meta-4"
                        }`}
                    >
                      <IoMdLogIn className="w-5 h-5" />
                      Login
                    </NavLink>
                  </li>
                  {/* <!-- Contact Item --> */}
                </ul>
              </div>
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;