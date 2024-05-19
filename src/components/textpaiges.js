import React from "react";
import { Link } from "react-router-dom";
import '../styles/Exhicards.css';

const ExhibitionCard = ({ title, text, image1, image2 }) => {
  return (
    <div className="mufasa-container">
      <h2>{title}</h2>
      {(image1 || image2) && (
        <div className="mufasa-img-container">
          {image1 && <img src={image1} alt={title} className="mufaa-image" />}
          {image2 && <img src={image2} alt={title} className="mufaa-image" />}
        </div>
      )}
      <div className="mufaa-text-container">
        <p>{text}</p>
        <Link to="/booking/tickets">Book tickets</Link>
      </div>
    </div>
  );
};

export default ExhibitionCard;
