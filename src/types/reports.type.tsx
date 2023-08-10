export interface IReportsData {
  id: number;
  domain: string;
  reports: Array<IReportsType>;
}

export interface IReportsType {
  revenue: number;
  impressions: number;
  clicks: number;
  date: string;
}

export interface IReportsDataState {
  fetchedData: IReportsData | undefined;
  loading: boolean;
  error: string | null | undefined;
}
