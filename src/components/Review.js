import React from 'react';
import Menber from './imgs/member.jpg'

function ReviewSection() {
  return (
    <div className="review-section">
      <h2>Avaliação dos Membros</h2>
      <p className="quote">
        <span className="quote-icon">&ldquo;</span>
        O que realmente diferencia essa academia é a equipe de treinadores experientes. Eles são bem informados, acessíveis e genuinamente interessados em ajudar os membros a atingir seus objetivos de fitness. Eles dedicam tempo para entender as necessidades de cada um e criam planos de treino personalizados, garantindo segurança e resultados máximos.
      </p>
      <div className="rating">
        ★★★★★
      </div>
      <div className='container-menber'>
      <div className="member-info">
        <img src={Menber} alt="Jane Cooper" className="member-photo" />
        <div className="member-details">
          <p className="name">Jane Cooper</p>
          <p className="position">Desenvolvedora de Software</p>
        </div>
      </div>
      <div className="arrows">
        <span className="arrow">&larr;</span>
        <span className="arrow">&rarr;</span>
      </div></div>
    </div>
  );
}

export default ReviewSection;
