import React from 'react';
import './home.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <section className="home-hero-container">
        <div className="hero-image-container">
          <div className="hero-content">
            <h1>
              UrbanEase: <span>Explore with Our Subway Network</span>
            </h1>
            <p>
              Experience the heartbeat of the city with CityConnect's subway system. Seamlessly explore urban treasures via our comprehensive underground
              routes. Effortless navigation, endless discoveries.
            </p>
            <div className="overlay-home"></div>
          </div>
        </div>
      </section>

      <section className="home-info-container">
        <div>
          <h2>Why Choose Our Subway System?</h2>
          <div className="info-content">
            <ul>
              <li>Fast and reliable transportation</li>
              <li>Extensive network covering the entire city</li>
              <li>Affordable fares for all passengers</li>
              <li>Accessible stations with modern facilities</li>
            </ul>
            <img
              className="info-content-img"
              src="https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVuZWZpdHN8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="home-contact-container">
        <div>
          <h2>Contact Us</h2>
          <p>We will get back to you asap!</p>
        </div>
        <form className="contact-us-form">
          <div>
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>
          <input type="email" placeholder="Email" required />
          <input type="phone" placeholder="phone number" required />
          <button type="submit">Send</button>
        </form>
        <p>You may also call us at XXX-XX-XX</p>
      </section>
    </div>
  );
};

export default HomePage;
