import { useState } from "react";
import navlogo from '../assets/sanai.png'
import { Link } from "react-router-dom";
import { FaAngleDown } from 'react-icons/fa';
// import { NavLink } from "react-router-dom";


const Navbar = () => {
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
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
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
                    <Link to='/login'>
                    <h3 className="bg-white p-2 rounded text-red-600 font-bold">Log in</h3>
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;