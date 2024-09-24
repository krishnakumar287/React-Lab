import React from "react";
import './Home.css'; // Importing CSS for Home page

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Simple E-commerce</h1>
      <p>Discover our collection of the latest gadgets and electronics!</p>
      <img
        src="https://via.placeholder.com/600x300"
        alt="E-commerce banner"
        className="home-banner"
      />
    </div>
  );
};

export default Home;
