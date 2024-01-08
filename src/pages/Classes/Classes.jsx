import React, { useContext, useEffect, useState } from 'react';
// const axios = require('axios');
import axios from 'axios';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import useBooked from '../../hooks/useBooked';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Classes = () => {
    const{user} = useContext(AuthContext)
    const[classes, setClasses]  =  useState([]);
    const[booked, refetch] = useBooked();
    const[axiosSecure] = useAxiosSecure();

    useEffect( () =>{
        axios.get('https://summer-camp-server-beta.vercel.app/classes?status=approved')
        .then(res => setClasses(res.data.result))
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

    return (
        <div className='classes grid grid-cols-3 mt-16 mb-12 gap-8'>
          {
            classes.map(claass =>
             < >
                <div key={claass._id}   className="card w-96 bg-[#e2e8f0] shadow-xl">
                    <figure className="px-10 pt-10">
                      <img src={claass.img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title text-primary text-2xl">{claass.name}</h2>
                      <h4><span className='mr-2 font-bold'>Instructor:</span>{claass.instructor}</h4>
                      <h4><span className='mr-2 font-bold'>Available Seats:</span>{claass.seat}</h4>
                      <h4><span className='mr-2 font-bold'> Price:</span>${claass.price}</h4>
                      <div className="w-80">
                         <button onClick={() => handleAddToCart(claass)} className='btn bg-[#4FC0D0] w-full'>Select</button>
                      </div>
                    </div>
                 </div>
             </>
            )
          }
        </div>
    );
};

export default Classes;