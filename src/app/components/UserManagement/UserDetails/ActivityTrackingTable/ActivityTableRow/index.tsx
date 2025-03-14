import { Typography } from "@/app/components/common";
import React from "react";

type IIndex = {
  index: number;
};

interface IData extends IIndex {
  data: {
    appUses: string;
    timeSpent: string;
    lastActive: string;
  };
}

export const ActivityTableRow = ({
  data,
  index,
}: IData): React.ReactElement => {
  return (
    <tr className="h-[60px] border-2 border-boxOutline">
      <td className="border-r-2 border-boxOutline">
        <Typography className="text-SecondaryColor pl-2">
          {index + 1}
        </Typography>
      </td>
      <td className="pl-2">
        <Typography className="text-SecondaryColor">{data.appUses}</Typography>
      </td>
      <td>
        <Typography className="text-SecondaryColor">
          {data.timeSpent}
        </Typography>
      </td>
      <td>
        <Typography className="text-SecondaryColor">
          {data.lastActive}
        </Typography>
      </td>
    </tr>
  );
};
