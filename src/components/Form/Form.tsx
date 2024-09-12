import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputMask from "react-input-mask";
import "./Form.css";

// Montar esquema de validação com Yup
const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, "O nome deve ter no mínimo 2 caracteres")
    .required("Nome é obrigatório"),
  email: yup
    .string()
    .email("Digite um e-mail válido")
    .required("E-mail é obrigatório"),
  phone: yup
    .string()
    .required("Telefone é obrigatório")
    .matches(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, "Telefone inválido"),
});

type FormData = {
  name: string;
  email: string;
  phone: string;
};

const FormComponent: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="form-container">
      <div className="test">
        <h1>Gerador de Cartão de Visita</h1>

        <p>
          Crie grátis seu cartão de visita em passos rápidos! Você o insere no
          Instagram e demais canais digitais.
        </p>
      </div>
      <div className="test2">
        <div className="test3">
          <img src="/assets/image.svg" alt="imagem ilustrativa" />
        </div>
        <div className="test4">
          <form>
            <div className="form-group">
              <label htmlFor="name">Nome* </label>
              <input
                id="name"
                placeholder="Digite seu nome"
                {...register("name")}
              />
              {errors.name && <p className="error">{errors.name.message}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="phone">Telefone* </label>
              <InputMask
                id="phone"
                placeholder="(00) 0 0000-0000"
                mask="(99) 9999[9]-9999"
                {...register("phone")}
              />
              {errors.phone && <p className="error">{errors.phone.message}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail* </label>
              <input
                id="email"
                placeholder="nome@email.com"
                {...register("email")}
              />
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>
          </form>

          <div className="info">
            <ul>
              <li>
                Ao preencher o formulário, concordo * em receber comunicações de
                acordo com meus interesses.
              </li>
              <li>
                Ao informar meus dados, eu concordo com a{" "}
                <a
                  href="https://legal.rdstation.com/pt/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Política de Privacidade
                </a>
              </li>
            </ul>
            <p>
              * Você pode alterar suas permissões de comunicação a qualquer
              tempo.
            </p>
          </div>
          <button type="submit" className="btn-submit">
            <span className="flex-center" aria-label="Gerar cartão grátis">
              <p id="btn-text">GERAR CARTÃO GRÁTIS</p>
              <img
                src="/assets/arrow-right-btn.svg"
                alt="seta indicando próximo passo"
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
