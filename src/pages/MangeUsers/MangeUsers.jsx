import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet';
import { FaChalkboardTeacher, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';


const MangeUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['allusers'], async () => {
        const res = await axiosSecure.get('/allusers')
        console.log({res})
        return res.data;
    })

    const handleMakeAdmin = user =>{
        fetch(`https://summer-camp-server-beta.vercel.app/users/admin/${user._id}`, {
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
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    const handleMakeInstructor = user => {
        fetch(`https://summer-camp-server-beta.vercel.app/users/instructor/${user._id}`, {
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
                    title: `${user?.name} is an Instructor Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }


    return (
        <div className="manageusers text-center bg-slate-300 rounded p-4">
            <Helmet>
                <title>Sparkle Sports Academy | Manage users</title>
            </Helmet>
            <h3 className="text-3xl font-semibold mb-4">Total Users: {users.length}</h3>
            <div className=" text-xl">
                <table className="table  w-full">
                    {/* head */}
                    <thead className='bg-purple-400'>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Make Instructor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    { user.role === 'admin' ? 'Admin' :
                                     <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-orange-600  text-white"><FaUserShield></FaUserShield></button> 
                                    }
                                </td>
                                <td>
                                   {user.role === 'instructor'? 'Instructor':
                                     <button onClick={() => handleMakeInstructor(user)} className="btn btn-ghost bg-green-400  text-white"><FaChalkboardTeacher></FaChalkboardTeacher></button>
                                   }
                                </td>
                            </tr>)
                        }              
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MangeUsers;