import React from 'react';
// import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="title">MOVIE-APP</div>
      <div className="right-section">
        <div className="card-icon">
          <img className="fa-shopping-cart" src='https://cdn-icons-png.flaticon.com/512/70/70021.png'></img>
          <span className="card-count">3</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
