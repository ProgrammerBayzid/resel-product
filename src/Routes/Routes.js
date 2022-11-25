import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Layout/Main";
import Catagory from "../Components/Pages/Catagory";
import Home from "../Components/Pages/Home";
import Login from "../Components/Pages/Login";
import SingUp from "../Components/Pages/SingUp";
import Products from "../Components/Pages/Products";
import PrivetRoute from '../PrivetRoute/PrivetRoute'
import DashboardLayout from "../Components/Dashboard/DashboardLayout";
import Dashboard from "../Components/Dashboard/Dashboard";
import MyOrders from "../Components/Dashboard/MyOrders";
import MyProducts from "../Components/Dashboard/MyProducts";
import AddProduct from "../Components/Dashboard/AddProduct";
import AllSaller from "../Components/Dashboard/AllSaller";
import AllUser from "../Components/Dashboard/AllUser";
import Blog from "../Components/Pages/Blog";
import Contactus from "../Components/Pages/Contactus";
import AdminRoute from "../PrivetRoute/AdminRoute";
import Profile from "../Components/Pages/Profile";
import SellerPrivet from "../PrivetRoute/SellerPrivet";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>

            },
            {
                path: '/home',
                element: <Home></Home>

            },
            {
                path: '/login',
                element: <Login></Login>

            },
            {
                path: '/singup',
                element: <SingUp></SingUp>

            },
            {
                path: '/catagory',
                element: <Catagory></Catagory>

            },
            {
                path: '/blog',
                element: <Blog></Blog>

            },
            {
                path: '/contactsus',
                element: <Contactus></Contactus>

            },
            {
                path: '/profile',
                element: <Profile></Profile>

            },
            {
                path: '/catagory/Products/:name',
                element: <PrivetRoute><Products></Products></PrivetRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/catagory/Products/${params.name}`)
            },

        ]
    },


    {
        path: '/dashboard',
        element: <PrivetRoute><DashboardLayout></DashboardLayout></PrivetRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/myorders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/myproducts',
                element: <SellerPrivet><MyProducts></MyProducts></SellerPrivet>
            },
            {
                path: '/dashboard/addproduct',
                element: <SellerPrivet> <AddProduct></AddProduct></SellerPrivet>
            },
            {
                path: '/dashboard/allsaller',
                element: <AdminRoute><AllSaller></AllSaller></AdminRoute>
            },
            {
                path: '/dashboard/alluser',
                element: <AdminRoute><AllUser></AllUser></AdminRoute>
            },
        ]
    }
])