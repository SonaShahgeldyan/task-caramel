import axios from "../constants/axiosConfig.constants";
import { IWebsiteData, statusType } from "../types/websites.type";

export async function getWebsitesData(currentPage: number) {
  return await axios.get(`api/websites/?page=${currentPage}`);
}

export async function createWebsite(domain: IWebsiteData) {
  return (await axios.post(`api/websites/`, domain)).data;
}

export async function editWebsite(status: statusType) {
  return await axios.put(`/website/${1}`, status);
}
