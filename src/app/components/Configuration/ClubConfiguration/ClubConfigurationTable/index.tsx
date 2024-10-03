import { Typography } from "@/app/components/common";
import {
  CLUB_CONFIGURATION_TABLE_HEAD,
  CLUB_CONFIGURATION_TABLE_ROW,
} from "@/app/utils/data";
import React from "react";
import { ClubConfigTableRow } from "./ClubConfigTableRow";

export const ClubConfigurationTable = (): React.ReactElement => {
  return (
    <div className="w-full overflow-hidden overflow-x-scroll">
      <table className="min-w-[400px] w-full table-auto text-left">
        <thead>
          <tr>
            {CLUB_CONFIGURATION_TABLE_HEAD.map((data, index) => (
              <th
                key={index}
                className={` bg-boxOutline ${
                  index === 0 ? "pl-2 rounded-tl-2xl" : ""
                } ${index === 1 ? "pl-2" : ""}
                  ${
                    index === CLUB_CONFIGURATION_TABLE_HEAD.length - 1
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
          {CLUB_CONFIGURATION_TABLE_ROW.map((data, index) => {
            return <ClubConfigTableRow data={data} index={index} key={index} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
