import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";

const StudentRoute = ({ children }) => {
    const { user, loading } = useAuth();
    // console.log(user)
    const location = useLocation();

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default StudentRoute;