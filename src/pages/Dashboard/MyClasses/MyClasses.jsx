import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import useInstructorClasses from "../../../hooks/useInstructorClasses";

const MyClasses = () => {

  const [classes, refetch] = useInstructorClasses();
  console.log(classes);
  const total = classes.reduce((sum, item) => item.price + sum, 0);

  return (
    <div className="myclasses w-full bg-slate-300 px-8 text-center pt-32 pb-10">
    <Helmet>
        <title>Sparkle Sports Academy | Instructors Classes</title>
    </Helmet>
    <h1 className="text-center text-3xl text-[#164BF7] mb-6">Total Added your Classes or Courses:{classes.length}</h1>
    <div className="overflow-x-auto w-full ">
        <table className="table w-full">
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
                        <td className="text-center">
                            {index + 1}
                        </td>
                        <td>
                            {item.name}
                        </td>
                        <td >${item.price}</td>
                        <td className="text-center">{item.seat}</td>
                        <td >{item.status}</td>
                        <td>
                           <button className="btn border-none bg-[#1692F7]">Feedback</button>
                        </td>
                        <td>   
                               <button className="btn border-none bg-lime-500"><Link to={'/updateclass'} state={item}>Update</Link></button>    
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
