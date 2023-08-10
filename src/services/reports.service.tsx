import axios from "../constants/axiosConfig.constants";
import { IReportsData } from "../types/reports.type";

export async function getReportsData() {
  await axios.get(`sanctum/csrf-cookie`);

  return await axios.get(`api/reports/`);
}
