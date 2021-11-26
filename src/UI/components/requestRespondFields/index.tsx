import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Split from "react-split";
import {
  selectErrorText,
  selectIsValidResponse,
  selectResponse,
} from "../../../services/store/selectors";
import { formatResponse } from "../../../services/utilities/utilities";
import {
  defaultSplitSizes,
  JSONErrorText,
  reqParagraph,
  resParagraph,
} from "../../data/globalVariables";
import RequestResponseField from "./requestResponseField/requestResponseField";

import "./split.css";
import s from "./style.module.scss";

interface IConsoleCoreInputs {
  input: string;
  handleChange: Function;
  isValid: IsValidFlag;
}

function ConsoleCoreInputs({
  input,
  handleChange,
  isValid,
}: IConsoleCoreInputs) {
  const [responsetInput, setResponsetInput] = useState("");
  const [splitSizes, setSplitSizes] = useState(defaultSplitSizes);

  const isValidResponse = useSelector(selectIsValidResponse);
  const response = useSelector(selectResponse);
  const errorText = useSelector(selectErrorText);

  useEffect(() => {
    let sizes: any = localStorage.getItem("split-sizes");

    try {
      sizes ? (sizes = JSON.parse(sizes)) : (sizes = defaultSplitSizes);
    } catch (error) {
      console.error(error);
      sizes = defaultSplitSizes;
    }

    setSplitSizes(sizes);
  }, []);

  useEffect(() => {
    if (!response) return;
    const formated = formatResponse(response);

    setResponsetInput(formated ? formated : "");
  }, [response]);

  const handleDragEnd = (sizes: any) => {
    try {
      localStorage.setItem("split-sizes", JSON.stringify(sizes));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Split
      sizes={splitSizes}
      className={s.wrapper}
      onDragEnd={(sizes) => handleDragEnd(sizes)}
    >
      <RequestResponseField
        paragraph={reqParagraph}
        input={input}
        handleChange={handleChange}
        isValid={isValid}
        errorText={JSONErrorText}
      />
      <RequestResponseField
        paragraph={resParagraph}
        input={responsetInput}
        readOnly
        isValid={isValidResponse}
        errorText={errorText}
      />
    </Split>
  );
}

export default ConsoleCoreInputs;
