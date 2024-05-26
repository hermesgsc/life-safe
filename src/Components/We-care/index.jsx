import React from "react";
import "./wecare.css"; // Importe seu arquivo CSS aqui

const WeCare = () => {
  return (
    <section className="secao-com-imagem">
      <div className="conteudo">
        <div className="texto">
          <h1>Nós nos preocupamos com a segurança da sua família</h1>
          <p>+ de 1 milhão de clientes atendidos</p>
          <p>50 anos de ajudando milhares de famílias</p>
          <p>Franquias em todos os estados do Brasil</p>
          <p>Suporte 24 horas disponível</p>
        </div>
        <div className="logotipo-container">
        <img
            src="./images/mobilelogo2.png"
            alt="Seu Logotipo"
            className="logotipo"
          />
          </div>
      </div>
    </section>
  );
};

export default WeCare;
