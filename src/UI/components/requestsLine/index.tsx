import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectRequests } from "../../../services/store/selectors";
import { Cross } from "../icons/cross";
import SentRequest from "../sentRequest";

import { mokRequests } from "../../mok/mokRequests";

import s from "./style.module.scss";

const moked = mokRequests(15);

<<<<<<< HEAD
interface IRequestLine {
  handleClick: React.MouseEventHandler<HTMLDivElement>;
}

function RequestsLine({ handleClick }: IRequestLine) {
=======
function RequestsLine() {
>>>>>>> 7660ae7315fd5d37679a6aa1238e4a45a53a0017
  const [openedDropdown, setOpenedDropdown] = useState(null);

  const requests = useSelector(selectRequests);

  const openDropdown = (e: any) => {
    setOpenedDropdown(e.currentTarget.id);
  };

  const onWheel = (e: any) => {
    const container = e.currentTarget;
    const containerScrollPosition = container!.scrollLeft;

    container!.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY,
      behavior: "smooth",
    });
  };

  return (
    <section className={s.scroll_wrapper}>
      <section className={s.wrapper} onWheel={onWheel}>
        <section className={s.requests}>
          {requests.length &&
            requests.map((r: any, i: number) => (
              <SentRequest
                key={r.action.action + i}
                request={r}
                action={openDropdown}
                handleClick={handleClick}
              />
            ))}
        </section>
      </section>
      <div className={s.cross}>
        <div className={s.gradient} />
        <Cross />
      </div>
    </section>
  );
}

export default RequestsLine;
