import React from 'react';

function Pricing() {
  return (
    <section className="valores" id="section">
      <div className="pricing-section">
        <h1>Nossos Planos de Preços</h1>
        <p>Nossos planos de preços incluem diversas categorias de associação, cada uma voltada para diferentes preferências e metas de fitness.</p>
        
        <div className="pricing-cards">
          <div className="card">
            <h2>Plano Básico</h2>
            <p className="price">R$ 16</p>
            <hr />
            <ul>
              <li> <img src='https://img.icons8.com/?size=12&id=59733&format=png&color=d79447'></img> Plano de treino inteligente</li>
              <li> <img src='https://img.icons8.com/?size=12&id=59733&format=png&color=d79447'></img> Treinos em casa</li>
            </ul>
            <button>Junte-se Agora</button>
          </div>
    
          <div className="card">
            <h2>Plano Semanal</h2>
            <p className="price">R$ 25</p>
            <hr />
            <ul>
              <li> <img src='https://img.icons8.com/?size=12&id=59733&format=png&color=d79447'></img> Academias PRO</li>
              <li> <img src='https://img.icons8.com/?size=12&id=59733&format=png&color=d79447'></img> Plano de treino inteligente</li>
              <li> <img src='https://img.icons8.com/?size=12&id=59733&format=png&color=d79447'></img> Treinos em casa</li>
            </ul>
            <button>Junte-se Agora</button>
          </div>
    
          <div className="card">
            <h2>Plano Mensal</h2>
            <p className="price">R$ 45</p>
            <hr />
            <ul>
              <li> <img src='https://img.icons8.com/?size=12&id=59733&format=png&color=d79447'></img> Academias e Aulas ELITE</li>
              <li> <img src='https://img.icons8.com/?size=12&id=59733&format=png&color=d79447'></img> Academias PRO</li>
              <li> <img src='https://img.icons8.com/?size=12&id=59733&format=png&color=d79447'></img> Plano de treino inteligente</li>
              <li> <img src='https://img.icons8.com/?size=12&id=59733&format=png&color=d79447'></img> Treinos em casa</li>
              <li> <img src='https://img.icons8.com/?size=12&id=59733&format=png&color=d79447'></img> Treinamento Pessoal</li>
            </ul>
            <button>Junte-se Agora</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
