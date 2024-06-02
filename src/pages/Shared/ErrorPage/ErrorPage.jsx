import React from 'react';
import './ErrorPage.css';
import { FaBackward } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="error w-full">
            <Link to={'/'}>
                <button className='btn ms-12 mt-8  border-none bg-gradient-to-r from-purple-500 to-pink-500 text-white'><FaBackward></FaBackward>Go Home</button>
            </Link>
            <Link to={'/dashboard'}>
                <button className='btn ms-12 mt-8 border-none text-white bg-gradient-to-r from-[#164BF7] to-[#1692F7]'><FaBackward></FaBackward>Go Back</button>
            </Link>
        </div>
    );
};

export default ErrorPage;