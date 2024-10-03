"use client";

import { Typography } from "@/app/components/common";

interface IData {
  index: number;
  data: {
    clubName: string;
    clubOwner: string;
    transictionType: string;
    amount: string;
    discription: string;
  };
}

export const IncomeTableRow = ({ data, index }: IData): React.ReactElement => {
  return (
    <tr key={data.clubName} className="border-2 border-boxOutline">
      <td className="pl-2 border-r-2 border-boxOutline h-[60px]">
        <Typography className="text-SecondaryColor">{index + 1}</Typography>
      </td>
      <td>
        <Typography className="text-SecondaryColor pl-2">
          {data.clubName}
        </Typography>
      </td>
      <td>
        <Typography className="text-SecondaryColor pl-2">
          {data.clubOwner}
        </Typography>
      </td>
      <td>
        <Typography className="text-SecondaryColor">
          {data.transictionType}
        </Typography>
      </td>
      <td>
        <Typography className="text-SecondaryColor">{data.amount}</Typography>
      </td>
      <td>
        <Typography className="text-SecondaryColor pl-3">
          {data.discription}
        </Typography>
      </td>
    </tr>
  );
};
