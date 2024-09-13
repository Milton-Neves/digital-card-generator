import React from "react";
import { useNavigate } from "react-router-dom";
import "./ResultPage.css";

interface BusinessCardInfo {
  name: string;
  phone: string;
  email: string;
}

const ResultPage: React.FC = () => {
  const navigate = useNavigate();
  const cardInfo: BusinessCardInfo = {
    name: "Nome e Sobrenome",
    phone: "(00) 0000-0000",
    email: "meuemail@email.com",
  };

  const handleBack = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="result-container">
      {/* Botão para gerar outro cartão */}
      <div className="test1">
        <button className="back-button" onClick={handleBack}>
          <span className="flex-center" aria-label="Gerar outro cartão">
            <img src="/assets/arrow-left.svg" alt="seta indicando retorno" />
            <p id="btn-text">Gerar outro cartão</p>
          </span>
        </button>

        {/* Cartão estilizado */}
        <div className="card">
          <img src="/assets/icon-logo.svg" alt="Logo" className="card-logo" />
          <div className="card-line"></div>
          <div className="card-info">
            <p className="card-name">{cardInfo.name}</p>
            <p className="card-phone">{cardInfo.phone}</p>
            <p className="card-email">{cardInfo.email}</p>
          </div>
        </div>

        {/* Botão de download desabilitado */}

        <button type="submit" className="download-button">
          <span className="flex-center" aria-label="Gerar cartão grátis">
            <img
              src="/assets/arrow-down.svg"
              alt="seta indicando próximo passo"
            />
            <p id="btn-text">BAIXAR CARTÃO</p>
          </span>
        </button>
      </div>
      <div className="test3">
        {/* Link para o teste grátis no RD Station */}
        <a
          className="signup-link"
          href="https://app.rdstation.com.br/signup"
          target="_blank"
          rel="noopener noreferrer"
        >
          fazer um teste grátis do RD Station Marketing
        </a>
        <img src="/assets/arrow-right.svg" alt="seta indicando próximo passo" />
      </div>
    </div>
  );
};

export default ResultPage;
