import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Line } from "react-chartjs-2";

import { AppDispatch, RootState } from "../../store";
import { fetchData } from "../../store/slices/reports/ReportSlice";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import {
  IChartDate,
  IReportTableData,
  IReportsData,
} from "../../types/reports.type";
import ReportsTable from "../../components/reports";

function DataFetchingComponent(): JSX.Element {
  const reportsData = useSelector(
    (state: RootState) => state.reports.fetchedData
  );
  const loading = useSelector((state: RootState) => state.reports.loading);
  const error = useSelector((state: RootState) => state.reports.error);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Websites Report",
      },
    },
  };

  const report = reportsData[0] as IReportsData;

  const dataForTable: IReportTableData[] = reportsData.map(
    ({ id, domain, reports }) => {
      const firstItem = reports[0];
      return { id, domain, firstItem };
    }
  );

  const labels = report?.reports?.map(({ date }) => date);

  const datasets = reportsData?.reduce((acc, item) => {
    let color = Math.floor(Math.random() * 256);
    const d = item.reports.map((el) => el.revenue);
    return [
      ...acc,
      {
        label: item.domain,
        data: d,
        borderColor: `rgb(${color}, 99, 132)`,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ];
  }, [] as IChartDate[]);

  const data = {
    labels,
    datasets,
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : reportsData ? (
        <>
          <Line options={options} data={data} />
          <ReportsTable data={dataForTable} />
        </>
      ) : null}
    </div>
  );
}

export default DataFetchingComponent;
