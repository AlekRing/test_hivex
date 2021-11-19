import React from "react";

import s from "./style.module.scss";

interface IHeader {}

function Header({}: IHeader) {
  return (
    <header>
      <section className={s.logo_wrapper}></section>
      <section className={s.actions_wrapper}></section>
    </header>
  );
}

export default Header;
