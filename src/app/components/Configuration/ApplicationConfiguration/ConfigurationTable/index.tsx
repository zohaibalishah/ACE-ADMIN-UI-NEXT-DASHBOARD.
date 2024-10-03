import { Typography } from "@/app/components/common";
import {
  CONFIGURATION_TABLE_HEAD,
  CONFIGURATION_TABLE_ROW,
} from "@/app/utils/data";
import React from "react";
import { ConfigurationTableRow } from "./ConfigurationTableRow";

export const ConfigurationTable = (): React.ReactElement => {
  return (
    <div className="w-full overflow-hidden overflow-x-scroll">
      <table className="min-w-[400px] w-full table-auto text-left">
        <thead>
          <tr>
            {CONFIGURATION_TABLE_HEAD.map((data, index) => (
              <th
                key={index}
                className={` bg-boxOutline ${
                  index === 0 ? "pl-2 rounded-tl-2xl" : ""
                } ${index === 1 ? "pl-2" : ""}
                  ${
                    index === CONFIGURATION_TABLE_HEAD.length - 1
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
          {CONFIGURATION_TABLE_ROW.map((data, index) => {
            return (
              <ConfigurationTableRow data={data} index={index} key={index} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
