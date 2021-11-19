import React from "react";
import { Input } from "../../components/input/input";
import {
  loginInputSecondaryText,
  passwordInputSecondaryText,
  subloginHint,
  subLoginInputSecondaryText,
} from "../../data/globalVariables";

import s from "./style.module.scss";

interface IInputWrapper {
  login: InputValue;
  setLogin: Function;
  sublogin: InputValue;
  setSubLogin: Function;
  password: InputValue;
  setPassword: Function;
  isValid: IsValidFlag;
}

function InputsWrapper({
  login,
  setLogin,
  sublogin,
  setSubLogin,
  password,
  setPassword,
  isValid,
}: IInputWrapper) {
  return (
    <section>
      <div className={s.input_wrapper}>
        <p className={s.input_heading}>{loginInputSecondaryText}</p>
        <Input
          value={login}
          onChange={setLogin}
          placeHolder={loginInputSecondaryText}
          type="text"
          isRequired
          styles={isValid === false ? s.invalid_input : null}
        />
      </div>
      <div className={s.input_wrapper}>
        <div className={s.hints_wrapper}>
          <p className={s.input_heading}>{subLoginInputSecondaryText}</p>
          <p className={s.hint}>{subloginHint}</p>
        </div>
        <Input
          value={sublogin}
          onChange={setSubLogin}
          placeHolder={subLoginInputSecondaryText}
          type="text"
        />
      </div>
      <div className={s.input_wrapper}>
        <p className={s.input_heading}>{passwordInputSecondaryText}</p>
        <Input
          value={password}
          onChange={setPassword}
          placeHolder={passwordInputSecondaryText}
          type="password"
          isRequired
          styles={isValid === false ? s.invalid_input : null}
        />
      </div>
    </section>
  );
}

export default InputsWrapper;
