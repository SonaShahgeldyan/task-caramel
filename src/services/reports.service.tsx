import axios from "../constants/axiosConfig.constants";

export async function getReportsData() {
  return await axios.get(`api/reports/`);
}
