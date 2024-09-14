import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputMask from "react-input-mask";
import { useNavigate } from "react-router-dom";

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
    .test('len', 'Número de telefone inválido', (value) => {
      const phone = value ? value.replace(/\D/g, '') : '';
      return phone.length === 10 || phone.length === 11;
    })
});

// Função para remover a máscara do telefone
const removeMask = (value: string) => {
  return value.replace(/\D/g, ''); // Remove todos os caracteres que não são números
};

type FormData = {
  name: string;
  email: string;
  phone: string;
};

const FormComponent: React.FC = () => {
  const { register, handleSubmit, formState: { errors, isValid }, control, reset } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onChange" // Recalcula a validação a cada alteração
  });

  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    try {
      // Atualizar telefone sem máscara antes de enviar os dados
      const dataWithoutMask = {
        ...data,
        phone: removeMask(data.phone),
      };
      console.log("Dados sem máscara:", dataWithoutMask);

      // Salvar os dados no localStorage
      localStorage.setItem("businessCardData", JSON.stringify(dataWithoutMask));

      // Navegar para a página de resultado
      navigate("/resultado");
    } catch (error) {
      console.log('Erro ao enviar o formulário:', error);
    }
  };

  return (
    <div className="form-container">
      <div className="title">
        <h1>Gerador de Cartão de Visita</h1>
        <p>
          Crie grátis seu cartão de visita em passos rápidos! Você o insere no
          Instagram e demais canais digitais.
        </p>
      </div>
      <div className="content">
        <div className="image">
          <img src="/assets/image.svg" alt="imagem ilustrativa" />
        </div>
        <div className="form-content">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="name">Nome* </label>
              <input
                id="name"
                placeholder="Digite seu nome"
                {...register("name")}
              />
              {errors.name && <p className="error">{errors.name.message}</p>}
            </div>

            <div className="form-inline">
              <div className="form-group">
                <label htmlFor="phone">Telefone* </label>
                <Controller
                  control={control}
                  name="phone"
                  render={({ field }) => (
                    <InputMask
                      {...field}
                      id="phone"
                      placeholder="(00) 0 0000-0000"
                      mask="(99) 9 9999-9999"
                    />
                  )}
                />
                {errors.phone && (
                  <p className="error">{errors.phone.message}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail* </label>
                <input
                  id="email"
                  placeholder="nome@email.com"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="error">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="info">
              <ul>
                <li>
                  Ao preencher o formulário, concordo * em receber comunicações
                  de acordo com meus interesses.
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

            <button type="submit" className="btn-submit" disabled={!isValid}>
              <span className="flex-center" aria-label="Gerar cartão grátis">
                <p id="btn-text">GERAR CARTÃO GRÁTIS</p>
                <img
                  src="/assets/arrow-right-btn.svg"
                  alt="seta indicando próximo passo"
                />
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
