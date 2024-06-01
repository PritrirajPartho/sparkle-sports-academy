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
  <section className='mt-10 popular-instructors'>
        <SectionTitle subHeading={'All our Hero instructors.....'} heading={'Popular Instructors'}></SectionTitle>
        <section className='grid grid-cols-1 sm:grid-cols-3 gap-4 w-11/12 sm:w-100 mx-auto'>
           {
              instructors.map(instructor =>
              <>
                <div key={instructor.id} className="card w-11/12 mb-8 mx-auto bg-[#e2e8f0] shadow-xl">
                    <figure className='px-10 pt-10 '><img src={instructor.img} alt="Shoes" className='rounded-xl border-2 border-[#164BF7]' /></figure>
                    <div className="card-body mx-auto">
                        <h2 className="card-title"><span className='mr-2'>Name:</span>{instructor.name}</h2>
                        <h3><span className='mr-2 font-bold'>Email:</span>{instructor.email}</h3>
                     </div>
                     <div className="w-80 mx-auto mb-8">
                         <button className='btn bg-[#1692F7] w-full'>See Classes</button>
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
