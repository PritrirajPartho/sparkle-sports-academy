import React from "react";
import useBooked from "../../../hooks/useBooked";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

const MyClasses = () => {
// TODO: MORE WORK DATA CAN NOT FOUND
  const [booked, refetch] = useBooked();
  console.log(booked);
  const total = booked.reduce((sum, item) => item.price + sum, 0);
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/booked/${booked._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="w-full">
    <Helmet>
        <title>sparkle </title>
    </Helmet>
    <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
        <h3 className="text-3xl">Total Items: </h3>
        <h3 className="text-3xl">Total Price: ${total}</h3>
        <Link to="/dashboard/payment">
            <button className="btn btn-warning btn-sm">PAY</button>
        </Link>
    </div>
    <div className="overflow-x-auto w-full">
        <table className="table w-full">
            {/* head */}
            <thead>
                <tr>
                    <th>#</th>
                    <th>Class</th>
                    <th>Item Name</th>
                    <th>Price</th>
                    <th>Action</th>
                    <th>pay</th>
                </tr>
            </thead>
            <tbody>
                {
                    booked.map((item, index) => <tr
                        key={item._id}
                    >
                        <td>
                            {index + 1}
                        </td>
                        <td>
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                        </td>
                        <td>
                            {item.name}
                        </td>
                        <td className="text-end">${item.price}</td>
                        <td>
                            <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                        </td>
                    </tr>)
                }

            </tbody>
        </table>
    </div>
</div>
  );
};

export default MyClasses;
