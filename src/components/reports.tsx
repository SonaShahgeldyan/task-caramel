import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import React from "react";
import { IReportTableData } from "../types/reports.type";

const ReportsTable: React.FC<{ data: IReportTableData[] }> = ({ data }) => {
  console.log(data);
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>Website</TableColumn>
        <TableColumn>Revenue</TableColumn>
        <TableColumn>Impressions</TableColumn>
        <TableColumn>CPM</TableColumn>
        <TableColumn>Clicks</TableColumn>
      </TableHeader>
      <TableBody>
        {data.map((item: IReportTableData) => (
          <TableRow key={item.id}>
            <TableCell>{item.domain}</TableCell>
            <TableCell>{item.firstItem.revenue}</TableCell>
            <TableCell>{item.firstItem.impressions}</TableCell>
            <TableCell>
              {(
                (item.firstItem.revenue * 1000) /
                item.firstItem.impressions
              ).toFixed(2)}
            </TableCell>
            <TableCell>{item.firstItem.clicks}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default ReportsTable;
