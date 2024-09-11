import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <div className="container">
      <footer className="footer">
        <p className="privacy-policy">
          <a
            href="https://legal.rdstation.com/pt/privacy-policy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Política de Privacidade
          </a>
        </p>
        <p className="copyright">© 2023 Resultados Digitais</p>
      </footer>
    </div>
  );
};

export default Footer;
