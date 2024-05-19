import React from 'react';
import { Link } from 'react-router-dom';
import BannerTime from '../components/Bannertimeline';

const Homebanner = ({ cards, releaseYear, description, link }) => {
  return (
    <div className="grid-container">
      <div className="card-banner">
        <BannerTime cards={cards} />
      </div>
      <div className="Fillers">
        <div className='text-container'>
          <h3>Released {releaseYear}</h3>
          <p>{description}</p>
        </div>
        <Link to={link} className="homepage-button">
          <button>See more</button>
        </Link>
      </div>
    </div>
  );
};

export default Homebanner;