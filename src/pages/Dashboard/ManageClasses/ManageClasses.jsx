import React, { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const ManageClasses = () => {
    const[disable, setDisable] = useState(true)
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes')
        return res.data.outQueryResult;
    })
    // console.log(classes);
    
    const handleApprove = claass =>{
        fetch(`http://localhost:5000/classes/approve/${claass._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `Approved`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    const handleDeny = claass => {
        fetch(`http://localhost:5000/classes/deny/${claass._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `Class Denied`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    const showModal = modal =>{
      console.log(modal)
    }

    return (
       <div className="overflow-x-auto ms-32 float-right">
            <table className="table  w-full">
                {/* head */}
                <thead className='text-center text-xl bg-blue-600 text-white'>
                    <tr>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Instructor</th>
                        <th>Available Seats</th>
                        <th>Status</th>
                        <th>Approve</th>
                        <th>Deny</th>
                        <th>Feedback</th>
                    </tr>
                </thead>
                <tbody className='text-center text-lg'>
                    {
                        classes.map((claass, index) => <tr key={claass._id}>
                            <td>
                                <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={claass.img} alt="Avatar Tailwind CSS Component" />
                                </div>
                                </div>
                            </td>
                            <td>{claass.name}</td>
                            <td>{claass.instructor}</td>
                            <td>{claass.seat}</td>
                            <td>{claass.status}</td>

                            <td>
                                <button onClick={() =>  handleApprove(claass)} className="btn btn-sm  text-sm bg-green-400  text-white">Approve</button> 
                            </td>
                            <td>
                                <button onClick={() =>  handleDeny(claass)} className="btn btn-sm  text-sm bg-orange-600  text-white">Deny</button>
                            </td> 
                            <td>
                                {/* Open the modal using ID.showModal() method */}
                                    <button className="btn btn-sm text-sm  bg-primary  text-white" onClick={()=>window.my_modal_1.showModal()}>open modal</button>
                                    <dialog id="my_modal_1" className="modal">
                                    <form method="dialog" className="modal-box">
                                        <h3 className="font-bold text-lg">Hello!</h3>
                                        <p className="py-4">Press ESC key or click the button below to close</p>
                                        <div className="modal-action">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn">Close</button>
                                        </div>
                                    </form>
                                    </dialog>
                             </td>
                        </tr>)
                    }              
                </tbody>
            </table>
      </div>
    );
};

export default ManageClasses;