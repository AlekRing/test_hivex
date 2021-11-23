import React from "react";

import s from "./style.module.scss";
import cn from "classnames";
import {
  defaultInputIsRequired,
  defaultStyles,
} from "../../data/globalVariables";

interface ITextarea {
<<<<<<< HEAD
  onChange?: Function;
=======
  onChange: Function;
>>>>>>> 7660ae7315fd5d37679a6aa1238e4a45a53a0017
  placeHolder: InputPlaceholder;
  value: InputValue;
  styles?: string;
  isRequired?: InputIsRequired;
  readOnly?: IsReadOnlyFlag;
}

export const Textarea = ({
  onChange,
  placeHolder,
  value,
  styles = defaultStyles,
  isRequired = defaultInputIsRequired,
  readOnly = false,
}: ITextarea) => {
  return (
    <textarea
      className={cn(s.textarea, styles)}
      value={value}
      onChange={(e) => onChange && onChange(e.target.value)}
      placeholder={placeHolder}
      required={isRequired}
      readOnly={readOnly}
    />
  );
};
