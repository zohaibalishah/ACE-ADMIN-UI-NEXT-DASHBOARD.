import { TableWrapper, Typography } from "@/app/components/common";
import { FINANCIAL_TABLE_HEAD, FINANCIAL_TABLE_ROW } from "@/app/utils/data";
import React from "react";

export const IncomeSpendingTable = (): React.ReactElement => {
  return (
    <TableWrapper TableHeadData={FINANCIAL_TABLE_HEAD}>
      {FINANCIAL_TABLE_ROW.map((data, index) => {
        return (
          <tr key={data.clubName} className="border-2 border-boxOutline">
            <td className="pl-2 border-r-2 border-boxOutline h-[60px]">
              <Typography className="text-SecondaryColor">
                {index + 1}
              </Typography>
            </td>
            <td>
              <Typography className="text-SecondaryColor pl-4">
                {data.clubName}
              </Typography>
            </td>
            <td>
              <Typography className="text-SecondaryColor pl-2">
                {data.clubOwner}
              </Typography>
            </td>
            <td>
              <Typography className="text-SecondaryColor">
                {data.transictionType}
              </Typography>
            </td>
            <td>
              <Typography className="text-SecondaryColor">
                {data.amount}
              </Typography>
            </td>
            <td>
              <Typography className="text-SecondaryColor pl-3">
                {data.discription}
              </Typography>
            </td>
          </tr>
        );
      })}
    </TableWrapper>
  );
};
