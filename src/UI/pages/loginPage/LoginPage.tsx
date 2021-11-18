import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authenticate } from "../../../services/store/reducers/auth";
import {
  selectIsLoggedIn,
  selectLoading,
} from "../../../services/store/selectors";
import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";

import s from "./style.module.scss";

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, setLogin] = useState("");
  const [sublogin, setSubLogin] = useState("");
  const [password, setPassword] = useState("");
  const loading = useSelector(selectLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn?.length) {
      navigate("/console");
    }
  }, [isLoggedIn, navigate]);

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
    doLogin();
  }

  return (
    <section className={s.wrapper}>
      <img className={s.logo} src="/icons/logo.svg" alt="" />
      <form className={s.form} onSubmit={onSubmit} action="/">
        <Input
          value={login}
          onChange={setLogin}
          placeHolder="Логин"
          type="text"
        />
        <Input
          value={sublogin}
          onChange={setSubLogin}
          placeHolder="Сублогин"
          type="text"
        />
        <Input
          value={password}
          onChange={setPassword}
          placeHolder="Пароль"
          type="password"
        />
        <Button
          type="submit"
          text="Войти"
          action={onSubmit}
          isDisabled={!!loading}
          styles={s.button}
        />
      </form>
    </section>
  );
}

export default LoginPage;
