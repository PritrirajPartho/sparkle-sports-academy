import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from '../Layout/Root'
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import SignUp from "../pages/SignUP/SignUP";
import Login from '../pages/Login/Login';
import Classes from "../pages/Classes/Classes";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import Dashboard from "../Layout/Dashboard";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";
import MangeUsers from "../pages/MangeUsers/MangeUsers";
import AdminRoute from './AdminRoute';
import AddClass from "../pages/Dashboard/AddClass/AddClass";



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
        }
      ]
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>, 
      children: [
        {
          path: 'mycart',
          element: <MyCart></MyCart>
        },
        {
          path: 'userhome',
          element: <UserHome></UserHome>
        },
        {
          path: 'myclasses', 
          element: <MyClasses></MyClasses>
        },
        {
          path: 'manageusers', 
          element: <MangeUsers></MangeUsers>
        },
        {
          path: 'addclass', 
          element: <AddClass></AddClass>
        },
        // {
        //   path:'payment',
        //   element: <Payment></Payment>
        // },
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