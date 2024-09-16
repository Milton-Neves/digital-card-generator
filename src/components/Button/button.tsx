import React from "react";
import "./button.css";

interface ButtonProps {
  text: string;
  iconPosition?: "left" | "right";
  iconSrc: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  iconPosition = "right",
  iconSrc,
  onClick,
  type = "submit",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      className={`btn-submit ${
        iconPosition === "left" ? "icon-left" : "icon-right"
      } ${disabled ? "result-button" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="flex-center" aria-label={text}>
        {iconPosition === "left" && <img src={iconSrc} alt="ícone" />}
        <p id="btn-text">{text}</p>
        {iconPosition === "right" && <img src={iconSrc} alt="ícone" />}
      </span>
    </button>
  );
};

export default Button;
