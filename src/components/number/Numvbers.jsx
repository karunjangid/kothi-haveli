import React from 'react'
import './numbers.css'
import { FaCircle } from "react-icons/fa";
const Numvbers = () => {
  return (
    <>
    <div className="main-num">
        <div className="num1">
            <h1>34</h1>
            <h2>Buildings finished Now</h2>
            <FaCircle style={{position:"relative",bottom:'50px',left:"40px",fontSize:"40px",color:"orangered"}}/>
        </div>
        <div className="num1">
            <h1>12</h1>
            <h2>Years Experience</h2>
            <FaCircle style={{position:"relative",bottom:'50px',left:"40px",fontSize:"40px",color:"orangered"}} />
        </div>
        <div className="num1">
            <h1>24</h1>
            <h2>Awards Won 2024</h2>
            <FaCircle style={{position:"relative",bottom:'50px',left:"40px",fontSize:"40px",color:"orangered"}} />
        </div>
    </div>
    </>
  )
}

export default Numvbers