import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Footer from "../../components/footer/footer";
import Header from "../../components/header";
import { startSendingRequest } from "../../../services/store/reducers/requests";

import RequestResponseFields from "../../components/requestRespondFields";
import RequestsLine from "../../components/requestsLine";
import {
  formatResponse,
  validateJSON,
} from "../../../services/utilities/utilities";

function Console() {
  const dispatch = useDispatch();
  const [requestInput, setRequestInput] = useState("");
  const [isValid, setIsValid] = useState<IsValidFlag>(null);

  const handleSubmit = () => {
    const { valid, parsed } = validateJSON(requestInput);

    valid && dispatch(startSendingRequest(parsed));

    setIsValid(valid);
  };

  const handleFormat = () => {
    const { valid, parsed } = validateJSON(requestInput);

    if (valid) {
      try {
        const formatted = formatResponse(parsed);
        setRequestInput(formatted);
      } catch (error) {
        console.error(error);
      }
    }
    setIsValid(valid);
  };

  const handdleRequestClick = (request: any) => {
    console.log(request);

    try {
      const formatted = formatResponse(request);
      setRequestInput(formatted);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <RequestsLine handleClick={handdleRequestClick} />
      <RequestResponseFields
        input={requestInput}
        handleChange={setRequestInput}
        isValid={isValid}
      />
      <Footer
        input={requestInput}
        handleSubmit={handleSubmit}
        handleFormat={handleFormat}
      />
    </>
  );
}

export default Console;
