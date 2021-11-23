import React from "react";

import cn from "classnames";
import s from "./style.module.scss";
import { InteractiveDots } from "../interactiveDots/interactiveDots";

interface ISentRequest {
  request: { action: string; done: boolean };
  action: React.MouseEventHandler<HTMLDivElement>;
}

function SentRequest({ request, action }: ISentRequest) {
  return (
    <div className={s.request}>
      <p className={cn(request.done ? s.done : s.failed, s.status)} />
      <p className={s.text}>{request.action}</p>
      <InteractiveDots action={action} styles={s.dots} />
    </div>
  );
}

export default SentRequest;
