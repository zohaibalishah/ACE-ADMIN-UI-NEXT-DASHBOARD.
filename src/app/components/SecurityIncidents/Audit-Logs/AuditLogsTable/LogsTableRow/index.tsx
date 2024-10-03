"use client";
import React from "react";

import { Typography } from "@/app/components/common";
import { DiscountEditMenu } from "@/app/components/Discount";

interface IIndex {
  index: number;
}

interface ILogsData extends IIndex {
  data: {
    action: string;
    user: string;
    timeStamp: string;
    details: string;
  };
}

export const LogsTableRow = ({
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
          {data.action}
        </Typography>
      </td>
      <td>
        <Typography className="text-SecondaryColor">{data.user}</Typography>
      </td>
      <td>
        <Typography className="text-SecondaryColor">
          {data.timeStamp}
        </Typography>
      </td>
      <td>
        <Typography className="text-SecondaryColor">{data.details}</Typography>
      </td>

      <td className="h-full border-l-2 border-boxOutline pl-4">
        <DiscountEditMenu index={index} />
      </td>
    </tr>
  );
};
