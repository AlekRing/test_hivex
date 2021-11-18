import React from "react";

import s from "./style.module.scss";
import cn from "classnames";
import { defaulInput, defaultStyles } from "../../data/globalVariables";

interface IButton {
  onChange: Function;
  placeHolder: InputPlaceholder;
  value: InputValue;
  type: InputType;
  styles?: any;
}

export const Input = ({
  onChange,
  placeHolder,
  value,
  type = defaulInput,
  styles = defaultStyles,
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
