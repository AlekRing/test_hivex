import React from "react";

import cn from "classnames";
import s from "./style.module.scss";

interface ILogo {
  styles?: string;
}

function Logo({ styles }: ILogo) {
  return <img className={cn(s.logo, styles)} src="/icons/logo.svg" alt="" />;
}

export default Logo;
