import React from "react";
import Class1 from './imgs/class-1.jpg'
import Class2 from './imgs/class-2.jpg'

function Examples  (){
    return(
        <div>
             <div className="class-section">
      <div className="imgs-class">
          <img src={Class1} alt="Imagem da Aula Fitness" className="class-image" />
          <img src={Class2} alt="Imagem da Aula Fitness" className="class-image2" />
        </div>
        <div className="class-text">
          <h2>AS AULAS QUE VOCÊ ENCONTRARÁ AQUI</h2>
          <p>
            Lideradas por nossa equipe de instrutores experientes e motivadores, "As Aulas Que Você Encontrará Aqui" são sessões de alta energia e resultados, que combinam um mix perfeito de cardio, treino de força e exercícios funcionais.
          </p>
          <p>
            Cada aula é cuidadosamente planejada para mantê-lo engajado e desafiado, garantindo que você nunca chegue a um platô em seus esforços de fitness.
          </p>
        </div>
      </div>
        </div>
    )
}

export default Examples;