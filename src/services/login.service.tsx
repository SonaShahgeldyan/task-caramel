import { IRegisterResponseData } from "../types/register.type";
import axios from "../constants/axiosConfig.constants";
import { ILoginData } from "../types/login.type";

export async function sendLoginData(data: ILoginData) {
  await axios.get(`sanctum/csrf-cookie`);

  const r = await axios.post(`api/auth/login/`, data);

  return r.data as Promise<IRegisterResponseData>;
}
