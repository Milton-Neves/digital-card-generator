import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img src="/assets/logo.svg" alt="Logo da Empresa" className="logo" />
        <h1 className="title">Gerador de Cartão de Visita</h1>
      </div>
    </header>
  );
};

export default Header;
