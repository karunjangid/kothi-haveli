import React from 'react'
import './Propcards.css'
import Dataa from '../../assets/Prop'

const Propcardss = () => {
  return (
    <>
    <div className="propcardss">
    <div className="card-Pr-top">
        {Dataa.map((item, index) => {
          return (
            <div key={index} className="card-Pr">
                <img src={item.image} alt="" />
                <div className="card-Pr-text">
                <button>{item.tag}</button>
                <h1 className='h11' style={{color:"orangered",marginTop:"10px"}}>{item.price}</h1>
                </div>
                <h2 style={{fontSize:"22px",margin:"30px"}}>{item.title}</h2>
                <p className='p1-Pr' style={{fontSize:"13px",margin:"30px"}}>{item.About}</p>
            <div className="main-card-textt">
            <div className="text-Pr" style={{margin:"30px"}}>
              <p className="p2-Pr">Bedroom:{item.Bedrooms}</p>
              <p className="p2-Pr">Bathroom:{item.Bathrooms}</p>
            </div>
            <div className="textttt-Pr">
              <p className="p2-Pr">Area:{item.Area}</p>
              <p className="p2-Pr">Floor:{item.yearbuilt}</p>
              <p className="p2-Pr">Parking:{item.Parking}</p>
            </div>
            </div>
            <button className='btn-card-Pr' style={{width:"150px",padding:"14px 20px",borderRadius:"50px 50px",position:"relative"}}>{item.button}</button>
          </div>
          )})}
    </div>
    </div>
    </>
  )
}

export default Propcardss