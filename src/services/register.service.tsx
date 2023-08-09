import { IRegisterData, IRegisterResponseData } from "../types/register.type";
import axios from "../constants/axiosConfig.constants";

export async function sendRegistrationData(data: IRegisterData) {
  await axios.get(`sanctum/csrf-cookie`);

  const r = await axios.post(`api/auth/register/`, data);

  return r.data as Promise<IRegisterResponseData>;
}
