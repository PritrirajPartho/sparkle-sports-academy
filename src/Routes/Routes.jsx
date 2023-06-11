import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from '../Layout/Root'
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import SignUp from "../pages/SignUP/SignUP";
import Login from '../pages/Login/Login';
import Classes from "../pages/Classes/Classes";
import Dashboard from "../Layout/Dashboard";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";
import MangeUsers from "../pages/MangeUsers/MangeUsers";
import AdminRoute from './AdminRoute';
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import MySelectedClass from "../pages/Dashboard/MySelectedClass/MySelectedClass";
import StudentRoute from "./StudentRoute";
import InstructorRoute from './InstructorRoute';
import PrivateRoute from './PrivateRoute';
import Instructors from '../pages/Instructors/Instructors'
import Payment from "../pages/Dashboard/Payment/Payment";
import MyEnrolledClasses from "../pages/Dashboard/MyEnrolledClasses/MyEnrolledClasses";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";


// TODO: STUDENT, ADMIN, INSTRUCTOR ROUTE SETUP
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }, 
        {
          path: 'signup', 
          element: <SignUp></SignUp> 
        },
        {
          path: 'classes',
          element: <Classes></Classes>
        },
        {
          path: 'login',
          element:<Login></Login>
        },
        {
          path: 'instructors',
          element: <Instructors></Instructors>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>, 
      children: [
        {
          path: 'userhome',
          element: <UserHome></UserHome>
        },
        {
          path: 'myclasses', 
          element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
        },
        {
          path: 'manageusers', 
          element: <AdminRoute><MangeUsers></MangeUsers></AdminRoute>
        },
        {
          path: 'addclass', 
          element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
        },
        {
          path: 'myselectedclasses', 
          element: <MySelectedClass></MySelectedClass>
        },
        {
          path:'payment',
          element: <Payment></Payment>
        },
        {
          path:'myenrolledclasses',
          element: <MyEnrolledClasses></MyEnrolledClasses>
        },
        {
          path:'paymenthistory',
          element: <PaymentHistory></PaymentHistory>
        },
        // // admin routes
        // {
        //   path: 'adminhome',
        //   element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
        // },
        // {
        //   path: 'allusers', 
        //   element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        // },
        // {
        //   path: 'addItem',
        //   element: <AdminRoute><AddItem></AddItem></AdminRoute>
        // },
        // {
        //   path: 'manageitems',
        //   element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
        // }
      ]
    }
  ]);