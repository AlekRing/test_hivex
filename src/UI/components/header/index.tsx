import React from "react";
import { useSelector } from "react-redux";
import { selectLogin, selectSublogin } from "../../../services/store/selectors";
import { appName, exit } from "../../data/globalVariables";
import { FullScreen } from "../icons/fullScreen";
import { LogOut } from "../icons/logOut";
import Logo from "../logo/logo";

import s from "./style.module.scss";

function Header() {
  const login = useSelector(selectLogin);
  const sublogin = useSelector(selectSublogin);

  return (
    <header>
      <section className={s.logo_wrapper}>
        <Logo styles={s.logo} />
        <p>{appName}</p>
      </section>
      <section className={s.actions_wrapper}>
        <section className={s.user_data_wrapper}>
          <p className={s.login}>{login}</p>
          <p className={s.sublogin}>{sublogin}</p>
        </section>
        <section className={s.exit_wrapper}>
          <p>{exit}</p>
          <LogOut />
        </section>
        <FullScreen />
      </section>
    </header>
  );
}

export default Header;
