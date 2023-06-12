import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';

const MyEnrolledClasses = () => {
    const{user} = useAuth();
    const[axiosSecure] = useAxiosSecure();
    const[enrolledClasses, setEnrolledClasses]  =  useState([]);
    console.log(enrolledClasses)

    useEffect(() =>{
        axios.get(`http://localhost:5000/payments?email=${user?.email}`)
        .then(data =>{
            setEnrolledClasses(data.data)
        })
    },[])


    return (
        <div className="overflow-x-auto text-xl">
        <h1 className='text-center text-3xl text-primary mb-8 mt-8'>Your Enrolled Classes</h1>
        <table className="table  w-[700px]">
            {/* head */}
            <thead>
                <tr className='bg-blue-600'>
                    <th className='text-center'>#</th>
                    <th className='text-center'>Name</th>
                    <th className='text-center'>Email</th>
                    <th className='text-center'>Price</th>
                    <th className='text-center'>Date</th>
                </tr>
            </thead>
            <tbody>
                {
                    enrolledClasses.map((item, index) => <tr key={item._id}>
                        <th className='text-center'>{index + 1}</th>
                        <td className='text-center'>{item.customer}</td>
                        <td className='text-center'>{item.email}</td>
                        <td className='text-center'>{item.price}</td>
                        <td className='text-center'>{item.date.slice(0,10)}</td>
                      </tr>)
                }
                  
            </tbody>
        </table>
    </div>
    );
};

export default MyEnrolledClasses;