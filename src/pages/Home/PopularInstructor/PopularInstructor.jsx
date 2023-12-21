import React, {  useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
// import { useLoaderData } from 'react-router-dom';

const PopularInstructor = () => {
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
  <section className='mt-10'>
        <SectionTitle subHeading={'All our Hero instructors.....'} heading={'Popular Instructors'}></SectionTitle>
        <section className='grid sm:grid-cols-1 sm:mr-2 lg:grid-cols-3 gap-4 my-12 mx-8'>
           {
              instructors.map(instructor =>
              <>
                <div key={instructor.id} className="card w-96 bg-[#e2e8f0] shadow-xl">
                    <figure><img src={instructor.img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"><span className='mr-2'>Name:</span>{instructor.name}</h2>
                        <h3><span className='mr-2 font-bold'>Email:</span>{instructor.email}</h3>
                     </div>
                     <div className="card-actions justify-start ml-8 mb-6">
                         <button className="btn btn-primary">See Classes</button>
                    </div>
                </div>
              </>
              )
           }
        </section>
  </section>
    );
};

export default PopularInstructor;
