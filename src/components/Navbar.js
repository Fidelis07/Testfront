import React from 'react';
import logotipo from './imgs/logo (1).png';

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <img src={logotipo} alt="logo" />
      </div>
      <nav className="menu">
        <ul>
          <li><button>Início</button ></li>
          <li><button>Programa</button ></li>
          <li><button>Serviços</button ></li>
          <li><button>Sobre</button ></li>
          <li><button>Comunidade</button ></li>
        </ul>
      </nav>
      <button className="join-menu">Junte-se Agora</button>
    </header>
  );
}

export default Navbar;
