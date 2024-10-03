"use client";
import React from "react";

import { MImage, Typography } from "@/app/components/common";
import { DiscountEditMenu } from "@/app/components/Discount";
import { StaticImageData } from "next/image";
import { BsThreeDots } from "react-icons/bs";

interface IIndex {
  index: number;
}

interface ILogsData extends IIndex {
  data: {
    title: string;
    icon: string | StaticImageData;
  };
}

export const ConfigurationTableRow = ({
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
          {data.title}
        </Typography>
      </td>
      <td>
        <MImage src={data.icon} w={24} h={24} alt="icon" />
      </td>

      <td className="h-full border-boxOutline pl-4 text-white">
        <BsThreeDots />
      </td>
    </tr>
  );
};
