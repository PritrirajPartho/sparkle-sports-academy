import React from 'react';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const Updateclass = () => {
        const location = useLocation();
        const item  = location.state;
        console.log(item);

    const handleUpdate = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const seat = form.seat.value;
        const img = form.photo.value;
        // console.log(name, price, seat, img)
        const updateClass = {
            name:name,
            price:parseFloat(price),
            seat: parseFloat(seat),
            img:img
        }
        // --------------------------------------------
        // fetch(`https://summer-camp-server-beta.vercel.app/classes/${_id}`, {
        //     method: 'PUT',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(updateClass)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log( data.modifiedCount > 0);
                if (event) {
                        Swal.fire('This Class is Updated Successfully');
                        form.reset();
                }
        //     })
    }


    
    return (
        <div className='w-[900px] mt-8 ms-28 mb-8 border-2 border-blue-600 rounded'>
        <h2 className='text-center text-purple-700  text-3xl mt-10 mb-6'>Update Your Class</h2>
        <form onSubmit={handleUpdate}>
            <div className="  grid grid-cols-1 md:grid-cols-1 gap-6 ms-12 mr-12">
                    <div className="form-control">
                        <label className="label font-bold text-3xl">
                            <span className="label-text ">Class Name</span>
                        </label>
                        <input type="text" placeholder='Update Class name' name="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label font-bold text-3xl">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' placeholder='Update Class price' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label font-bold text-3xl">
                        <span className="label-text">Available Seat</span>
                        </label>
                        <input type="text" name='seat' placeholder='Update avaialable Seats' className="input input-bordered" />
                    </div>
            </div>
            <div className="w-[800px] form-control ms-12 mt-3">
                    <label className="label font-bold text-3xl">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="text" placeholder='Photo url update' name="photo" className="input input-bordered" />
            </div>
            <div className="w-[800px] form-control mt-10 mb-10 ms-12">
                <input  className="btn btn-primary btn-block" type="submit" value="Update Class" />
            </div>
        </form>
    </div>
    );
};

export default Updateclass;