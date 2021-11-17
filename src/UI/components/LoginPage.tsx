import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authenticate } from '../../services/store/reducers/auth';
import { selectIsLoggedIn, selectLoading } from '../../services/store/selectors';


import s from './style.module.scss'

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, setLogin] = useState('');
  const [sublogin, setSubLogin] = useState('');
  const [password, setPassword] = useState('');
  const loading = useSelector(selectLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn?.length) {
      console.log('LOGIN_PAGE');

      navigate('/console');
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
        <input value={login} onChange={(e) => setLogin(e.target.value)} placeholder="Логин" />
        <input value={sublogin} onChange={(e) => setSubLogin(e.target.value)} placeholder="Сублогин" />
        <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Пароль" />
        <button type="submit" onClick={onSubmit} disabled={!!loading}>
          Отправить
        </button>
      </form>
    </section>
  );
}

export default LoginPage;
