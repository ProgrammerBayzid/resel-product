import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Layout/Main";
import Catagory from "../Components/Pages/Catagory";
import Home from "../Components/Pages/Home";
import Login from "../Components/Pages/Login";
import SingUp from "../Components/Pages/SingUp";
import Products from "../Components/Pages/Products";

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
                path: '/catagory/Products/:name',
                element: <Products></Products>,
                loader: ({ params }) => fetch(`http://localhost:5000/catagory/Products/${params.name}`)
            },

        ]
    }
])