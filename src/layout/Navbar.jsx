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

            <nav className="bg-red-600 px-3 py-4 flex items-center justify-between">
                <div className="flex items-center">
                    <div >
                        <img src={navlogo} className="w-16 mr-[200px]" alt="" />
                    </div>
                    <ul className="flex gap-10 text-white font-bold">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li onMouseEnter={toggleServices} onMouseLeave={toggleServices}>
                            <div className="flex items-center gap-1">
                                <a href="#">Services </a>
                                <FaAngleDown className="mt-1"></FaAngleDown>
                            </div>
                            {showServices && (
                                <ul className="service-list absolute text-black">
                                    <li><a href="/service1">Service 1</a></li>
                                    <li><a href="/service2">Service 2</a></li>
                                    <li><a href="/service3">Service 3</a></li>
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