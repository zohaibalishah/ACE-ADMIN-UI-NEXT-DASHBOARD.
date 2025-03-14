import React from "react";
import { Typography } from "../../common";
import { CLUBS_TABLE_HEAD, CLUBS_TABLE_ROW } from "@/app/utils/data";
import { ClubsTableRow } from "./ClubsTableRow";

export const TotalClubsTable = (): React.ReactElement => {
  return (
    <div className="w-full overflow-hidden overflow-x-scroll py-6">
      <table className="min-w-[700px] w-full table-auto text-left">
        <thead>
          {CLUBS_TABLE_HEAD.map((th, index) => (
            <th
              key={index}
              className={`h-[50px] bg-boxOutline ${
                index === 0 ? " w-[60px] rounded-tl-xl pl-2" : ""
              } 
                  ${index === 1 ? " pl-2" : ""} ${
                index === CLUBS_TABLE_HEAD.length - 1
                  ? "rounded-tr-xl pl-2"
                  : ""
              }`}
            >
              <Typography className="text-SecondaryColor font-normal">
                {th}
              </Typography>
            </th>
          ))}
        </thead>
        <tbody>
          {CLUBS_TABLE_ROW.map((data, index) => (
            <ClubsTableRow record={data} index={index} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
