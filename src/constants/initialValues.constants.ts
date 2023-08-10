import { ILoginData } from "../types/login.type";
import { IRegisterData } from "../types/register.type";

export const registerInitialValues: IRegisterData = {
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
};

export const loginInitialValues: ILoginData = {
  email: "",
  password: "",
};
