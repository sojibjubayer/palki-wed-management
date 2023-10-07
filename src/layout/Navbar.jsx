import { useContext, useState } from "react";
import navlogo from '../assets/sanai.png'
import { Link } from "react-router-dom";
import { FaAngleDown } from 'react-icons/fa';
import { AuthContext } from "../provider/AuthProvider";
// import { NavLink } from "react-router-dom";


const Navbar = () => {
    const {logOut,user} = useContext(AuthContext);

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
        <div>

            <nav className="bg-red-600 px-3 flex items-center justify-between">
                <div className="flex items-center">
                    <div className="hidden md:block">
                        <img src={navlogo} className="w-16 h-16 mr-[200px]" alt="" />
                    </div>
                    <ul className="flex gap-10 text-white font-bold  py-6">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li onMouseEnter={toggleServices} onMouseLeave={toggleServices}>
                            <div className="flex items-center gap-1">
                                <a href="#">Services </a>
                                <FaAngleDown className="mt-1"></FaAngleDown>
                            </div>
                            {showServices && (
                                <ul className="service-list absolute text-black bg-pink-400 p-1 rounded py-2">
                                    <li className="bg-green-500 rounded p-1"><Link to='/Mehndi or Haldi Ceremony'>Mehendi Ceremony</Link></li>
                                    <li><Link to='/Wedding Entrance Decoration'>Entrance Decoration</Link></li>
                                    <li><Link to='/Reception Stage Decoration'>Stage Decoration</Link></li>
                                    <li><Link to='/Wedding Car Decoration'>Car Decoration</Link></li>
                                    <li><Link to='/Groom and Bride Attire'>Bridal Attire</Link></li>
                                    <li><Link to='/Wedding Lighting Decoration'> Lighting </Link></li>
                                </ul>
                            )}
                        </li>
                    </ul>
                </div>
                <div>
                    
                        <div className=" flex items-center ">
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