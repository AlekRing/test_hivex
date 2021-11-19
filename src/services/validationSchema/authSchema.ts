import * as yup from "yup";

const loginRegexp = /^[\w]+@[\w]+.[\w]*/;
const passwordRegexp = /^[\w]+[\s]*.[\w]*/; ///^[\w*]+[\s]*/;

export const AuthSchema = yup.object().shape({
  login: yup
    .string()
    .matches(loginRegexp, "Логин может содержать только латинские буквы _ @ .")
    .required("Required"),
  sublogin: yup
    .string()
    .max(30, "Саблогин должен содержать не больше 30 символов"),
  password: yup
    .string()
    .matches(
      passwordRegexp,
      "Пароль может содержать только латинские буквы, пробелы _ @ ."
    )
    .min(5, "Пароль должен содержать не меньше 5 символов")
    .max(30, "Пароль должен содержать не больше 30 символов")
    .required(),
});
