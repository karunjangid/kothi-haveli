import React from 'react';
import './cardss.css'
import Data from '../../assets/Data'

const Cardss = () => {
  return (
    <>
      <div className="text-head-cards">
        <p style={{ color: "orangered", fontWeight: "bolder" }}>| Properties</p>
        <h1 style={{ width: "500px", fontSize: "40px", display: "flex", textAlign: "center" }}>We Provide The Best Property You Like</h1>
      </div>
      <div className="card-container">
        {Data.map((item, index) => (
          <div key={index} className="card">
            <img src={item.image} alt="" />
            <button>{item.tag}</button>
            <h1 className='h11'>{item.price}</h1>
            <h2>{item.title}</h2>
            <p className='p1'>{item.description}</p>
            <div className="main-card-text">
            <div className="text">
              <p className="p2">Bedroom:{item.Bedrooms}</p>
              <p className="p2">Bathroom:{item.Bathrooms}</p>
            </div>
            <div className="textttt">
              <p className="p2">Area:{item.Area}</p>
              <p className="p2">Floor:{item.Floor}</p>
              <p className="p2">Parking:{item.Parking}</p>
            </div>
            </div>
            <button className='btn-card' style={{width:"150px",padding:"14px 20px",borderRadius:"50px 50px"}}>{item.button}</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cardss;