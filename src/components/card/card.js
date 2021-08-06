import React from 'react'
import "./card.css";
import karna from "../images/karna.jpg";

function card() {
    return (
       
            <div className= " card ">
                <center>
            <img src={karna} alt="Logo" className="img"/>
                 <h2>
                     Karna
                 </h2>
                 <p className="clr">Frontend developer</p>
                 <p> CSE Department, KL University</p>
                 <p>From Vijyawada</p>

                 </center>
            </div>
       
    )
}

export default card
