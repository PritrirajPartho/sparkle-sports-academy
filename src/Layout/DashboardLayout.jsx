// import { useState } from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Dashboard/Sidebar/Sidebar";
import DashboardHeader from "../pages/Dashboard/DashboardHeader/DashboardHeader";
// import Sidebar from "../Dashboard/Sidebar/Sidebar";
import React from 'react';
import { FaAddressCard, FaAdjust, FaAdn, FaBook, FaBookReader, FaBox, FaCalendarAlt, FaElementor, FaHome, FaShoppingCart, FaUserAlt, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
// import { NavLink, Outlet } from 'react-router-dom';
// import useAdmin from '../hooks/useAdmin';
// import useInstructor from '../hooks/useInstructor"ty ailam sagore';

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className=" text-black dark:bg-boxDark-2 dark:text-bodyDark">
        {/* <!-- ===== Page Wrapper Start ===== --> */}
        <div className="flex h-screen overflow-hidden">
          {/* <!-- ===== Sidebar Start ===== --> */}
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {/* <!-- ===== Sidebar End ===== --> */}

          {/* <!-- ===== Content Area Start ===== --> */}
          <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            {/* <!-- ===== Header Start ===== --> */}
            <DashboardHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            {/* <!-- ===== Header End ===== --> */}

            {/* <!-- ===== Mffain Content Start ===== --> */}
            <main>
              <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                <Outlet />
              </div>
            </main>
            {/* <!-- ===== Main Content End ===== --> */}
          </div>
          {/* <!-- ===== Content Area End ===== --> */}
        </div>
        {/* <!-- ===== Page Wrapper Endddddddd ===== ddddd--> */}
      </div>
    </>
  );
};

export default DashboardLayout;
