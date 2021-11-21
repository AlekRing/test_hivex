import React, { useState } from "react";
import Split from "react-split";
import { reqParagraph, resParagraph } from "../../data/globalVariables";
import RequestResponseField from "./requestResponseField/requestResponseField";

import "./split.css";
import s from "./style.module.scss";

function ConsoleCoreInputs() {
  const [requestInput, setRequestInput] = useState("");
  const [responsetInput, setResponsetInput] = useState("");

  return (
    <Split sizes={[50, 50]} className={s.wrapper}>
      <RequestResponseField
        paragraph={reqParagraph}
        input={requestInput}
        handleChange={setRequestInput}
      />
      <RequestResponseField
        paragraph={resParagraph}
        input={responsetInput}
        handleChange={setResponsetInput}
      />
    </Split>
  );
}

export default ConsoleCoreInputs;
