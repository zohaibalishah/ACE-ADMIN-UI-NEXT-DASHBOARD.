"use client";
import React, { useState } from "react";

import { Typography } from "@/app/components/common";
import { DiscountEditMenu } from "@/app/components/Discount";

interface IIndex {
  index: number;
}

interface IIncidentsData extends IIndex {
  data: {
    discription: string;
    detectedOn: string;
    status: string;
  };
}

export const IncidentsTableRow = ({
  data,
  index,
}: IIncidentsData): React.ReactElement => {
  return (
    <tr className="border-2 border-boxOutline">
      <td className="pl-2 border-r-2 border-boxOutline h-[60px]">
        <Typography className="text-SecondaryColor">{index + 1}</Typography>
      </td>
      <td>
        <Typography className="text-SecondaryColor pl-2">
          {data.discription}
        </Typography>
      </td>
      <td>
        <Typography className="text-SecondaryColor">
          {data.detectedOn}
        </Typography>
      </td>
      <td>
        <Typography className="text-SecondaryColor">{data.status}</Typography>
      </td>

      <td className="h-full border-l-2 border-boxOutline pl-4">
        <DiscountEditMenu index={index} />
      </td>
    </tr>
  );
};
