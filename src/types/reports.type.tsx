export interface IReportsData {
  id: number;
  domain: string;
  reports: IReportsType[];
}

export interface IReportsType {
  revenue: number;
  impressions: number;
  clicks: number;
  date: string;
}

export interface IReportsDataState {
  fetchedData: IReportsData[];
  loading: boolean;
  error: string | null | undefined;
}

export interface IChartDate {
  label: string;
  data: number[];
  borderColor: string;
  backgroundColor: string;
}

export interface IReportTableData {
  id: number;
  domain: string;
  firstItem: IReportsType;
}
