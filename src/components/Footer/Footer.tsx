import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p className="privacy-policy">
        <a href="https://legal.rdstation.com/pt/privacy-policy/" target="_blank" rel="noopener noreferrer">
          Política de Privacidade
        </a>
      </p>
      <p className="copyright">© 2023 Resultados Digitais</p>
    </footer>
  );
};

export default Footer;
