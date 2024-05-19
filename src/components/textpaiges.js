import React from "react";
import { Link } from "react-router-dom";
import '../styles/Exhicards.css';

const ExhibitionCard = ({ title, text, image }) => {
  return (
    <div className="card-link">
      <div className="exhibition-container">
        <div className="exhibition-image-container">
          <img src={image} alt={title} className="exhibition-image" />
        </div>
        <div className="exhibition-info">
          <h2 className="exhibition-title">{title}</h2>
          <p className="exhibition-text">{text}</p>
          <Link to="/booking/tickets" className="exhibition-button">
            Book tickets
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExhibitionCard;
