import React from "react";
import Logo1 from './imgs/logo (1).png'

function Footer (){
    return(
        <div>
            <footer className="footer">
            <div className="footer-content">
              <div className="footer-brand">
                <h1><img src={Logo1} alt="logotype"></img></h1>
                <p>Dê o primeiro passo em direção a um "você" mais saudável e forte com nossos planos de preços imbatíveis. Vamos suar, conquistar e evoluir juntos!</p>
                <div className="social-icons">
                  <button className="social-icon"><img src="https://img.icons8.com/?size=28&id=118468&format=png&color=FFFFFF"></img></button>
                  <button className="social-icon"><img src="https://img.icons8.com/?size=28&id=32292&format=png&color=FFFFFF"></img></button>
                  <button className="social-icon"><img src="https://img.icons8.com/?size=28&id=437&format=png&color=FFFFFF"></img></button>
                </div>
              </div>
              <div className="footer-links">
                <div className="footer-column">
                  <h3>Empresa</h3>
                  <ul>
                    <li><button>Negócios</button></li>
                    <li><button>Franquia</button></li>
                    <li><button>Parceria</button></li>
                    <li><button>Rede</button></li>
                  </ul>
                </div>
                <div className="footer-column">
                  <h3>Sobre Nós</h3>
                  <ul>
                    <li><button>Blog</button></li>
                    <li><button>Segurança</button></li>
                    <li><button>Carreiras</button></li>
                  </ul>
                </div>
                <div className="footer-column">
                  <h3>Contato</h3>
                  <ul>
                    <li><button>Fale Conosco</button></li>
                    <li><button>Política de Privacidade</button></li>
                    <li><button>Termos & Condições</button></li>
                    <li><button>Calculadora de IMC</button></li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
    )
}

export default Footer;