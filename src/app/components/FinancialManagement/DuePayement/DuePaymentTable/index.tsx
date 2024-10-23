import { TableWrapper, Typography } from "@/app/components/common";
import { DUE_TABLE_HEAD, DUE_TABLE_ROW } from "@/app/utils/data";
import React from "react";
import { ConfirmPayment } from "../ConfirmPayment";
export const DuePaymentTable = (): React.ReactElement => {
  return (
    <TableWrapper TableHeadData={DUE_TABLE_HEAD}>
      {DUE_TABLE_ROW.map((data, index) => {
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
              <Typography className="text-SecondaryColor pl-2">
                {data.clubProfit}
              </Typography>
            </td>
            <td>
              <Typography className="text-SecondaryColor">
                {data.totalIncome}
              </Typography>
            </td>
            <td>
              <Typography className="text-SecondaryColor">
                {data.transactionDue}
              </Typography>
            </td>
            <td>
              {data?.status?.confirmed ? (
                <div className="flex items-center justify-center gap-x-2 w-[108px] h-[36px] rounded-2xl bg-PrimaryColor">
                  <Typography
                    variant="bodyMedium"
                    className="text-SecondaryColor"
                  >
                    {data?.status?.confirmed}
                  </Typography>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-x-2 w-[108px] h-[36px] rounded-2xl bg-boxOutline">
                  <Typography
                    variant="bodyMedium"
                    className="text-SecondaryColor"
                  >
                    {data?.status?.pending || "Pending"}
                  </Typography>
                </div>
              )}
            </td>
            <td className="border-l-2 border-boxOutline">
              {data?.action?.confirmed ? (
                <ConfirmPayment />
              ) : (
                <div className="flex items-center justify-center">
                  <Typography
                    variant="bodyMedium"
                    className="text-SecondaryColor underline underline-offset-2 cursor-pointer"
                  >
                    {data?.action?.view || "View"}
                  </Typography>
                </div>
              )}
            </td>
          </tr>
        );
      })}
    </TableWrapper>
  );
};
