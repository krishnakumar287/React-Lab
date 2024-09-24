// src/App.js
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Button from './components/Button';

function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="App">
      <Header />
      <Home />
      <Button text="Learn More" onClick={handleClick} />
      <Footer />
    </div>
  );
}

export default App;
