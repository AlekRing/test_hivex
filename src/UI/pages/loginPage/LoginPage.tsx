import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authenticate } from "../../../services/store/reducers/auth";
import {
  selectAuthError,
  selectIsLoggedIn,
  selectLoading,
} from "../../../services/store/selectors";
import { AuthSchema } from "../../../services/validationSchema/authSchema";
import { Button } from "../../components/button/button";
import { ErrorBlock } from "../../components/errorBlock/errorBlock";
import Logo from "../../components/logo/logo";
import {
  appName,
  authErrorText,
  authValidationErrorText,
  loginButtonText,
} from "../../data/globalVariables";
import InputsWrapper from "./InputsWrapper";

import s from "./style.module.scss";

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, setLogin] = useState("");
  const [sublogin, setSubLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [validationError, setValidationError] = useState("");

  const loading = useSelector(selectLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const authError = useSelector(selectAuthError);

  useEffect(() => {
    if (isLoggedIn?.length) {
      navigate("/console");
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    setErrorMessage(authError);
  }, [authError]);

  const doLogin = () => {
    dispatch(
      authenticate({
        login,
        sublogin,
        password,
      })
    );
  };

  function onSubmit(event: React.SyntheticEvent<any, Event>) {
    event.preventDefault();

    try {
      AuthSchema.validateSync({
        login: login,
        sublogin: sublogin,
        password: password,
      });

      setIsValid(true);
      doLogin();
    } catch (error: any) {
      console.error(error);

      setValidationError(error.errors.join(" "));
      setIsValid(false);
    }
  }

  return (
    <section className={s.wrapper}>
      <Logo styles={s.logo} />
      <form className={s.form} onSubmit={onSubmit} action="/">
        <h2 className={s.app_name}>{appName}</h2>
        {errorMessage && (
          <ErrorBlock errorText={authErrorText} errorMessage={errorMessage} />
        )}
        {isValid === false
          ? (<ErrorBlock
            errorText={authValidationErrorText}
            errorMessage={validationError}
            />)
          : null
        }
        <InputsWrapper
          login={login}
          setLogin={setLogin}
          sublogin={sublogin}
          setSubLogin={setSubLogin}
          password={password}
          setPassword={setPassword}
          isValid={isValid}
        />
        <Button
          type="submit"
          text={loginButtonText}
          isLoading={!!loading}
          styles={s.button}
        />
      </form>
    </section>
  );
}

export default LoginPage;
