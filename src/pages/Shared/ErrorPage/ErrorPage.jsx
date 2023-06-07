import React from 'react';
import './ErrorPage.css';
import { FaBackward } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="error w-full">
            <Link to={'/'}>
                <button className='btn ms-12 mt-8  bg-gradient-to-r from-purple-500 to-pink-500'><FaBackward></FaBackward>Go Back</button>
            </Link>
        </div>
    );
};

export default ErrorPage;