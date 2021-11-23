import React from "react";
import { useSelector } from "react-redux";
<<<<<<< HEAD
import { selectIsSending } from "../../../services/store/selectors";
=======
import { selectLoading } from "../../../services/store/selectors";
>>>>>>> 7660ae7315fd5d37679a6aa1238e4a45a53a0017
import {
  buttonText,
  formatText,
  githubLink,
  githubName,
} from "../../data/globalVariables";
import { Button } from "../button/button";
import { Format } from "../icons/format";

import s from "./style.module.scss";

interface IFooter {
  input: string;
  handleSubmit: React.MouseEventHandler<HTMLButtonElement>;
  handleFormat: React.MouseEventHandler<HTMLDivElement>;
}

function Footer({ input, handleSubmit, handleFormat }: IFooter) {
  const isLoading = useSelector(selectIsSending);

  return (
    <footer>
      <Button text={buttonText} isLoading={isLoading} action={handleSubmit} />
      <a
        className={s.githubLink}
        href={githubLink}
        target="_blank"
        rel="noreferrer"
      >
        {githubName}
      </a>
      <div className={s.format} onClick={handleFormat}>
        <Format />
        <p>{formatText}</p>
      </div>
    </footer>
  );
}

export default Footer;
