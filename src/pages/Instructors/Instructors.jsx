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
        <section className='flex-column items-center justify-center lg:grid-cols-3 lg:ml-[23px] gap-8 lg:mb-12 mt-32'>
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