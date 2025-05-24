import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/header.css';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1>Elia Locardi</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/tutorials">Tutorials</Link></li>
          <li><Link to="/workshops">Workshops</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;