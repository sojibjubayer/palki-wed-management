import  { useState } from 'react';
import './Navbar.css'; // Import your CSS file for styling

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">Your Logo</a>
        <button className={`navbar-toggle ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
