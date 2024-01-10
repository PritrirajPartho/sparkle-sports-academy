import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from 'react-helmet';


const AddClass = () => {
    const[axiosSecure] = useAxiosSecure();
    const{user} = useAuth();
    const handleAddClass = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const instructor = form.instructor.value;
        const email = form.email.value;
        const price = form.price.value;
        const seat = form.seat.value;
        const Claass = {
            name: name, 
            img: photo, 
            instructor: instructor,
            email: email, 
            price: parseFloat(price),
            seat: parseInt(seat),
            status: "pending"
        }
        // =============================================================
        axiosSecure.post('/classes',  Claass)
        .then(data =>{
            if(data.data.insertedId){
                form.reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Class added successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })

    }

    
    return (
        <div className='addaclass border-2 border-red-500 bg-red-200 p-8 rounded-xl'>
                <Helmet>
                    <title>Sparkle Sports Academy | Add a Class</title>
                </Helmet>
            <h2 className='text-center font-bold text-black-2 text-3xl mt-5 mb-8  border-b-2 border-black'>Add a Class</h2>
            <form onSubmit={handleAddClass}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder='Enter Class name' name="name" className="input input-bordered px-20" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder='Photo url' name="photo" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Instructor Name</span>
                            </label>
                            <input type="text" name="instructor" defaultValue={user?.displayName} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Price</span>
                            </label>
                            <input type="text" name='price' placeholder='class price' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Available Seats</span>
                            </label>
                            <input type="text" name='seat' placeholder='Enter  available seats' className="input input-bordered" />
                        </div>
                </div>
                <div className="form-control mt-8">
                    <input className="btn bg-[#3887BE] btn-block mb-10" type="submit" value="Add A Class" />
                </div>
            </form>
        </div>
    );
};

export default AddClass;