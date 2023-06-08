import React, { useContext, useEffect, useState } from 'react';
// const axios = require('axios');
import axios from 'axios';
import { AuthContext } from '../../providers/AuthProvider';
import useBooked from '../../hooks/useBooked';
import Swal from 'sweetalert2';

const Classes = () => {
  const{user} = useContext(AuthContext)
  const[,refetch] = useBooked();
    const[classes, setClasses]  =  useState([]);
    useEffect( () =>{
        axios.get('http://localhost:5000/classes')
        .then(res => setClasses(res.data))
        .catch(err =>{
            console.log(err)
        })
    },[])
    // console.log(classes)

    const handleAddToCart = claass => {
      console.log(claass);
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
                  refetch(); // refetch cart to update the number of items in the cart
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
        <div className='flex'>
          {
            classes.map(claass =>
             < >
              <div key={claass._id} className=' border-2 border-red-400  w-64 m-12 p-12'>
                  <h1>{claass.name}</h1>
                  <h3>{claass.instructor}</h3>
                  <button onClick={() => handleAddToCart(claass)} className='btn btn-primary'>Select</button>
              </div> 
            </>)
          }
        </div>
    );
};

export default Classes;