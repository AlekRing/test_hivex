import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../../services/store/reducers/auth";
import { selectLogin, selectSublogin } from "../../../services/store/selectors";
import { appName, exit } from "../../data/globalVariables";
import { ExitFullScreen } from "../icons/exitFullScreen";
import { FullScreen } from "../icons/fullScreen";
import { LogOut } from "../icons/logOut";
import Logo from "../logo/logo";

import s from "./style.module.scss";

interface IHeader {
  handleFullScreenClick: Function;
  fullScreen: IsFullScreenFlag;
}

function Header({ handleFullScreenClick, fullScreen }: IHeader) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = useSelector(selectLogin);
  const sublogin = useSelector(selectSublogin);

  const handleClick = () => {
    dispatch(logOut());
    navigate("/");
  };

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
        <section className={s.exit_wrapper} onClick={handleClick}>
          <p>{exit}</p>
          <LogOut />
        </section>
        {
          fullScreen 
          ? (<div onClick={() => handleFullScreenClick('exit')}>
              <ExitFullScreen />
            </div>)
          : (<div onClick={() => handleFullScreenClick('enter')}>
              <FullScreen />
            </div>)
        }
        
      </section>
    </header>
  );
}

export default Header;
