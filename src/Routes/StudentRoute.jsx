import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import axios from "axios";

const StudentRoute = async({ children }) => {
    //  const[axiosSecure] = useAxiosSecure();
    //  const {data} = await axiosSecure('/student')
     const {data} = await axios.get('http://localhost:5000/student')
     const studentFilter = data.filter(student => student.role == 'student')
     console.log(studentFilter);
    // .then(data => console.log(data.data))


    const { user, loading } = useAuth();
    // console.log(user)
    const location = useLocation();

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if (studentFilter?.email) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default StudentRoute;