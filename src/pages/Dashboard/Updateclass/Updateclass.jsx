import React from 'react';

const Updateclass = () => {
    return (
        <div className='w-[900px]'>
        <h2 className='text-center text-purple-700  text-3xl mt-10 mb-6'>Update Your Class</h2>
        <form >
            <div className="  grid grid-cols-1 md:grid-cols-2 gap-6 ms-12 mr-12">
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
            <div className="w-full form-control ms-8 mt-3">
                    <label className="label font-bold text-3xl">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="text" placeholder='Photo url update' name="photo" className="input input-bordered" />
            </div>
            <div className=" w-28 form-control mt-10 mb-10 ms-12">
                <input  className="btn btn-primary btn-block" type="submit" value="Update Class" />
            </div>
        </form>
    </div>
    );
};

export default Updateclass;