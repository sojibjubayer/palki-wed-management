import { useContext, useState } from "react";
import navlogo from '../assets/sanai.png'
import { Link } from "react-router-dom";
import { FaAngleDown } from 'react-icons/fa';
import { AuthContext } from "../provider/AuthProvider";
// import { NavLink } from "react-router-dom";
//for responsive
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";

 


const Navbar = () => {
    const {logOut,user} = useContext(AuthContext);
    //responsive
    const [open,setOpen]=useState(false)

    const handleLogOut=()=>{
        logOut()
        .then(()=>console.log('successfully logged out'))
        .catch(error=>console.log(error))
    }
    const [showServices, setShowServices] = useState(false);

    const toggleServices = () => {
        setShowServices(!showServices);
    };
    return (
        <div className="">
            <div className="flex justify-between gap-20 items-center">
                <div onClick={()=>setOpen(!open)} className="md:hidden text-2xl ">
                    {
                        open?<AiOutlineClose></AiOutlineClose>:<AiOutlineMenu ></AiOutlineMenu>
                    }
                
                
                </div>
                <div className=" flex items-center md:hidden mt-0">
                                <div className="text-white">
                                {
                                    user && user.displayName
                                }
                                </div>

                                {
                                    user ?
                                        <Link to='/' onClick={handleLogOut} ><button className="btn ml-3">Log Out</button></Link>
                                        :
                                        <Link to='/login'><button className="btn ml-3">LogIN2</button></Link>

                                }

                </div>
            </div>

            <nav className="md:bg-pink-700 px-3 md:flex items-center justify-between">
                <div className="flex items-center">
                    <div className="hidden md:block">
                        <img src={navlogo} className="w-16 h-16 mr-[200px]" alt="" />
                    </div>
                    {/* <ul className="flex gap-10 text-white font-bold  py-6">
                     */}
                     <ul className={`md:flex gap-20 duration-1000 absolute md:static
                      ${open?'left-1':'-left-40' }  bg-red-400 p-4 justify-center`}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li onMouseEnter={toggleServices} onMouseLeave={toggleServices}>
                            <div className="flex items-center gap-1">
                                <a href="#">Services </a>
                                <FaAngleDown className="mt-1"></FaAngleDown>
                            </div>
                            {showServices && (
                                <ul className="service-list absolute text-black bg-yellow-400 p-1 rounded py-2">
                                    <li className="bg-pink-500 rounded p-1"><Link to='/Mehndi or Haldi Ceremony'>Mehendi Ceremony</Link></li>
                                    <li className="bg-pink-500 rounded p-1"><Link to='/Wedding Entrance Decoration'>Entrance Decoration</Link></li>
                                    <li className="bg-pink-500 rounded p-1"><Link to='/Reception Stage Decoration'>Stage Decoration</Link></li>
                                    <li className="bg-pink-500 rounded p-1"><Link to='/Wedding Car Decoration'>Car Decoration</Link></li>
                                    <li className="bg-pink-500 rounded p-1"><Link to='/Groom and Bride Attire'>Bridal Attire</Link></li>
                                    <li className="bg-pink-500 rounded p-1"><Link to='/Wedding Lighting Decoration'> Lighting </Link></li>
                                </ul>
                            )}
                        </li>
                        {
                            user && <>
                            <li><Link to="/reviews">Reviews</Link></li>
                            <li><Link to="/partners">Partners</Link></li>
                            </>
                        }

                    </ul>
                </div>
                <div>
                    
                        <div className=" md:flex items-center hidden">
                            <div className="text-white">
                            {
                                user && user.displayName
                            }
                            </div>

                            {
                                user ?
                                    <Link to='/' onClick={handleLogOut} ><button className="btn ml-3">Log Out</button></Link>
                                    :
                                    <Link to='/login'><button className="btn ml-3">Login</button></Link>

                            }

                        </div>
                    
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
// import { useState } from "react";
// import Link from "../layout/Link";
// import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";

// const Navbar = () => {
//     const [open,setOpen]=useState(false)


//     const routes = [
//         { id: 1, name: "Home", path: "/" },
//         { id: 2, name: "About Us", path: "/about" },
//         { id: 3, name: "Services", path: "/services" },
//         { id: 4, name: "Portfolio", path: "/portfolio" },
//         { id: 5, name: "Contact", path: "/contact" }
//       ];

      
//     return (
//         <div>
//             <div onClick={()=>setOpen(!open)} className="md:hidden text-2xl ">
//                 {
//                     open?<AiOutlineClose></AiOutlineClose>:<AiOutlineMenu ></AiOutlineMenu>
//                 }
            
            
//             </div>
//             <ul className={`md:flex gap-20 duration-1000 absolute md:static
//             ${open?'left-1':'-left-40' }
//             bg-zinc-400 p-4 justify-center`}>
//             {
//                 routes.map(route=><Link key={route.id} route={route}></Link>)
//             }
//             </ul>
           
//         </div>
//     );
// };

// export default Navbar;