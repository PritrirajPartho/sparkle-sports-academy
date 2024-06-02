import React, { useContext, useEffect, useState } from 'react';
// const axios = require('axios');
import axios from 'axios';
import Swal from 'sweetalert2';
import { useSpring, animated } from '@react-spring/web'
import { AuthContext } from '../../../providers/AuthProvider';
import useBooked from '../../../hooks/useBooked';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const PopularClasses = () => {
    const{user} = useContext(AuthContext)
    const[classes, setClasses]  =  useState([]);
    const[booked, refetch] = useBooked();
    useEffect( () =>{
        axios.get('https://summer-camp-server-beta.vercel.app/classes?status=approved')
        .then(res => {
            setClasses(res.data.outQueryResult)
            console.log(res.data.outQueryResult)
        })
        .catch(err =>{
            console.log(err)
        })
    },[])
    // console.log(classes)
    // TODO: SELECT BTN AND BACKGROUND RED WORK

    const handleAddToCart = claass => {
      if(user && user.email){
          const bookedItem = {itemId: claass._id, name: claass.name, img: claass.img, price: claass.price, email: user.email}
          fetch('https://summer-camp-server-beta.vercel.app/bookeds', {
              method: 'POST',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(bookedItem)
          })
          .then(res => res.json())
          .then(data => {
              if(data.insertedId){
                  refetch(); 
                  Swal.fire({
                      position: 'top-end',
                      icon: 'success',
                      title: 'Class added to your  cart succesfully.',
                      showConfirmButton: false,
                      timer: 1500
                    })
              }
          })
      }
    }


    const springs = useSpring({
      from: { x: 0 },
      to: { x: 100 },
    })

    return (
  <section className='mb-8 popular-classes sm:w-[100%]'>
        <SectionTitle subHeading={'All Popular Classes or Courses is here.....'} heading={'Popular Courses'}></SectionTitle>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 w-11/12 sm:w-100 mx-auto'>
          {
            classes.map(claass =>
             < >
                <div key={claass._id}   className="card w-11/12 sm:12/12 mb-8 mx-auto bg-[#e2e8f0] shadow-xl">
                    <figure className="px-10 pt-10">
                      <img src={claass.img} alt="Shoes" className="rounded-xl border-2 border-[#164BF7]" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title text-[#164BF7] text-2xl">{claass.name}</h2>
                      <h4><span className='mr-2 font-bold'>Instructor:</span>{claass.instructor}</h4>
                      <h4><span className='mr-2 font-bold'>Available Seats:</span>{claass.seat}</h4>
                      <h4><span className='mr-2 font-bold'> Price:</span>${claass.price}</h4>
                      <div className="w-full sm:w-80">
                         <button onClick={() => handleAddToCart(claass)} className='btn bg-[#1692F7] w-full'>Select</button>
                      </div>
                    </div>
                 </div>
             </>
            )
          }
        </div>
  </section>
    );
};

export default PopularClasses;
 