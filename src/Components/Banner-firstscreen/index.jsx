import React from 'react';
import "./firstscreen.css";

const Banner = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="container-banner">
      <div className="banner-logo">
        <img className="logo background" src="./images/mobile1.jpg" alt="Mobile" />
        <img className="logo overlay" src="./images/mobilelogo1.png" alt="Mobile Logo" />
        <a href="#Lead" className="banner-button" onClick={handleClick}>Contato</a>
      </div>
    </section>
  );
};

export default Banner;
