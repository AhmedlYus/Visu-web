import React from "react";
import { Link } from "react-router-dom";
import '../styles/Exhicards.css';

const ExhibitionCard2 = ({ title, text, image }) => {
  return (
    <div className="mufasa-container1">
      <h2>{title}</h2>
      {image && (
        <div className="mufasa-img-container1">
          <img src={image} alt={title} className="mufaa-image1" />
        </div>
      )}
      <div className="mufaa-text-container1">
        <p>{text}</p>
        <Link to="/booking/tickets" className="exhibition-button">Book tickets</Link>
      </div>
    </div>
  );
};

export default ExhibitionCard2;
