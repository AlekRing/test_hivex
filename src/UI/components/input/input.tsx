import React from "react";

import s from "./style.module.scss";
import cn from "classnames";

interface IButton {
  onChange: Function;
  placeHolder: string;
  value: string;
  type: "password" | "email" | "text";
  styles?: any;
}

export const Input = ({
  onChange,
  placeHolder,
  value,
  type = "text",
  styles = null,
}: IButton) => {
  return (
    <input
      className={cn(s.input, styles)}
      value={value}
      type={type}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeHolder}
    />
  );
};
