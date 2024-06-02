import React from 'react';
import { Helmet } from "react-helmet";
import { FaBackward, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useBooked from '../../../hooks/useBooked';


const MySelectedClass = () => {
    const[booked, refetch] = useBooked();
    // const [cart, refetch] = useCart();
    console.log(booked);
    // how does reduce work!!!
    const total = booked.reduce((sum, item) => item.price + sum, 0);

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://summer-camp-server-beta.vercel.app/booked/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className='bg-slate-300 w-full h-[100%] text-center px-8 pt-24'>
            <Helmet>
                <title>Sparkle | My Selected Classes</title>
            </Helmet>
            {
               booked.length?
               <>
                <h1 className='mb-6 mt-6 text-3xl font-bold text-[#164BF7]'>Your Total Selected Class:{booked.length}</h1>
               <div className="overflow-x-auto w-full text-xl bg-slate-300">
                   <table className="table w-full">
                       {/* head */}
                       <thead className='text-center text-lg font0-bold text-black-2'>
                           <tr>
                               <th>Serial</th>
                               <th>Class Name</th>
                               <th>Price</th>
                               <th>Action</th>
                               <th>Pay</th>
                           </tr>
                       </thead>
                       <tbody className='text-center'>
                           {
                               booked.map((item, index) => <tr
                                   key={item._id}
                               >
                                   <td>
                                       {index + 1}
                                   </td>
                                   <td>
                                       {item.name}
                                   </td>
                                   <td>{item.price}</td>
                                   <td>
                                       <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                                   </td>
                                   <td>
                                       <Link to={'/dashboard/payment'} state={item}><button className='btn btn-success'>Pay</button></Link>
                                   </td>
                               </tr>)
                           }
                       </tbody>
                   </table>
               </div>
               </>
               :
               <div >
                  <h1 className='mt-8 text-2xl text-red-500 text-center'>Please select a course</h1>
                  <p className='text-center mt-4'>When you select a class or course. you can see more options to work.</p>
                  <Link to={'/classes'}>
                        <button className='btn mx-auto mt-8 border-none text-white bg-gradient-to-r from-[#164BF7] to-[#1692F7]'><FaBackward></FaBackward>See all Classes</button>
                  </Link>
               </div>
            }
        </div>
    );
};

export default MySelectedClass;