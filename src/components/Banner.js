import React from 'react';
import Modelo from './imgs/header.png'

function Banner() {
  return (
    <section className="banner" id="section">
      <div className="content">
        <p className="tagline">MELHOR FITNESS DA CIDADE</p>
        <h1>TRANSFORME SEU <br /> CORPO</h1>
        <p className="description">
          Liberte seu potencial e embarque em uma jornada para se tornar mais forte, em forma e confiante.
        </p>
        <button className="get-started">Comece Agora</button>
        <h2 className="watermark">FITNESS</h2>
      </div>
      <div className="image">
        <img src={Modelo} alt="Modelo Fitness" />
      </div>
    </section>
  );
}

export default Banner;
