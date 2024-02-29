import React, { useState } from 'react';
import '../style.css';
import hamburgerIcon from '../../assets/hamburger-icon.png';
import logo from "../../assets/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img  id="logo-img" src={logo} alt="Logo" />
        </div>
        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          <a href="#home">Home</a>
          <a href="#work">About</a>
          <a href="#services">Services</a>
          <a href="#team">Team</a>
          <a href="#carrer">Carrer</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
        <img  id="menu" src={hamburgerIcon} alt="Menu" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
