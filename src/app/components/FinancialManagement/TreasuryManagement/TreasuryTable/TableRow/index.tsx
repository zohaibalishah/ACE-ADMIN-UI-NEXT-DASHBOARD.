"use client";

import { MImage, Typography } from "@/app/components/common";

interface IData {
  index: number;
  data: {
    clubName: string;
    clubOwner: string;
    clubProfit: string;
    totalIncome: string;
    transactionDue: string;
    action: string;
  };
}

export const TreasuryTableRow = ({
  data,
  index,
}: IData): React.ReactElement => {
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
        <Typography className="text-SecondaryColor pl-2">
          {data.clubOwner}
        </Typography>
      </td>
      <td>
        <Typography className="text-SecondaryColor pl-2">
          {data.clubProfit}
        </Typography>
      </td>
      <td>
        <Typography className="text-SecondaryColor">
          {data.totalIncome}
        </Typography>
      </td>
      <td>
        <Typography className="text-SecondaryColor">
          {data.transactionDue}
        </Typography>
      </td>
      <td>
        <div className="flex items-center justify-center gap-x-2 w-[108px] h-[36px] rounded-lg bg-PrimaryColor">
          <Typography variant="bodyMedium" className="text-SecondaryColor">
            {data.action}
          </Typography>
        </div>
      </td>
      <td>
        <div className="flex items-center justify-center gap-x-2 w-[108px] h-[36px] rounded-lg bg-boxOutline">
          <MImage src={"/icons/stroke3.png"} w={10} h={7} alt="stroke" />
          <Typography variant="bodyMedium" className="text-SecondaryColor">
            Confirmed
          </Typography>
        </div>
      </td>
    </tr>
  );
};
