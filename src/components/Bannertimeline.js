import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Bannertime.css';

const Banner = ({ title, text, bookNowLink, image, backgroundColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const infoContainerStyle = {
    backgroundColor: isHovered ? backgroundColor : "#312f2f",
    transition: "background-color 0.5s ease",
  };

  return (
    <Link to={bookNowLink} className="card-link">
      <div className="Big-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="book-now-link"></div>
        <div className="Poster-img-container">
          <img src={image} alt={title} className="Poster-img" />
        </div>
      </div>
      <div className="Poster-text"></div>
    </Link>
  );
};

const BannerTime = ({ cards }) => (
  <main className="Poster-showcase">
    <div className="Poster-list">
      {cards.map((card, index) => (
        <Banner key={index} {...card} />
      ))}
    </div>
  </main>
);

export default BannerTime;
