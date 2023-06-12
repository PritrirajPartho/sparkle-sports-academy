import React, { useContext, useEffect, useState } from 'react';
// const axios = require('axios');
import axios from 'axios';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../providers/AuthProvider';
import useBooked from '../../../hooks/useBooked';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const PopularClasses = () => {
    const{user} = useContext(AuthContext)
    const[classes, setClasses]  =  useState([]);
    const[booked, refetch] = useBooked();
    useEffect( () =>{
        axios.get('http://localhost:5000/classes?status=approved')
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
          fetch('http://localhost:5000/bookeds', {
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

    return (
  <section className='mb-8'>
        <SectionTitle subHeading={'All popular classes or course is here'} heading={'Popular Classes'}></SectionTitle>
        <div className='grid grid-cols-3 mt-16 mb-12 gap-8'>
          {
            classes.map(claass =>
             < >
                <div key={claass._id}   className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                      <img src={claass.img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title text-primary text-2xl">{claass.name}</h2>
                      <h4><span className='mr-2'>Instructor:</span>{claass.instructor}</h4>
                      <h4><span className='mr-2'>Available Seats:</span>{claass.seat}</h4>
                      <h4><span className='mr-2'> Price:</span>${claass.price}</h4>
                      <div className="w-80">
                         <button onClick={() => handleAddToCart(claass)} className='btn btn-primary w-full'>Select</button>
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
 