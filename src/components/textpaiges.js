import React from "react";
import '../styles/Exhicards.css'; // Import your CSS file

const ExhibitionCard = ({ title, text, image }) => {
 
  return (
    <div className="card-link">
      <div className="exhibition-container" >
        <div className="exhibition-image-container">
          <img src={image} alt={title} className="exhibition-image" />
        </div>
        <div className="exhibition-info">
          <h2 className="exhibition-title">{title}</h2>
          <p className="exhibition-text">{text}</p>
          <a href="/visu-web/booking/tickets" className="exhibition-button">Book tickets</a>
        </div>
      </div>
    </div>
  );
};

export default ExhibitionCard;
