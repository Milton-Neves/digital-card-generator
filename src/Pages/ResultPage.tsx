import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ResultPage.css";
import Button from "../components/Button/button";

interface BusinessCardInfo {
  name: string;
  phone: string;
  email: string;
}

const ResultPage: React.FC = () => {
  const navigate = useNavigate();
  const [cardInfo, setCardInfo] = useState<BusinessCardInfo>({
    name: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    const savedData = localStorage.getItem("businessCardData");
    if (savedData) {
      setCardInfo(JSON.parse(savedData));
    }
  }, []);

  const handleBack = () => {
    navigate("/", { replace: true });
  };

  const handleResultClick = () => {};

  return (
    <div className="result-container">
      <img id="image" src="/assets/image.svg" alt="imagem ilustrativa" />
      <div className="content">
        <button className="back-button" onClick={handleBack}>
          <span className="flex-center" aria-label="Gerar outro cartão">
            <img src="/assets/arrow-left.svg" alt="seta indicando retorno" />
            <p id="btn-text">Gerar outro cartão</p>
          </span>
        </button>
        <div className="card">
          <img src="/assets/icon-logo.svg" alt="Logo" className="card-logo" />
          <div className="card-line"></div>
          <div className="card-info">
            <p>{cardInfo.name}</p>
            <p>{cardInfo.phone}</p>
            <p>{cardInfo.email}</p>
          </div>
        </div>

        <Button
          text="BAIXAR CARTÃO"
          iconPosition="left"
          iconSrc="/assets/arrow-down.svg"
          onClick={handleResultClick}
          disabled={true}
          isResultButton={true}
        />
        <div className="link-button">
          <a
            className="signup-link"
            href="https://app.rdstation.com.br/signup"
            target="_blank"
            rel="noopener noreferrer"
          >
            fazer um teste grátis do RD Station Marketing
          </a>
          <img
            src="/assets/arrow-right.svg"
            alt="seta indicando próximo passo"
          />
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
