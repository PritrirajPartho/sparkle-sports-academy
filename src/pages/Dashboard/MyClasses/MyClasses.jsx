import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import useInstructorClasses from "../../../hooks/useInstructorClasses";

const MyClasses = () => {

  const [classes, refetch] = useInstructorClasses();
  console.log(classes);
  const total = classes.reduce((sum, item) => item.price + sum, 0);

  return (
    <div className="w-full mt-6">
    <Helmet>
        <title>sparkle </title>
    </Helmet>
    <h1 className="text-center text-2xl text-primary mb-6">Total Added your Class or Course:{classes.length}</h1>
    <div className="overflow-x-auto w-full ">
        <table className="table w-full ms-8 mr-0">
            {/* head */}
            <thead>
                <tr className="text-xl font-bold">
                    <th>Serial</th>
                    <th>Class Name</th>
                    <th>Price</th>
                    <th className="text-center">Available Seats</th>
                    <th>Status</th>
                    <th>Feedback</th>
                    <th>Update</th>
                </tr>
            </thead>
            <tbody>
                {
                    classes.map((item, index) => <tr
                        key={item._id}
                    >
                        <td>
                            {index + 1}
                        </td>
                        <td>
                            {item.name}
                        </td>
                        <td >${item.price}</td>
                        <td className="text-center">{item.seat}</td>
                        <td >{item.status}</td>
                        <td>
                           <button className="btn bg-blue-500">Feedback</button>
                        </td>
                        <td>
                            <Link to={'/updateclass'}>
                               <button className="btn bg-lime-600">Update</button>
                            </Link>
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
