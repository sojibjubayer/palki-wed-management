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
import OtherEvents from "../pages/otherEvents/OtherEvents";

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
            //private routes
            {
                path:'/Mehndi or Haldi Ceremony',
                element:<PrivateRouters><Mehendi></Mehendi></PrivateRouters>
            },
            {
                path:'/Wedding Entrance Decoration',
                element:<PrivateRouters><EntranceDecoration></EntranceDecoration></PrivateRouters>
            },
            {
                path:'/Reception Stage Decoration',
                element:<PrivateRouters><ReceptionStage></ReceptionStage></PrivateRouters>
            },
            {
                path:'/Wedding Car Decoration',
                element:<PrivateRouters><CarDecoration></CarDecoration></PrivateRouters>
            },
            {
                path:'/Groom and Bride Attire',
                element:<PrivateRouters><GroomBride></GroomBride></PrivateRouters>
            },
            {
                path:'/Wedding Lighting Decoration',
                element:<PrivateRouters><Lighting></Lighting></PrivateRouters>
            },
            {
                path:'other-events',
                element:<OtherEvents></OtherEvents>,
               
            }
            // {
            //     path:'/',
            //     element:<EventCards></EventCards>

            // }
        ]

    },
]);

export default router;