import React from "react";

import { sadSmileAlt } from "../../data/globalVariables";
import s from "./style.module.scss";
import cn from "classnames";

interface IButton {
  errorText: ShortText;
  errorMessage?: ShortText;
  styles?: string;
}

export const ErrorBlock = ({ errorText, errorMessage, styles }: IButton) => {
  return (
    <section className={cn(s.error_wrapper, styles)}>
      <img className={s.sad_svg} src="/icons/meh.svg" alt={sadSmileAlt} />
      <div>
        <p className={s.error_text}>{errorText}</p>
        <p className={s.error_message}>{errorMessage}</p>
      </div>
    </section>
  );
};
