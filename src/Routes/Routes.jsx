import {
    createBrowserRouter,
  } from "react-router-dom";




export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }, 
        // {
        //   path: 'menu', 
        //   element: <Menu></Menu>
        // },
        // {
        //   path: 'order/:category',
        //   element: <Order></Order>
        // },
        // {
        //   path: 'login',
        //   element: <Login></Login>
        // },
        // {
        //   path: 'signup',
        //   element: <SignUp></SignUp>
        // },
        // {
        //   path: 'secret',
        //   element: <PrivateRoute><Secret></Secret></PrivateRoute>
        // }
      ]
    },
    // {
    //   path: 'dashboard',
    //   element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>, 
    //   children: [
    //     {
    //       path: 'userhome',
    //       element: <UserHome></UserHome>
    //     },
    //     {
    //       path: 'mycart', 
    //       element: <MyCart></MyCart>
    //     },
    //     {
    //       path:'payment',
    //       element: <Payment></Payment>
    //     },
    //     // admin routes
    //     {
    //       path: 'adminhome',
    //       element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
    //     },
    //     {
    //       path: 'allusers', 
    //       element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
    //     },
    //     {
    //       path: 'addItem',
    //       element: <AdminRoute><AddItem></AddItem></AdminRoute>
    //     },
    //     {
    //       path: 'manageitems',
    //       element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
    //     }
    //   ]
    // }
  ]);