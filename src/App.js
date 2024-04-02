import React from 'react';
import './App.css';
import Header from './component/Header';
import AboutMe from './component/AboutMe';
import MyAbilities from './component/Abilities';
import ContactMe from './component/Contact';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <div className="cloud-overlay"></div>
      <Header />
      <AboutMe />
      <MyAbilities />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
