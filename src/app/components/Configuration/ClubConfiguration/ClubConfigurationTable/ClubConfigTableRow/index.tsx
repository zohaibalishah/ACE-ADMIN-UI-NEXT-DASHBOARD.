"use client";
import React from "react";

import { Typography } from "@/app/components/common";
import { ClubTableActionMenu } from "../../ClubTableActionMenu";

interface IIndex {
  index: number;
}

interface ILogsData extends IIndex {
  data: {
    clubName: string;
    profit: string;
    startContract: string;
    endContract: string;
  };
}

export const ClubConfigTableRow = ({
  data,
  index,
}: ILogsData): React.ReactElement => {
  return (
    <tr className="border-2 border-boxOutline">
      <td className="pl-2 border-r-2 border-boxOutline h-[60px]">
        <Typography className="text-SecondaryColor">{index + 1}</Typography>
      </td>
      <td>
        <Typography className="text-SecondaryColor pl-2">
          {data.clubName}
        </Typography>
      </td>
      <td>
        <Typography className="text-SecondaryColor">{data.profit}</Typography>
      </td>
      <td>
        <Typography className="text-SecondaryColor">
          {data.startContract}
        </Typography>
      </td>
      <td>
        <Typography className="text-SecondaryColor ">
          {data.endContract}
        </Typography>
      </td>

      <td className="h-full border-boxOutline pl-4 text-white relative">
        <ClubTableActionMenu index={index} />
      </td>
    </tr>
  );
};
