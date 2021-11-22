import React, { useEffect, useState } from "react";
import Split from "react-split";
import {
  defaultSplitSizes,
  reqParagraph,
  resParagraph,
} from "../../data/globalVariables";
import RequestResponseField from "./requestResponseField/requestResponseField";

import "./split.css";
import s from "./style.module.scss";

function ConsoleCoreInputs() {
  const [requestInput, setRequestInput] = useState("");
  const [responsetInput, setResponsetInput] = useState("");
  const [splitSizes, setSplitSizes] = useState(defaultSplitSizes);

  useEffect(() => {
    let sizes: any = localStorage.getItem("split-sizes");

    try {
      if (sizes) {
        sizes = JSON.parse(sizes);
      } else {
        sizes = defaultSplitSizes;
      }
    } catch (error) {
      console.error(error);
      sizes = defaultSplitSizes;
    }

    setSplitSizes(sizes);
  }, []);

  const handleDragEnd = (sizes: any) => {
    localStorage.setItem("split-sizes", JSON.stringify(sizes));
  };

  return (
    <Split
      sizes={splitSizes}
      className={s.wrapper}
      onDragEnd={(sizes) => handleDragEnd(sizes)}
    >
      <RequestResponseField
        paragraph={reqParagraph}
        input={requestInput}
        handleChange={setRequestInput}
      />
      <RequestResponseField
        paragraph={resParagraph}
        input={responsetInput}
        handleChange={setResponsetInput}
        readOnly
      />
    </Split>
  );
}

export default ConsoleCoreInputs;
