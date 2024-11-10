import React from "react";
import "./contactus.css";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";





const Contactus = () => {
  return (
    <>
      <div className="main-cont">
        <div className="cont-l">
          <div className="cont-1">Contact us</div>
          <div className="cont-2">Let's work Together</div>
          <div className="cont-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
            modi perspiciatis cupiditate id! Facilis ex rerum nulla iste laborum
            dolor quidem qui laudantium, ipsam sint.
          </div>
          <div className="cont-4">
            <div className="cont-4-1">< a href="adnanakbar78600000@gmail.com"><MdOutlineMarkEmailRead  size={20} color="yellow"/>
            </a></div>
            <div className="cont-4-2">adnanakbar78600000@gmail.com</div>
          </div>
          


          <div className="cont-5">
            <div className="cont-5-1">< a href="adnanakbar78600000@gmail.com"><FaSquarePhone size={20} color="yellow"/>
            </a></div>
            <div className="cont-5-2">+9203004886866</div>
            
          </div>
          <div className="icon">
            <a href="https://www.linkedin.com/in/adnanakbar-?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><CiLinkedin size={30} /> </a>
            <a href="https://www.facebook.com/profile.php?id=100055884591565&mibextid=ZbWKwL"><FaFacebook size={30}  /> </a>
            <a href="https://www.instagram.com/mr_.adnan124/profilecard/?igsh=MTE2dmdzcGthYXVkMg=="><FaInstagram size={30} /> </a>
            <a href="https://x.com/AdnanAk02297255?s=09"><FaTwitter size={30}  /> </a>
          </div>
        </div>
        <div className="cont-R">
          <div className="input">
            <input type="text" placeholder="Enter your Name"  className="sel-input"/>
            <input type="email" placeholder="Enter your Email"  className="sel-input"/>
            <input type="text" placeholder="Enter your Subject"  className="sel-input"/>
            <textarea type="text" placeholder="Enter Your Discraption"  className="inp" />
             <button className="Button" type="reset">submit</button>
             
          </div>
        </div>
      </div>
    </>
  );
};
export default Contactus;
