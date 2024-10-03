import {
  SECURITY_INCIDENTS_TABLE_HEAD,
  SECURITY_INCIDENTS_TABLE_ROW,
} from "@/app/utils/data";
import React from "react";
import { Typography } from "../../common";
import { IncidentsTableRow } from "./IncidentsTableRow";

export const SecurityIncidentsTable = (): React.ReactElement => {
  return (
    <div className="w-full overflow-hidden overflow-x-scroll">
      <table className="min-w-[700px] w-full table-auto text-left">
        <thead>
          <tr>
            {SECURITY_INCIDENTS_TABLE_HEAD.map((data, index) => (
              <th
                key={index}
                className={` bg-boxOutline ${
                  index === 0 ? "pl-2 rounded-tl-2xl" : ""
                } ${index === 1 ? "pl-2" : ""}
                ${
                  index === SECURITY_INCIDENTS_TABLE_HEAD.length - 1
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
          {SECURITY_INCIDENTS_TABLE_ROW.map((data, index) => {
            return <IncidentsTableRow data={data} index={index} key={index} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
