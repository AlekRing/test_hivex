import React, { useState } from "react";
import { Input } from "../../input/input";

import s from "../style.module.scss";

function ResponseField() {
  const [input, setInput] = useState("");

  return (
    <section className={s.input_wrapper}>
      <Input
        type="text"
        value={input}
        onChange={setInput}
        placeHolder=""
        styles={s.input}
      />
    </section>
  );
}

export default ResponseField;
