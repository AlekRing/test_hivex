import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectRequests } from "../../../services/store/selectors";
import { Cross } from "../icons/cross";
import SentRequest from "../sentRequest";

import { mokRequests } from "../../mok/mokRequests";

import s from "./style.module.scss";

const moked = mokRequests(15);

function RequestsLine() {
  const [openedDropdown, setOpenedDropdown] = useState(null);

  const requests = useSelector(selectRequests);

  const openDropdown = (e: any) => {
    setOpenedDropdown(e.currentTarget.id);
  };

  return (
    <section className={s.wrapper}>
      <section className={s.requests}>
        {moked.map((r, i) => (
          <SentRequest key={r.action + i} request={r} action={openDropdown} />
        ))}
      </section>
      <div className={s.cross}>
        <div className={s.gradient} />
        <Cross />
      </div>
    </section>
  );
}

export default RequestsLine;
