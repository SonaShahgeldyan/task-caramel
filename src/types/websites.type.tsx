export type statusType = "approved" | "pending" | "declined";

export interface IWebsitesType {
  created_at: string;
  domain: string;
  id: number;
  status: statusType;
  updated_at: string;
}

export interface IWebsitesDataState {
  fetchedData: IWebsitesType[];
  loading: boolean;
  error: string | null | undefined;
  currentPage: number;
}

export interface IWebsiteData {
  domain: string;
}
