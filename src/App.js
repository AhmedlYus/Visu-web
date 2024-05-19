import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Exhibitions from './pages/Exhibitions';
import ExhibitionsNotime from './pages/ExhibitionsNotime';
import ExhibitionsSpectre from './pages/ExhibitionSpectre';
import CasinoRoyale from './pages/ExhibitionCasino';
import QuantumofSol from './pages/QuantumSolace';
import Booking from './pages/Booking';
import BookingTickets from './pages/BookingTickets';
import BookingRental from './pages/BookingRental';
import Contact from './pages/Contact';
import About from './pages/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/exhibitions" element={<Exhibitions />} />
          <Route path="/exhibitions/notime" element={<ExhibitionsNotime />} />
          <Route path="/exhibitions/spectre" element={<ExhibitionsSpectre />} />
          <Route path="/exhibitions/Casino-royale" element={<CasinoRoyale />} />
          <Route path="/exhibitions/solace" element={<QuantumofSol />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/booking/tickets" element={<BookingTickets />} />
          <Route path="/booking/rental" element={<BookingRental />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
