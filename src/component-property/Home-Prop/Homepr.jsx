import React, { useState } from 'react';
import './Home-prop.css';
import { Link } from 'react-router-dom';

const Homepr = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="mainprop">
      <div className="top">
      <Link to="/">
        <div className="logo-Prop" style={{ fontSize: "24px", fontWeight: "bold" }}>KOTHI&HAVELI
        </div>
        </Link>
        <div className="rating">
        {[1, 2, 3, 4, 5].map((star, index) => {
          return (
            <span
              key={index}
              className={`star ${rating >= star ? 'active' : ''}`}
              onMouseOver={() => setHover(star)}
              onMouseOut={() => setHover(0)}
              onClick={() => setRating(star)}
            >
              &#9733;
            </span>
          );
        })}
      </div>
      </div>
      <div className="buttons">
        <button className="btn-prop">Show all</button>
        <button className="btn-prop">Apartments/Flats</button>
        <button className="btn-prop">Villa House</button>
        <button className="btn-prop">Pentahouse</button>
      </div>
    </div>
  );
};

export default Homepr;