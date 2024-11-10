import React from "react";
import "./card.css"

const  Card =(props)=>{
    return(
        <>
        <div className="math">
           <h1 style={{color:"black",fontSize:"xx-large",fontWeight:"800"}}>{props.hiding}</h1>
           <p style={{color:"black", fontSize:"large", fontWeight:"500"}}>{props.para}</p>
        </div>
        </>
    )
}
export default Card;