"use client";
import React, { useState } from "react";
import { DiscountEditMenu } from "../../DiscountTableMenu";
import { Typography } from "@/app/components/common";

interface IData {
  index: number;
  data: {
    title: string;
    type: string;
    value: string;
    period: string;
    status: string;
  };
}

export const DiscountTableRow = ({
  data,
  index,
}: IData): React.ReactElement => {
  return (
    <tr key={data.title} className="border-2 border-boxOutline">
      <td className="pl-2 border-r-2 border-boxOutline h-[60px]">
        <Typography className="text-SecondaryColor">{index + 1}</Typography>
      </td>
      <td>
        <Typography className="text-SecondaryColor pl-2">
          {data.title}
        </Typography>
      </td>
      <td>
        <Typography className="text-SecondaryColor">{data.type}</Typography>
      </td>
      <td>
        <Typography className="text-SecondaryColor">{data.value}</Typography>
      </td>
      <td>
        <Typography className="text-SecondaryColor">{data.period}</Typography>
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
