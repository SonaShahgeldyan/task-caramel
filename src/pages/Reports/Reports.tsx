import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { AppDispatch, RootState } from "../../store";
import { fetchData } from "../../store/slices/reports/ReportSlice";

function DataFetchingComponent(): JSX.Element {
  const fetchedData = useSelector(
    (state: RootState) => state.reports.fetchedData
  );
  const loading = useSelector((state: RootState) => state.reports.loading);
  const error = useSelector((state: RootState) => state.reports.error);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  console.log(":::::::", fetchedData);
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : fetchedData ? (
        <></>
      ) : null}
    </div>
  );
}

export default DataFetchingComponent;
