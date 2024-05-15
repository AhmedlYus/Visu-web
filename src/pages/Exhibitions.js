import React from 'react'
import CardBanners from '../components/testbanners';
import noTimeBond from '../assets/NotimeBond.jpg';
import spectreBond from '../assets/spectreBond.jpg';
import VisitCards from '../components/VisitCards';
import AstonMartin2 from '../assets/astonMartin2.jpg';
import Lotus from '../assets/Lotus.jpeg';
import jaguar from '../assets/JaguarEtype.jpg';
import MuseumMap from '../assets/007musem-map.jpg';
import tiger900 from '../assets/tiger900.jpg';
import triumph from '../assets/triumph.jpg';
import bmw from '../assets/BMW_1200C.jpg';

const Exhibitions = () => {
  const cards = [
    {
      title: "No time to die",
      text: "Bonds final mission",
      exhibitionArea: "Area 5",
      bookNowLink: "/exhibitions/notime",
      image: noTimeBond,
      backgroundColor: "#088F8F",
    },
    {
      title: "Spectre",
      text: "Bond unravels spectre",
      exhibitionArea: "Area 5", 
      bookNowLink: "/exhibitions/spectre",
      image: spectreBond,
      backgroundColor: "#002c3d",
    }
  ];
  const museumCards = [
    {
      image: jaguar,
      title: "Jaguar E-Type",
      description: "Experience the Legendary E-Type from Casino Royale 1967 amongst our exhibiton",
    },
    {
      image: Lotus,
      title: "Lotus Espirit",
      description:
        "From the movie Your Eyes Only 1981, see tha car on display.",
    },
    {
      image: AstonMartin2,
      title: "Rent Aston Martin",
      description:
        "The sleek Aston Martin Vantage from Casino Royale 2008 showcased and available for rent.",
    },
  ];
  const museumCards2 = [
    {
      image: tiger900,
      title: "Tiger 900",
      description: "Motorcycle from No time To Die (2021)",
    },
    {
      image: bmw,
      title: "BMW R 1200",
      description:
        "Set bike from Tomorrow Never Dies (1997)",
    },
    {
      image: triumph,
      title: "Triump Speed - Special Edition",
      description:
        "Special Edition bike engraved with all 25 Bond movies",
        bookNowLink: '',
    },
  ];
  return(
    <div>
      <div className='mainSection'>
      <div style={{ margin: '20px 0' }}></div>
        <div className='exhi-header'>
        <h1>Time limited Exhibition</h1>
        </div>
        <CardBanners cards={cards} />
        <div style={{ margin: '20px 0' }}></div>
        <div className='section-line'>
        </div>
        <div className='visit-header'>
        <h1>Car Collections</h1>
        </div>
        <VisitCards museumCards={museumCards}/>
        <div className='section-line'></div>
        <div className='visit-header'>
        <h1>Motorcycle Collections</h1>
        </div>
        <VisitCards museumCards={museumCards2}/>
        <div className='visit-header'>
        <h1>Museum Map</h1>
        </div>
      </div>
      <div className='Musum-map'>
        <img src={MuseumMap} alt="Museum Map" />
        </div>
    </div>
  );
}

export default Exhibitions;
