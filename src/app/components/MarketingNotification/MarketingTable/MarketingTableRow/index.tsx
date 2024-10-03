"use client";
import React, { useState } from "react";
import { Typography } from "@/app/components/common";

interface IData {
  index: number;
  data: {
    referenceId: string;
    date: string;
    activityType: string;
    description: string;
  };
}

export const MarketingTableRow = ({
  data,
  index,
}: IData): React.ReactElement => {
  return (
    <tr
      key={data.referenceId}
      className="border-b-2 border-boxOutline h-[60px]"
    >
      <td>
        <Typography className="text-SecondaryColor pl-2">
          {data.referenceId}
        </Typography>
      </td>
      <td>
        <Typography className="text-SecondaryColor">{data.date}</Typography>
      </td>
      <td>
        <Typography className="text-SecondaryColor">
          {data.activityType}
        </Typography>
      </td>
      <td>
        <Typography className="text-SecondaryColor">
          {data.description}
        </Typography>
      </td>
    </tr>
  );
};
