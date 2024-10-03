import { Typography } from "@/app/components/common";
import {
  DUE_TABLE_HEAD,
  DUE_TABLE_ROW,
  TREASURY_TABLE_HEAD,
  TREASURY_TABLE_ROW,
} from "@/app/utils/data";
import React from "react";
import { DueTableRow } from "./TableRow";
export const DuePaymentTable = (): React.ReactElement => {
  return (
    <div className="w-full overflow-hidden overflow-x-scroll py-6">
      <table className="min-w-[800px] w-full table-auto text-left">
        <thead>
          <tr>
            {DUE_TABLE_HEAD.map((data, index) => (
              <th
                key={index}
                className={` bg-boxOutline ${
                  index === 0 ? "pl-2 rounded-tl-2xl" : ""
                } ${index === 1 ? "pl-2" : ""}
                ${
                  index === TREASURY_TABLE_HEAD.length - 1
                    ? "pl-3 rounded-tr-2xl"
                    : ""
                } py-3`}
              >
                <Typography
                  variant="bodyRegular"
                  className="text-SecondaryColor font-normal"
                >
                  {data}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {DUE_TABLE_ROW.map((data, index) => {
            return <DueTableRow data={data} index={index} key={index} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
