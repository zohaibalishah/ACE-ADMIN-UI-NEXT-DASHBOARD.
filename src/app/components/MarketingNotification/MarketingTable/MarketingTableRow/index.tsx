"use client";
import React, { useState } from "react";
import { Typography } from "@/app/components/common";

interface IData {
  data: {
    referenceId: string;
    date: string;
    activityType: string;
    description: string;
  };
}

export const MarketingTableRow = ({ data }: IData): React.ReactElement => {
  return (
    <tr
      key={data.referenceId}
      className="border-b-2 border-boxOutline h-[60px]"
    >
      <td className="px-3 text-nowrap">
        <Typography className="text-SecondaryColor">
          {data.referenceId}
        </Typography>
      </td>
      <td className="px-3 text-nowrap">
        <Typography className="text-SecondaryColor">{data.date}</Typography>
      </td>
      <td className="px-3 text-nowrap">
        <Typography className="text-SecondaryColor">
          {data.activityType}
        </Typography>
      </td>
      <td className="px-3 text-nowrap">
        <Typography className="text-SecondaryColor">
          {data.description}
        </Typography>
      </td>
    </tr>
  );
};
