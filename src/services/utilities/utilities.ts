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
