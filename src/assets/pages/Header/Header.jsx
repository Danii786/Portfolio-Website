import React from "react";
import "./header.css"
// import images from "../../image/p8.jpeg"
import { Link } from "react-router-dom";


const Header = () => {


  return (
<>
<nav className="navbar">
      {/* Logo on the left side */}
    <Link to="/"> <div className="logo">Adnan</div></Link>

      {/* Navigation Links in the center */}
      <ul className="nav-links">
       <Link to="/"> <li><a href="#home">Home</a></li></Link>
      <Link to="/project">  <li><a href="#projects">Projects</a></li></Link>
      <Link to="/contactus"> <li><a href="#contact">Contact Us</a></li></Link>
      </ul>

      {/* Register button on the right side */}
      <div className="register">
      <Link to="/Register"> <a href="#register" className="register-btn">Register</a></Link>
      </div>
    </nav>
</>


  )
};


export default Header;