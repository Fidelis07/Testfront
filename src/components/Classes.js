import React from 'react';
import Join from './imgs/join.jpg'

function Introduction() {
  return (
    <section className="introducao" id="section">
      <div className="why-join-container">
        <h2>POR QUE SE JUNTAR A NÓS?</h2>
        <p className="description">
          Nossa diversidade de membros cria um ambiente amigável e de apoio, onde você pode fazer amigos e se manter motivado.
        </p>
        <div className='benefit-image-container'>
        <div className="image-container">
          <img src={Join} alt="Imagem da Academia" />
        </div>
      
        <div className="benefit-cards">
          <div className="benefit-card">
            <div className="icon">
              <img src="https://img.icons8.com/?size=100&id=oRBt2rHxvhPg&format=png&color=000000" alt="Ícone de Treinador Pessoal" />
            </div><div className='container-card'><h3>Treinador Pessoal</h3>
            
            <p>Desperte seu potencial com nossos treinadores pessoais especializados.</p></div>
          </div>
          <div className="benefit-card">
            <div className="icon">
              <img src="https://img.icons8.com/?size=100&id=7318&format=png&color=000000" alt="Ícone de Sessões Práticas" />
            </div><div className='container-card'><h3>Sessões Práticas</h3>
            
            <p>Melhore seu condicionamento físico com sessões práticas.</p></div>
          </div>
          <div className="benefit-card">
            <div className="icon">
              <img src="https://img.icons8.com/?size=100&id=2744&format=png&color=000000" alt="Ícone de Boa Gestão" />
            </div><div className='container-card'>
            <h3>Boa Gestão</h3>
            <p>Gestão de apoio para o sucesso em sua jornada fitness.</p></div>
          </div>
        </div></div>
      </div>
    </section>
  );
}

export default Introduction;
