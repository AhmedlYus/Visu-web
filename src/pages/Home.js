import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import HeroSection from '../pages/HomeHero';
import SignupBanner from '../components/SignupBanner';
import BannerTime from '../components/Bannertimeline';
import Collections from '../components/Collections';
import hovercraft from '../assets/bond_warwick_hover.jpg';
import oscarStatue from '../assets/oscar_statue007.jpg';
import watches from '../assets/omega_spectre_007museum.jpg';
import jbNotime from '../assets/BondalternateNotime.jpg';
import QOposter from '../assets/QOSposter.jpg';
import spectrebanner from '../assets/007dotcom-Poster-Spectre.webp';
import casinoroyal from '../assets/1366_2000.jpg';

const Home = () => {
  const cards = [
    {
      bookNowLink: "/visu-web/exhibitions/notime",
      image: jbNotime,
      backgroundColor: "#1f5260",
    },
  ];
  const cards2 = [
    {
      bookNowLink: "/visu-web/exhibitions/spectre",
      image: spectrebanner,
      backgroundColor: "#002c3d",
    },
  ];
  const cards3 = [
    {
      bookNowLink: "/visu-web/exhibitions/casino-royale",
      image: casinoroyal,
      backgroundColor: "#002c3d",
    },
  ];
  const cards4 = [
    {
      bookNowLink: "/visu-web/exhibitions/solace",
      image: QOposter,
      backgroundColor: "#656465",
    },
  ];

  const collectionCards = [
    {
      image: oscarStatue,
      title: "Oscar Award",
      description: "Oscar statue on display",
      bookNowLink: '#',
    },
    {
      image: watches,
      title: "Watch Collections",
      description: "View all the James Bond watch collections in the museum",
      bookNowLink: '#',
    },
    {
      image: hovercraft,
      title: "Vehicle Collections",
      description: "Everything from set cars to aircraft and hoverboats",
      bookNowLink: '#',
    },
  ];

  return (
    <div>
      <HeroSection />
      <div className='mainSection'>
        <div className='exhi-header'>
          <h1>Exhibitions and attractions</h1>
        </div>
        <div className="grid-container">
          <div className="card-banner">
            <BannerTime cards={cards} />
          </div>
          <div className="Fillers">
            <div className='text-container'>
              <h3>Released 2021</h3>
              <p>
                As Daniel Craig's nearly two decades era as James <br />
                Bond closes its chapter. Agent 007 ventures on his final mission.
                <br /><br />
                See cars, bikes and spy gadgets used in <br />
                the movie on display in 007 Museum
              </p>
            </div>
            <Link to="/visu-web/exhibitions/notime" className="homepage-button">
              <button>See more</button>
            </Link>
          </div>
        </div>
        <div style={{ margin: '20px 0' }}></div>
        <div className="grid-container">
          <div className="Fillers">
            <div className='text-container'>
              <h3>Released 2015</h3>
              <p>
                Bond unravels spectre with new action <br />
                As always 007 Museum have acquired objects <br />
                from the movie on this display <br /><br />
                Visit the museum for a thrilling adventure, <br />
                you won't forget the life of the world's most famous spy
              </p>
            </div>
            <Link to="/visu-web/exhibitions/spectre" className="homepage-button">
              <button>See more</button>
            </Link>
          </div>
          <div className="card-banner">
            <BannerTime cards={cards2} />
          </div>
        </div>
        <div style={{ margin: '20px 0' }}></div>
        <div className="grid-container">
          <div className="card-banner">
            <BannerTime cards={cards4} />
          </div>
          <div className="Fillers">
            <div className='text-container'>
              <h3>Released 2008</h3>
              <p>
                As Daniel Craig's nearly two decades era as James Bond closes its chapter. <br />
                Agent 007 ventures on his final mission. See cars, bikes, and spy gadgets used <br />
                in the movie on display in 007 Museum. This is the end to Daniel Craig's era.
              </p>
            </div>
            <Link to="/visu-web/exhibitions/solace" className="homepage-button">
              <button>See more</button>
            </Link>
          </div>
        </div>
        <div className="grid-container">
          <div className="Fillers">
            <div className='text-container'>
              <h3>Released 2006</h3>
              <p>
                Casino Royale brings excitement marking Daniel Craig's first start as Agent 007 <br /><br />
                The museum has a collection of watches, and the infamous Aston Martin DBS Vantage <br />
                available for rental can be found under Bookings/rental.
              </p>
            </div>
            <Link to="/visu-web/exhibitions/casino-royale" className="homepage-button">
              <button>See more</button>
            </Link>
          </div>
          <div className="card-banner">
            <BannerTime cards={cards3} />
          </div>
        </div>
        <SignupBanner />
        <div className='visit-header'>
          <h1>Collections</h1>
        </div>
        <Collections collectionCards={collectionCards} />
      </div>
    </div>
  );
}

export default Home;
