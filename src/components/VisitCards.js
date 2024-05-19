
import React from 'react';
import '../styles/VisitCard.css'; 

const MuseumCard = ({ image, title, description, bookNowLink }) => {
  return(
    <div>
      <div className="museum-container">
        <div className="Museumbox-container">
          <div className='info'>
            <div className='Museum-img-con'>
              <img src={image} alt={title} className="museum-card-image" />
              </div>
            <div className="museum-card-content">
              <h3 className="museum-card-title">{title}</h3>
              <p className="museum-card-description">{description}</p>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
};


const VisitCards = ({museumCards}) => {
    return (
        <section className="museum-section">
          <div className="museum-grid">
            {museumCards.map((card, index) => (
              <MuseumCard key={index} {...card} />
            ))}
          </div>
        </section>
      );
  }
  
export default VisitCards;
