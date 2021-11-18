import React from "react";

import s from "./style.module.scss";
import cn from "classnames";

interface IButton {
  action: React.MouseEventHandler<HTMLButtonElement>;
  isDisabled: boolean;
  text: string;
  type: "submit" | "button" | "reset";
  styles?: any;
}

export const Button = ({
  action,
  isDisabled,
  text,
  type,
  styles = null,
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
