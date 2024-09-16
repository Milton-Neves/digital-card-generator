import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputMask from "react-input-mask";
import { useNavigate } from "react-router-dom";

import "./Form.css";
import Button from "../../components/Button/button";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Nome é obrigatório")
    .min(2, "O nome deve ter no mínimo 2 caracteres"),
  email: yup
    .string()
    .email("Digite um e-mail válido")
    .required("E-mail é obrigatório"),
  phone: yup
    .string()
    .required("Telefone é obrigatório")
    .test("len", "Número de telefone inválido", (value) => {
      const phone = value ? value.replace(/\D/g, "") : "";
      return phone.length === 10 || phone.length === 11;
    }),
});

const removeMask = (value: string) => {
  return value.replace(/\D/g, "");
};

type FormData = {
  name: string;
  email: string;
  phone: string;
};

const FormComponent: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    control,
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    try {
      const dataWithoutMask = {
        ...data,
        phone: removeMask(data.phone),
      };

      localStorage.setItem("businessCardData", JSON.stringify(dataWithoutMask));

      navigate("/resultado");
    } catch (error) {}
  };

  return (
    <div className="form-container">
      <div className="title">
        <h1>Gerador de Cartão de Visita</h1>
        <p id="title">
          Crie grátis seu cartão de visita em passos rápidos! Você o insere no
          Instagram e demais canais digitais.
        </p>
      </div>
      <div className="content">
        <img src="/assets/image.svg" alt="imagem ilustrativa" />
        <div className="form-content">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="name">Nome* </label>
              <input
                id="name"
                placeholder="digite seu nome"
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
                  rules={{ required: "O telefone é obrigatório" }}
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
            <Button
              text="GERAR CARTÃO GRÁTIS"
              iconPosition="right"
              iconSrc="/assets/arrow-right-btn.svg"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
