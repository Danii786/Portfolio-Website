import React from "react";
import "./home.css";
import images from "../../image/p8.jpeg";
import { Link } from "react-router-dom";
import Aboutme from "../Aboutme/Aboutme";
import Contactus from "../contactus/contactus";
import Register from"../Register/Register"

const Home = () => {
  return (
    <>
      <div className="main-contener">
        <div className="left">
          Hey, There
          <h1 style={{ fontSize: "xx-large", fontWeight: "800" }}>
            {" "}
            I am Muhammad Adnan Akbar
          </h1>
          <Link to="/Aboutme">
            {" "}
            <button
              style={{
                backgroundColor: "yellow",
                color: "black",
                margin: "10px",
                padding: "10px",
                borderRadius: "12px",
              }}
            >
              About Me
            </button>
          </Link>
          <br />
          <h3 style={{ fontSize: "x-large", fontWeight: "1000" }}>
            Mern Stack Developer and Designer
          </h3>
          <br />
          <p>
          
            Software Engineer | Full stack Developer |React+HTML+CSS+
            JavaScript+Node.js(MERN ) | Learning updated Skills by
            professionals.
          </p>
        </div>
        <div className="line"></div>
        <div className="right">
          <img src={images} className="self-img" />
        </div>
        <div className="lina"></div>
      </div>
      <Contactus/>
      <Register/>
      <Aboutme />
    
     
    </>
  );
};
export default Home;
