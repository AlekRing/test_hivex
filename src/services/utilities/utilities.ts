import Ajv from "ajv";
import { schema } from "../../UI/data/globalVariables";

export const validateJSON = (string: string) => {
  const ajv = new Ajv();
  let valid = false;
  let parsed;

  try {
    parsed = JSON.parse(string);
    const validate = ajv.compile(schema);
    valid = validate(parsed);
  } catch (error) {
    console.error(error);
  }

  return { valid, parsed };
};

export const formatResponse = (res: ConsoleResponse) => {
  let formatted;

  try {
    formatted = JSON.stringify(res);
    formatted = formatString(formatted);
  } catch (error) {
    console.error(error);
  }

  return formatted;
};

const formatString = (str: any) => {
  let temp = str.split(",");
  temp = temp.join(",\n ");
  temp = temp.slice(0, 1) + "\n " + temp.slice(1, -1) + "\n" + temp.slice(-1);
  return temp;
};

interface ICheckUnicRequest {
  req: ConsoleRequestData;
  requests: ConsoleRequest[];
}

export const checkIfUnicRequest = ({ req, requests }: ICheckUnicRequest) => {
  if (requests.length === 0) return null;
  let index = null;

  requests.forEach((r, i) => {
    if (r.action.action === req.action && r.action.id === req.id) index = i;
  });
  return index;
};

interface IReorganize {
  requests: ConsoleRequest[];
  index: number;
}

export const reorganizeRequests = ({ requests, index }: IReorganize) => {
  return requests.length === 1
    ? requests
    : changeRequestPosition({ requests, index });
};

const changeRequestPosition = ({ requests, index }: IReorganize) => {
  console.log(requests.slice(index, index + 1));
  return requests
    .slice(index, index + 1)
    .concat(requests.slice(0, index).concat(requests.slice(index + 1)));
};
