import React from 'react';
import "./firstscreen.css";

const Banner = () => {
  return (
    <section className="container-banner">
      <div className="banner-logo">
        <img className="logo background" src="./images/mobile1.jpg" alt="Mobile" />
        <img className="logo overlay" src="./images/mobilelogo1.png" alt="Mobile Logo" />
        <button className="banner-button">Contato</button>
      </div>
    </section>
  );
};

export default Banner;
