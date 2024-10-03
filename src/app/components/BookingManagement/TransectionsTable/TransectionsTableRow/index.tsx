import { MImage, Typography } from "@/app/components/common";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { clubManagementIcons } from "../../../../../../public/icons/clubManagementIcons";

type IIndex = {
  index: number;
};
interface IData extends IIndex {
  data: {
    type: string;
    userName: string;
    clubName: string;
    amount: string;
    paymentType: string;
    date: string;
    status: string;
  };
}

export const TransectionsTableRow = ({
  data,
  index,
}: IData): React.ReactElement => {
  return (
    <tr key={index} className="border-2 border-boxOutline">
      <td className="h-[40px] sm:h-[60px] border-r-[1px] border-boxOutline pl-3 ">
        <Typography variant="bodyRegular" className="text-SecondaryColor">
          {index + 1}
        </Typography>
      </td>
      <td>
        <Typography variant="bodyRegular" className="text-SecondaryColor pl-3">
          {data.type}
        </Typography>
      </td>
      <td>
        <Typography variant="bodyRegular" className="text-SecondaryColor">
          {data.userName}
        </Typography>
      </td>
      <td>
        <Typography variant="bodyRegular" className="text-SecondaryColor">
          {data.clubName}
        </Typography>
      </td>
      <td>
        <Typography variant="bodyRegular" className="text-SecondaryColor">
          {data.amount}
        </Typography>
      </td>
      <td>
        <Typography variant="bodyRegular" className="text-SecondaryColor">
          {data.date}
        </Typography>
      </td>
      <td>
        <Typography variant="bodyRegular" className="text-SecondaryColor">
          {data.status}
        </Typography>
      </td>
      <td>
        <Typography variant="bodyRegular" className="text-SecondaryColor">
          {data.paymentType}
        </Typography>
      </td>
      <td className="w-[100px] border-l-[1px] border-boxOutline pl-3">
        <div className=" flex items-center gap-x-2">
          <MImage
            src={clubManagementIcons.iconPreview}
            w={24}
            h={24}
            alt="preview"
          />
          <Typography variant="bodyMedium" className="text-SecondaryColor">
            View
          </Typography>
        </div>
      </td>
    </tr>
  );
};
