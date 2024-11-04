import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Program from './components/Program';
import Classes from './components/Classes';
import Pricing from './components/Pricing';
import Review from './components/Review';
import Footer from './components/Footer';
import './App.css';
import Examples from './components/Examples';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      },
      { threshold: 0.2 }
    );

    // Seleciona todos os elementos com a classe 'section' e os observa
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="section"><Banner /></div>
      <div className="section"><Program /></div>
      <div className="section"><Examples/></div>
      <div className="section"><Classes /></div>
      <div className="section"><Pricing /></div>
      <Review />
      <Footer />
    </div>
  );
}

export default App;
