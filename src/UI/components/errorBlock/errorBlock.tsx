import React from "react";

import s from "./style.module.scss";
import { sadSmileAlt } from "../../data/globalVariables";

interface IButton {
  errorText: ShortText;
  errorMessage: ShortText;
}

export const ErrorBlock = ({ errorText, errorMessage }: IButton) => {
  return (
    <section className={s.error_wrapper}>
      <img className={s.sad_svg} src="/icons/meh.svg" alt={sadSmileAlt} />
      <div>
        <p className={s.error_text}>{errorText}</p>
        <p className={s.error_message}>{errorMessage}</p>
      </div>
    </section>
  );
};
