import { Typography } from "@/app/components/common";
import {
  AUDIT_LOGS_TABLE_HEAD,
  AUDIT_LOGS_TABLE_ROW,
  SECURITY_INCIDENTS_TABLE_ROW,
} from "@/app/utils/data";
import React from "react";
import { LogsTableRow } from "./LogsTableRow";

export const AudtiLogsTable = (): React.ReactElement => {
  return (
    <div className="w-full overflow-hidden overflow-x-scroll">
      <table className="min-w-[700px] w-full table-auto text-left">
        <thead>
          <tr>
            {AUDIT_LOGS_TABLE_HEAD.map((data, index) => (
              <th
                key={index}
                className={` bg-boxOutline ${
                  index === 0 ? "pl-2 rounded-tl-2xl" : ""
                } ${index === 1 ? "pl-2" : ""}
                  ${
                    index === AUDIT_LOGS_TABLE_HEAD.length - 1
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
          {AUDIT_LOGS_TABLE_ROW.map((data, index) => {
            return <LogsTableRow data={data} index={index} key={index} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
