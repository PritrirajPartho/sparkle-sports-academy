import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
// import useAxiosSecure from "../hooks/useAxiosSecure";
import axios from "axios";
import { useEffect, useState } from "react";

const StudentRoute = ({ children }) => {
     const[loading, setLoading] = useState(true);
      const[student, setStudent] = useState();
      useEffect(() => {
        setLoading(true)
        axios.get('https://summer-camp-server-beta.vercel.app/allusers')
        .then(data => {
        const studentFilter = data.data.filter(student => student.role == 'student')
         setStudent(studentFilter);
         setLoading(false)
        })

      },[])


    const { user } = useAuth();
    // console.log(user)
    const location = useLocation();

    // if(loading){
    //     return <progress className="progress w-56"></progress>
    // }
    console.log(student)
    if (student) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default StudentRoute;