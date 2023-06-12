import React, {  useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
// import { useLoaderData } from 'react-router-dom';

const PopularInstructor = () => {
    const[axiosSecure] = useAxiosSecure();
    const[instructors, setInstructors]  =  useState([]);
    // console.log(instructors)

    useEffect(() =>{
        axiosSecure.get('http://localhost:5000/instructors')
        .then(data =>{
            setInstructors(data.data)
        })
    },[])


    return (
  <section className='mt-10'>
        <SectionTitle subHeading={'All our hero instructors---'} heading={'Popular Instructors'}></SectionTitle>
        <section className='grid grid-cols-3 gap-4 my-12 mx-8'>
           {
              instructors.map(instructor =>
              <>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={instructor.img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"><span className='mr-2'>Name:</span>{instructor.name}</h2>
                        <h3><span className='mr-2'>Email:</span>{instructor.email}</h3>
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
