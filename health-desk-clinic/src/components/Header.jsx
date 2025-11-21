import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <div className="logo-icon">
            {/* Placeholder for logo icon */}
            <span className="plus-icon">+</span>
          </div>
          <div className="logo-text">
            <span className="health">HEALTH DESK</span>
            <span className="clinic">CLINIC</span>
          </div>
        </div>
        <nav className="nav">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Shop</a>
          <a href="#" className="nav-link">About Us</a>
          <a href="#" className="nav-link">FAQ</a>
          <a href="#" className="nav-link">Blog</a>
          <a href="#" className="nav-link">Contact Us</a>
        </nav>
        <div className="cart-icon">
          {/* Placeholder for cart icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
