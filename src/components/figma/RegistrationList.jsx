import React, { useState } from "react";
import Googleicon from "../../assets/icons/google-icon.png";
import BackImage from "../../assets/image/bacground-image.png";
import {
  Buttton,
  GoogleConteiner,
  Heading,
  Icon,
  Inputs,
  InputsConteiner,
  Labels,
  Text,
  Paragraph,
  RegistrationCard,
  Conteiner,
  Error,
} from "./Styled";

const RegistrationList = () => {
  const googleAcc = () => {
    alert("you don not have any accaunt");
  };
  const [inputValue, setInputValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [error, setError] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [buttonsColor, setButtonsColor] = useState(true);

  const changeLogin = (e) => {
    setInputValue(e.target.value);
    if (e.target.value === "") {
      setError("Поле не должно быть пустым");
      setButtonsColor(false);
    } else if (inputValue.length < 3) {
      setError("Имя должно составить минимум 3 букв ");
      setButtonsColor(false);
    } else {
      setError("");
    }
  };

  const changePassword = (e) => {
    setPasswordValue(e.target.value);
    if (e.target.value === "") {
      setButtonsColor(false);

      setErrorPassword("Поле не должно быть пустым");
    } else if (passwordValue.length < 8) {
      setErrorPassword("Пароль должен содержать 8 символов");
      setButtonsColor(false);
    } else if (
      inputValue !== "" &&
      passwordValue !== "" &&
      passwordValue.length > 8 &&
      inputValue.length > 3
    ) {
      setButtonsColor(true);
    } else {
      setErrorPassword("");
    }
  };

  const buttonValid = (e) => {
    if (inputValue === "" && passwordValue === "") {
      e.preventDefault();
      setError("Поле не должно быть пустым");
      setErrorPassword("Поле не должно быть пустым");
      setButtonsColor(false);
    } else if (passwordValue.length < 8) {
      e.preventDefault();
      setErrorPassword("Пароль должен содержать 8 символов");
      setButtonsColor(false);
    } else if (inputValue.length < 3) {
      setError("Имя должно составить минимум 3 букв ");
      setButtonsColor(false);
    } else {
      alert(` login: ${inputValue} \n password: ${passwordValue}`);
    }
  };

  return (
    <>
      <Conteiner $image={BackImage}>
        <RegistrationCard onSubmit={buttonValid}>
          <Heading>Вход в аккаунт</Heading>
          <InputsConteiner>
            <Labels>Логин</Labels>
            <Inputs
              value={inputValue}
              onChange={changeLogin}
              placeholder="Логин"
            />
            <Error>{error}</Error>
          </InputsConteiner>
          <InputsConteiner>
            <Labels>Пароль</Labels>
            <Inputs
              type="password"
              value={passwordValue}
              onChange={changePassword}
              placeholder="Пароль"
            />
            <Error>{errorPassword}</Error>
          </InputsConteiner>
          <Paragraph>Или</Paragraph>
          <InputsConteiner>
            <GoogleConteiner onClick={googleAcc}>
              <Icon src={Googleicon} />
              <Text>Войти через Google</Text>
            </GoogleConteiner>
          </InputsConteiner>
          <Buttton
            type="submit"
            $bgcolor={
              buttonsColor === true
                ? "linear-gradient(180deg, #000 0%, #000 100%)"
                : "grey"
            }
          >
            Вход
          </Buttton>
        </RegistrationCard>
      </Conteiner>
    </>
  );
};

export default RegistrationList;
