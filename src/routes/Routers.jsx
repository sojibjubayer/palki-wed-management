import { createBrowserRouter } from "react-router-dom";
import Roots from "../layout/Roots";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouters from "./PrivateRouters";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Roots></Roots>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/about',
                element:<PrivateRouters><AboutUs></AboutUs></PrivateRouters>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            }
        ]

    },
]);

export default router;