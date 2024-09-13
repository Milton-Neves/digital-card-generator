import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ResultPage.css";

const ResultPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state as {
    name: string;
    email: string;
    phone: string;
  };

  const handleBack = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="result-container">
      {/* Botão para gerar outro cartão */}
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
        {/* <div className="card-info">
          <p className="card-name">{formData?.name}</p>
          <p className="card-phone">{formData?.phone}</p>
          <p className="card-email">{formData?.email}</p>
        </div> */}
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

      {/* Link para o teste grátis no RD Station */}
      <a
        className="signup-link"
        href="https://app.rdstation.com.br/signup"
        target="_blank"
        rel="noopener noreferrer"
      >
        fazer um teste grátis do RD Station Marketing
      </a>
    </div>
  );
};

export default ResultPage;
