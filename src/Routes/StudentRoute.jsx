import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

const StudentRoute = ({ children }) => {
      const { user, loading } = useAuth();
      const[axiosSecure] = useAxiosSecure();
      const location = useLocation();
      // const[loading, setLoading] = useState(true);
      // const[student, setStudent] = useState();

      // useEffect(() => {
      //     setLoading(true)
      //     axiosSecure.get('https://summer-camp-server-beta.vercel.app/allusers')
      //     .then(data => {
      //     const studentFilter = data.data.filter(student => student.role == 'student')
      //     setStudent(studentFilter);
      //     setLoading(false)
      //   })

      // },[])


    // console.log(user)

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default StudentRoute;