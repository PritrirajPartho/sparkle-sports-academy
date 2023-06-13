import React, { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import Modal from 'react-modal';


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };



const ManageClasses = () => {
    const[disable, setDisable] = useState(true)
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes')
        return res.data.outQueryResult;
    })
    // console.log(classes);
    
    const handleApprove = claass =>{
        fetch(`https://summer-camp-server-beta.vercel.app/classes/approve/${claass._id}`, {
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
        fetch(`https://summer-camp-server-beta.vercel.app/classes/deny/${claass._id}`, {
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


    const handleFeedback = event =>{
        // fetch(`https://summer-camp-server-beta.vercel.app/classes/feedback/${claass._id}`, {
        //     method: 'PATCH',

        // })
        const value = event;
        console.log(value)
        // axiosSecure.patch(`https://summer-camp-server-beta.vercel.app/classes/feedback/${claass._id}`, )
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `Feedback add Successfully`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

//---------------------------------------
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
    setIsOpen(true);
    }

    function closeModal() {
    setIsOpen(false);
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
                             <div className='w-full'>
                                    <button onClick={openModal} className='btn btn-primary'>Feedback</button>
                                    <Modal
                                        isOpen={modalIsOpen}
                                        onRequestClose={closeModal}
                                        style={customStyles}
                                        contentLabel="Example Modal"
                                    >   <button className='text-2xl font-bold mb-2 bg-red-500 px-4 rounded' onClick={closeModal}>X</button>
                                        <div className='mb-3'>Give FeedBack as a admin</div>
                                        <form onSubmit={handleFeedback}>
                                            <textarea placeholder="Give feedback as a powerful admin" name='feedback' className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
                                            <button className='btn btn-primary mt-2'>Submit</button>
                                        </form>
                                    </Modal>
                                    </div>
                             </td>
                        </tr>)
                    }              
                </tbody>
            </table>
      </div>
    );
};

export default ManageClasses;