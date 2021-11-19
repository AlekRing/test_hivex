import React from "react";
import { InteractiveDots } from "../interactiveDots/interactiveDots";
import RequestField from "./requestField/requestField";
import ResponseField from "./responseField/responseField";

import s from "./style.module.scss";

function RequestResponseFields() {
  return (
    <section className={s.wrapper}>
      <RequestField />
      <InteractiveDots action={() => console.log("mooooove")} styles={s.dots} />
      <ResponseField />
    </section>
  );
}

export default RequestResponseFields;
