import React from "react";
import { Textarea } from "../../textArea/input";

import s from "../style.module.scss";

interface IInputField {
  paragraph: ShortText;
  input: string;
  handleChange: Function;
  readOnly?: IsReadOnlyFlag;
}

function RequestResponseField({
  paragraph,
  input,
  handleChange,
  readOnly = false,
}: IInputField) {
  return (
    <section>
      <label>{paragraph}</label>
      <form className={s.input_wrapper} onSubmit={(e) => e.preventDefault()}>
        <Textarea
          value={input}
          onChange={handleChange}
          placeHolder=""
          styles={s.input}
          readOnly={readOnly}
        />
      </form>
    </section>
  );
}

export default RequestResponseField;