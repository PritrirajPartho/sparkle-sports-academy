import React, {  useEffect, useState } from 'react';
import axios from 'axios';
import useAxiosSecure from '../../hooks/useAxiosSecure';
// import { useLoaderData } from 'react-router-dom';

const Instructors = () => {
    const[axiosSecure] = useAxiosSecure();
    const[instructors, setInstructors]  =  useState([]);
    // console.log(instructors)

    useEffect(() =>{
        axiosSecure.get('https://summer-camp-server-beta.vercel.app/instructors')
        .then(data =>{
            setInstructors(data.data)
        })
    },[])


    return (
        <section className='grid grid-cols-1 sm:grid-cols-3 gap-4 w-11/12 sm:w-100 mx-auto h-full sm:mt-36 sm:mb-8'>
           {
              instructors.map(instructor =>
              <>
                <div className="card w-11/12 mb-8 mx-auto bg-[#e2e8f0] shadow-xl">
                    <figure><img src={instructor.img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"><span className='mr-2'>Name:</span>{instructor.name}</h2>
                        <h3><span className='mr-2 font-bold'>Email:</span>{instructor.email}</h3>
                     </div>
                     <div className="card-actions justify-start ml-8 mb-6">
                         <button className="btn bg-[#4FC0D0]">See Classes</button>
                    </div>
                </div>
              </>
              )
           }
        </section>
    );
};

export default Instructors;