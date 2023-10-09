import { useContext, useState } from "react";
import navlogo from '../assets/sanai.png'
import { Link, NavLink } from "react-router-dom";
import { FaAngleDown } from 'react-icons/fa';
import { AuthContext } from "../provider/AuthProvider";





const Navbar = () => {
    const { logOut, user } = useContext(AuthContext);
    //responsive


    const handleLogOut = () => {
        logOut()
            .then(() => console.log('successfully logged out'))
            .catch(error => console.log(error))
    }
    const [showServices, setShowServices] = useState(false);

    const toggleServices = () => {
        setShowServices(!showServices);
    };
    const navLinks = <>
        <li><NavLink to='/' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " border-b-2 border-white " : ""
        }>Home</NavLink></li>
        <li><NavLink to='/about'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " border-b-2 border-white " : ""
            }
        >About Us</NavLink></li>
        <li onMouseEnter={toggleServices} onMouseLeave={toggleServices}><NavLink to='#'>
            <span className="flex items-center">Services<FaAngleDown className="mt-1"></FaAngleDown></span></NavLink>
            {showServices && (
                <ul className="service-list absolute text-black  p-1  py-2">
                    <li className="bg-pink-300 rounded p-1"><Link to='/Mehndi or Haldi Ceremony'>Mehendi Ceremony</Link></li>
                    <li className="bg-pink-500 rounded p-1"><Link to='/Wedding Entrance Decoration'>Entrance Decoration</Link></li>
                    <li className="bg-pink-300 rounded p-1"><Link to='/Reception Stage Decoration'>Stage Decoration</Link></li>
                    <li className="bg-pink-500 rounded p-1"><Link to='/Wedding Car Decoration'>Car Decoration</Link></li>
                    <li className="bg-pink-300 rounded p-1"><Link to='/Groom and Bride Attire'>Bridal Attire</Link></li>
                    <li className="bg-pink-500 rounded p-1"><Link to='/Wedding Lighting Decoration'> Lighting </Link></li>
                </ul>
            )}

        </li>

    </>
    return (
        <div className="">


            <nav className="bg-pink-700 px-3 flex flex-col  md:flex-row items-center justify-between">
                <div className="flex items-center">
                    <div className="hidden md:block">
                        <img src={navlogo} className="w-16 h-16 mr-[200px]" alt="" />
                    </div>

                    <ul className="flex flex-col md:flex-row  gap-10 text-white md:text-xl">

                        <li className="flex gap-10">{navLinks}</li>
                        <li className="flex gap-10 -mt-5 md:mt-0"> {
                            user && <>
                                <li><NavLink to="/reviews" className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? " border-b-2 border-white " : ""
                                }>Reviews</NavLink></li>
                                <li><NavLink to="/partners" className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? " border-b-2 border-white " : ""
                                }>Partners</NavLink></li>
                            </>
                        }</li>

                    </ul>
                </div>
                <div>

                    <div className=" flex items-center my-5 md:my-0">
                        <div className="text-white flex items-center">
                            
                            {
                                user && <img className="w-10 h-10 rounded-full mr-1" src={user.photoURL} alt='' />

                            }
                            {
                                user && user.displayName
                            }
                        </div>

                        {
                            user ?
                                <Link to='/' onClick={handleLogOut} ><button className="btn btn-sm ml-3">Log Out</button></Link>
                                :
                                <Link to='/login'><button className="btn btn-sm ml-3">Login</button></Link>

                        }

                    </div>

                </div>
            </nav>
        </div>
    );
};

export default Navbar;



//test
// const Navbar = () => {
//     return (
// <div className="navbar bg-base-100">
//   <div className="navbar-start">
//     <div className="dropdown">
//       <label tabIndex={0} className="btn btn-ghost lg:hidden">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//       </label>
//       <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//         <li><a>Item 1</a></li>
//         <li>
//           <a>Parent</a>
//           <ul className="p-2">
//             <li><a>Submenu 1</a></li>
//             <li><a>Submenu 2</a></li>
//           </ul>
//         </li>
//         <li><a>Item 3</a></li>
//       </ul>
//     </div>
//     <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
//   </div>
//   <div className="navbar-center hidden lg:flex">
//     <ul className="menu menu-horizontal px-1">
//       <li><a>Item 1</a></li>
//       <li tabIndex={0}>
//         <details>
//           <summary>Parent</summary>
//           <ul className="p-2">
//             <li><a>Submenu 1</a></li>
//             <li><a>Submenu 2</a></li>
//           </ul>
//         </details>
//       </li>
//       <li><a>Item 3</a></li>
//     </ul>
//   </div>
//   <div className="navbar-end">
//     <a className="btn">Button</a>
//   </div>
// </div>
//     )
// }
// export default Navbar;