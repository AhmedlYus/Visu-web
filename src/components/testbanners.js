import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/testBanner.css';

const MovieCard = ({ title, text, exhibitionArea, bookNowLink, image, backgroundColor }) => {
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
      <div className="poster-container" onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <div className="info-container" style={infoContainerStyle}>
          <div className="info">
            <h2 className="movie-title">{title}</h2>
            <p className="text">{text}</p>
            <div className="text-container">
              <div className="circle-link">
                <div className="book-now-link"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="movie-img-container">
          <img src={image} alt={title} className="movie-img" />
        </div>
      </div>
    </Link>
  );
};

const CardBanners = ({ cards }) => (
  <main className="movie-showcase">
    <div className="movie-list">
      {cards.map((card, index) => (
        <MovieCard key={index} {...card} />
      ))}
    </div>
  </main>
);

export default CardBanners;
