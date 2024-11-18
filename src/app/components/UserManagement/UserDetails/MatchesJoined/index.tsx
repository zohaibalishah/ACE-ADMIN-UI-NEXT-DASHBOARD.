import { TableWrapper, Typography } from "@/app/components/common";
import { BOOKING_HISTORY_TABLE_ROW } from "@/app/utils/data";
import React from "react";

export const head = [
  "S no",
  "Club Name",
  "Sport type",
  "Booking Date",
  "Status",
  "Location",
];

export const MatchesJoined = (): React.ReactElement => {
  return (
    <>
      <div className="pb-6">
        <Typography variant="h5Bold" className="text-SecondaryColor">
          Matches joined
        </Typography>

        <TableWrapper TableHeadData={head}>
          {Array.from({ length: 3 }).map((_, index) => (
            <tr key={index} className="h-[60px] border-2 border-boxOutline">
              <td className="pl-2 border-r-2 border-boxOutline">
                <Typography className="text-SecondaryColor">
                  {index + 1}
                </Typography>
              </td>
              <td>
                <Typography className="text-SecondaryColor pl-2">
                  Sport Life
                </Typography>
              </td>
              <td>
                <Typography className="text-SecondaryColor">Padel</Typography>
              </td>
              <td>
                <Typography className="text-SecondaryColor">
                  2024-07-18 10:00
                </Typography>
              </td>
              <td>
                <div className="px-4 h-[36px] bg-PrimaryColor rounded-xl inline-flex justify-center items-center text-SecondaryColor text-sm">
                  Complete
                </div>
              </td>
              <td>
                <Typography className="text-SecondaryColor">
                  Jeddah, KSA
                </Typography>
              </td>
            </tr>
          ))}
        </TableWrapper>
      </div>
    </>
  );
};
