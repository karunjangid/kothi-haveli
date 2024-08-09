import React from 'react'
import './bestdeal.css'
import { FaCalendarAlt } from "react-icons/fa";
const Bestdeal = () => {
  return (
    <>
    <div className="firstdiv">
        <div className="firstfirst">
            <p style={{color:"orangered",fontWeight:"bolder",fontSize:"20px"}}>| Best deals</p>
            <h1 style={{width:"600px",fontSize:"50px"}}>Find Your best Deal Right Now!</h1>
        </div>
        <div className="firstsecond">
            <button style={{backgroundColor:"orangered"}}>Apartment</button>
            <button>Villa</button>
            <button>PentaHouse</button>
        </div>
    </div>
    <div className="seconddiv">
        <div className="secondfirst">
            <div className="texttt">
                <p>Total Flat Space</p>
                <h1 style={{width:"70px"}}>185 m2</h1>
            </div>
            <div className="texttt">
                <p>Floor number</p>
                <h1>26th</h1>
            </div>
            <div className="texttt">
                <p>Number Of Rooms</p>
                <h1>4</h1>
            </div>
            <div className="texttt">
                <p>Parking Availiable</p>
                <h1>Yes</h1>
            </div>
            <div className="texttt">
                <p>Payment Process</p>
                <h1>Bank</h1>
            </div>
        </div>
        <div className="secondsecond">
            <img src="https://th.bing.com/th/id/OIP.PFYjvQIJ2wUcUb0sLoncDAHaFj?rs=1&pid=ImgDetMain" alt="" />
        </div>
        <div className="secondthird">
            <h3>Extra Info About Property</h3>
            <p style={{width:"340px",color:"grey"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.
            When you need free CSS templates.br
            <br />
            <br />
            <br />
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit illum rem ullam quidem ipsum officia, totam deleniti harum temporibus ad doloremque architecto a velit dolore ex debitis dolorem dolores animi. </p>
             <FaCalendarAlt style={{position:"relative",color:"white",backgroundColor:"orangered",padding:"20px 20px",borderRadius:"50%",right:"20px",bottom:"10px",zIndex:"1"}}/><button>Want a Tour</button>
        </div>
    </div>
    </>
  )
}

export default Bestdeal