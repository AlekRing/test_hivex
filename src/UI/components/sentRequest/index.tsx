import React from "react";

import cn from "classnames";
import s from "./style.module.scss";
import { InteractiveDots } from "../interactiveDots/interactiveDots";

interface ISentRequest {
  request: ConsoleRequest;
  action: React.MouseEventHandler<HTMLDivElement>;
  handleClick: Function;
}

function SentRequest({ request, action, handleClick }: ISentRequest) {
  return (
    <div className={s.request} onClick={() => handleClick(request.action)}>
      <p className={cn(request.success ? s.done : s.failed, s.status)} />
      <p className={s.text}>{request.action.action}</p>
      <InteractiveDots action={action} styles={s.dots} />
    </div>
  );
}

export default SentRequest;
