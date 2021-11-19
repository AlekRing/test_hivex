import React from "react";

import s from "./style.module.scss";
import cn from "classnames";
import { defaultStyles } from "../../data/globalVariables";

interface IButton {
  action?: React.MouseEventHandler<HTMLButtonElement>;
  isDisabled?: IsActiveFlag;
  isLoading: IsLoadingFlag;
  text: ShortText;
  type?: ButtonType;
  styles?: any;
}

export const Button = ({
  action,
  isDisabled,
  isLoading,
  text,
  type = "button",
  styles = defaultStyles,
}: IButton) => {
  return (
    <button
      className={cn(s.button, styles, isLoading && s.loading)}
      type={type}
      onClick={action && action}
      disabled={isDisabled}
    >
      {isLoading ? <img src="/icons/loader.svg" alt="loading" /> : text}
    </button>
  );
};
