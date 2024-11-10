import React from "react";
import "./aboutme.css";
import Card from "../Card/Card";

const Aboutme = () => {
  return (
    <>
      <div className="main-about">
        <h1 className="about-ma"> About me </h1>
        <div className="main-h">
          <h2 className="text-1">personal infos </h2>
        </div>
        <div className="main-a">
          <div className="main-l">
            <div className="ll">
              <label className="lable">Name : </label>
              ADNAN
              <br />
              <br />
              <label className="lable"> last name : </label>
              Akbar
              <br />
              <br />
              <label className="lable">Nationality : </label>
              pakistan
              <br />
              <br />
              <label className="lable">Freelance : </label>
              Available
              <br />
              <br />
            </div>
            <div className="rr">
              <label className="lable">Age : </label>
              22
              <br />
              <br />
              <label className="lable">Address : </label>
              Lahore
              <br />
              <br />
              <label className="lable">phone : </label>
              +92 3004886866
              <br />
              <br />
              <label className="lable">Email : </label>
              dani@gmail.com
              <br />
              <br />
            </div>
          </div>

          <div className="main-r">
            <div className="ls">
              <Card hiding="10" para="+year exprence" />
            </div>
            <div className="rs">
              <Card hiding="95" para="+completed project" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Aboutme;
