import React, { useState } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/footer/footer";
import Header from "../../components/header";
import { startSendingRequest } from "../../../services/store/reducers/requests";
import { selectRequests } from "../../../services/store/selectors";
import RequestResponseFields from "../../components/requestRespondFields";
import RequestsLine from "../../components/requestsLine";
import {
  formatResponse,
  validateJSON,
} from "../../../services/utilities/utilities";

function Console() {
  const dispatch = useDispatch();
  const handle = useFullScreenHandle();
  
  const [requestInput, setRequestInput] = useState("");
  const [isValid, setIsValid] = useState<IsValidFlag>(null);
  const [fullScreen, setFullScreen] = useState(false);

  const requests = useSelector(selectRequests);

  const handleSubmit = () => {
    const { valid, parsed } = validateJSON(requestInput);

    valid && dispatch(startSendingRequest({ parsed, requests }));

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
    try {
      const formatted = formatResponse(request);
      setRequestInput(formatted);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFullScreen = (type: FullScreenArgument) => {
    type === 'enter' ? handle.enter() : handle.exit();

    setFullScreen(p => !p);
  }

  return (
    <FullScreen handle={handle}>
      <Header handleFullScreenClick={handleFullScreen} fullScreen={fullScreen} />
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
    </FullScreen>
  );
}

export default Console;
