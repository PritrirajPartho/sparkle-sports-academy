import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";

//TODO: STUDENT ROUTE WORK UNCOMPLETED
// TODDO: DATABASE THEKE QUERY KORE USER ANTE HOBE TARPOR ROUTE SETPUP KORBE
const StudentRoute = ({ children }) => {
    const { user, loading } = useAuth();
    console.log(user)
    const location = useLocation();
    const studentRole = "student";

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if (user.role == "student") {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default StudentRoute;