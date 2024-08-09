// Nav.jsx
import React, { useState } from 'react';
import './nav.css';
import { FaCalendarAlt } from "react-icons/fa";
import { TiThMenuOutline } from "react-icons/ti";
import { Link } from 'react-router-dom';

const Nav = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
    if (setOpen){
      document.getElementById("listt").style.right="400px";
    }
  };

  return (
    <nav>
      <div className="logo">
        <Link to="/" style={{textDecoration:"none"}}><h1>KOTHI&HAVELI</h1></Link>
      </div>
      <div className="list" id='listt'>
        <div className="menu">
          <TiThMenuOutline onClick={handleMenu} />
        </div>
        <ul>
          <Link to="/property"><li style={{color:"orangered"}}>Property</li></Link>
          <li>Property Details</li>
          <li>Contact Us</li>
          <Link to="/meeting" style={{textDecoration:"none"}}>
            <button style={{cursor:"pointer"}}>
              <h1 style={{backgroundColor:"orangered",height:"40px",width:"40px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%",position:"relative"}}>
                <FaCalendarAlt style={{color:"white"}}/>
              </h1>
              Schedule a Meet
            </button>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;