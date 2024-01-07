import React from 'react';
import NavBar from '../pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';

const Root = () => {
    return (
        <div>
             <div className='navbar-n'>
               <NavBar></NavBar>
             </div>
             <div className='outlet-o max-w-screen-xl mx-auto'>
                <Outlet></Outlet>
             </div>
             <div className='footer-f'>
             <  Footer></Footer>
             </div>
        </div>
    );
};

export default Root;