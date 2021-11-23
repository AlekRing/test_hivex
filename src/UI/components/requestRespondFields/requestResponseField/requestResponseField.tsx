import React from "react";
import { Textarea } from "../../textArea/input";

import cn from "classnames";
import s from "../style.module.scss";
import { ErrorBlock } from "../../errorBlock/errorBlock";

interface IInputField {
  paragraph: ShortText;
  input: string;
  handleChange?: Function;
  readOnly?: IsReadOnlyFlag;
  isValid?: IsValidFlag;
  errorText: ShortText;
}

function RequestResponseField({
  paragraph,
  input,
  handleChange,
  readOnly = false,
  isValid,
  errorText,
}: IInputField) {
  return (
    <section>
      <div className={s.info_block}>
        <label>{paragraph}</label>
        {isValid === false ? (
          <ErrorBlock errorText={errorText} styles={s.error_block} />
        ) : null}
      </div>
      <form
        className={cn(
          s.input_wrapper,
          isValid === false ? s.invalid : undefined
        )}
        onSubmit={(e) => e.preventDefault()}
      >
        <Textarea
          value={input}
          onChange={handleChange && handleChange}
          placeHolder=""
          styles={s.input}
          readOnly={readOnly}
        />
      </form>
    </section>
  );
}

export default RequestResponseField;
