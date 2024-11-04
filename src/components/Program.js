import React from 'react';


function Program() {
  return (
    <section className="program-container" id="section">
      <div className="program-container">
        <h2>CONHEÇA NOSSO PROGRAMA</h2>
        <div className="program-cards">
          <div className="card">
            <div className="icon">
              <img src="https://img.icons8.com/?size=100&id=7318&format=png&color=000000" alt="Ícone de Força" />
            </div>
            <h3>Força</h3>
            <p>Descubra a essência da força nas suas várias dimensões - física, mental e emocional.</p>
            <button className="join-now">Junte-se Agora →</button>
          </div>
          <div className="card">
            <div className="icon">
              <img src="https://img.icons8.com/?size=100&id=581&format=png&color=000000" alt="Ícone de Bem-Estar Físico" />
            </div>
            <h3>Bem-Estar Físico</h3>
            <p>Inclui atividades que melhoram a saúde, força, flexibilidade e o bem-estar geral.</p>
            <button className="join-now">Junte-se Agora →</button>
          </div>
          <div className="card">
            <div className="icon">
              <img src="https://img.icons8.com/?size=100&id=916&format=png&color=000000" alt="Ícone de Perda de Gordura" />
            </div>
            <h3>Perda de Gordura</h3>
            <p>Combinamos rotinas de treino e orientação profissional para te ajudar a atingir suas metas.</p>
            <button className="join-now">Junte-se Agora →</button>
          </div>
          <div className="card">
            <div className="icon">
              <img src="https://img.icons8.com/?size=100&id=98076&format=png&color=000000" alt="Ícone de Ganho de Peso" />
            </div>
            <h3>Ganho de Peso</h3>
            <p>Nossa abordagem efetiva para ganho de peso de forma sustentável.</p>
            <button className="join-now">Junte-se Agora →</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Program;
