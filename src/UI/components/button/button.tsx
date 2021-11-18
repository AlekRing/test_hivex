import React from "react";

import s from "./style.module.scss";
import cn from "classnames";
import { defaultStyles } from "../../data/globalVariables";

interface IButton {
  action: React.MouseEventHandler<HTMLButtonElement>;
  isDisabled: IsActiveFlag;
  text: ShortText;
  type: ButtonType;
  styles?: any;
}

export const Button = ({
  action,
  isDisabled,
  text,
  type,
  styles = defaultStyles,
}: IButton) => {
  return (
    <button
      className={cn(s.button, styles)}
      type={type}
      onClick={action}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};
