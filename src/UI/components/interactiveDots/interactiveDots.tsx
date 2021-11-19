import React from "react";

import cn from "classnames";
import s from "./style.module.scss";

interface IInteractiveDots {
  styles?: any;
  action: React.MouseEventHandler<HTMLDivElement>;
}

export function InteractiveDots({ styles, action }: IInteractiveDots) {
  return (
    <div className={cn(s.dots_menu, styles)} onClick={(e) => action(e)}>
      <p className={cn(s.dot, s.small_dot)} />
      <p className={cn(s.dot, s.small_dot)} />
      <p className={cn(s.dot, s.small_dot)} />
    </div>
  );
}
