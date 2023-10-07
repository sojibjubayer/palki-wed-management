import { createBrowserRouter } from "react-router-dom";
import Roots from "../layout/Roots";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouters from "./PrivateRouters";
import Mehendi from "../pages/details/Mehendi";
import EntranceDecoration from "../pages/details/EntranceDecoration";
import ReceptionStage from "../pages/details/ReceptionStage";
import CarDecoration from "../pages/details/CarDecoration";
import GroomBride from "../pages/details/GroomBride";
import Lighting from "../pages/details/Lighting";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Roots></Roots>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader:()=> fetch('/wedding_event.json')
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
            },
            {
                path:'/mehendi',
                element:<Mehendi></Mehendi>
            },
            {
                path:'entrance',
                element:<EntranceDecoration></EntranceDecoration>
            },
            {
                path:'reception',
                element:<ReceptionStage></ReceptionStage>
            },
            {
                path:'car-decoration',
                element:<CarDecoration></CarDecoration>
            },
            {
                path:'groom-bride',
                element:<GroomBride></GroomBride>
            },
            {
                path:'lighting',
                element:<Lighting></Lighting>
            }
            // {
            //     path:'/',
            //     element:<EventCards></EventCards>

            // }
        ]

    },
]);

export default router;