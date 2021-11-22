import React from "react";

import s from "./style.module.scss";
import cn from "classnames";
import {
  defaulInputType,
  defaultInputIsRequired,
  defaultStyles,
} from "../../data/globalVariables";

interface IInput {
  onChange: Function;
  placeHolder: InputPlaceholder;
  value: InputValue;
  type: InputType;
  styles?: string;
  isRequired?: InputIsRequired;
}

export const Input = ({
  onChange,
  placeHolder,
  value,
  type = defaulInputType,
  styles = defaultStyles,
  isRequired = defaultInputIsRequired,
}: IInput) => {
  return (
    <input
      className={cn(s.input, styles)}
      value={value}
      type={type}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeHolder}
      required={isRequired}
    />
  );
};
