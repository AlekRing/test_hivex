import React from "react";
import { useSelector } from "react-redux";
import { selectLoading } from "../../../services/store/selectors";
import {
  buttonText,
  formatText,
  githubLink,
  githubName,
} from "../../data/globalVariables";
import { Button } from "../button/button";
import { Format } from "../icons/format";

import s from "./style.module.scss";

function Footer() {
  const isLoading = useSelector(selectLoading);
  return (
    <footer>
      <Button text={buttonText} isLoading={isLoading} />
      <a
        className={s.githubLink}
        href={githubLink}
        target="_blank"
        rel="noreferrer"
      >
        {githubName}
      </a>
      <div className={s.format}>
        <Format />
        <p>{formatText}</p>
      </div>
    </footer>
  );
}

export default Footer;
