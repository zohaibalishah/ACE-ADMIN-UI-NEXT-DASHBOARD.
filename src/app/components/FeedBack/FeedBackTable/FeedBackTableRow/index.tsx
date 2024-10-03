"use client";
import React, { useState } from "react";

import { Typography } from "@/app/components/common";
import { FeedbackTableMenu } from "../../FeedbackTableMenu";

interface IIndex {
  index: number;
}

interface IFeedBackData extends IIndex {
  data: {
    type: string;
    subject: string;
    description: string;
    status: string;
  };
}

export const FeedBackTableRow = ({
  data,
  index,
}: IFeedBackData): React.ReactElement => {
  return (
    <tr className="border-2 border-boxOutline">
      <td className="pl-2 border-r-2 border-boxOutline h-[60px]">
        <Typography className="text-SecondaryColor">{index + 1}</Typography>
      </td>
      <td>
        <Typography className="text-SecondaryColor pl-2">
          {data.type}
        </Typography>
      </td>
      <td>
        <Typography className="text-SecondaryColor">{data.subject}</Typography>
      </td>
      <td>
        <Typography className="text-SecondaryColor">
          {data.description}
        </Typography>
      </td>
      <td>
        <Typography className="text-SecondaryColor">{data.status}</Typography>
      </td>

      <td className="h-full border-l-2 border-boxOutline pl-8">
        <FeedbackTableMenu />
      </td>
    </tr>
  );
};
