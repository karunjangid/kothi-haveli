import React, { useState } from 'react';
import './feature.css';
import { MdMapsHomeWork, MdAddHomeWork } from "react-icons/md";
import { GiNotebook, GiBoltShield } from "react-icons/gi";
import { FaFileContract } from "react-icons/fa";


const Featured = () => {
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);

  const handleToggleAnswer1 = () => {
    setShowAnswer1(!showAnswer1),
    setColor(!Color).style.Color="red"
  };

  const handleToggleAnswer2 = () => {
    setShowAnswer2(!showAnswer2);
  };
  return (
    <>
      <div className="main-Feature">
        <div className="image">
          <FaFileContract className='img-icon'/>
        </div>
        <div className="text-feature">
          <h4 style={{ color: "orangered" }}>| FEATURED</h4>
          <h1 style={{ width: "400px", fontSize: "50px" }}>Best Apartment & Sea View</h1>
          <h3 style={{ color: "grey", fontWeight: "100" }} onClick={handleToggleAnswer1}>Best Useful Links?</h3>
          {showAnswer1 && <p style={{width:"50vh",color:"orangered"}}>Get the best villa website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the best free CSS templates in the world. Please tell your friends about it.</p>}
          <h3 style={{ color: "grey", fontWeight: "100" }} onClick={handleToggleAnswer2}>How Does This Work?</h3>
          {showAnswer2 && <p style={{width:"50vh",color:"orangered"}}>Dolor almesit amet, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>}
        </div>
        <div className="card-king">
            <div className="card1">
                <div className="icon-card">
                <MdMapsHomeWork />
                </div>
                <div className="icon-text">
                <h1>250MxM</h1>
                <p>Total Flat Space</p>
                </div>
            </div>
            <div className="card1">
                <div className="icon-card">
                <GiNotebook />
                </div>
                <div className="icon-text">
                <h1>CONTRACT</h1>
                <p>Contract Ready</p> 
                </div>
            </div>
            <div className="card1">
                <div className="icon-card">
                <MdAddHomeWork />
                </div>
                <div className="icon-text">
                <h1>Payment</h1>
                <p>Payment Process</p>
                </div>
            </div>
            <div className="card1">
                <div className="icon-card">
                <GiBoltShield />
                </div>
                <div className="icon-text">
                <h1>SAFETY</h1>
                <p>24x7 Under Control</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Featured