import { Typography } from "@/app/components/common";
import React from "react";
import { UserTableActionMenu } from "../../UserTableActionMenu";
interface IData {
  index: number;
  data: {
    profile: string;
    name: string;
    email: string;
    phoneNumber: number;
    walletBalance: number;
    gender: string;
    location: string;
  };
}
export const UserTableRow = ({ data, index }: IData): React.ReactElement => {
  return (
    <>
      <tr className="h-[60px] border-2 border-boxOutline">
        <td className="w-[60px] pl-2 border-r-2 border-boxOutline">
          <Typography className="text-SecondaryColor">{index + 1}</Typography>
        </td>
        <td className="pl-2">
          <div className="flex items-center gap-x-2">
            <span className="w-[36px] h-[36.8px] border-2 border-boxOutline rounded-full text-SecondaryColor flex justify-center items-center">
              {data.profile}
            </span>
            <Typography className="text-SecondaryColor">{data.name}</Typography>
          </div>
        </td>
        <td>
          <Typography className="text-SecondaryColor">{data.email}</Typography>
        </td>
        <td>
          <Typography className="text-SecondaryColor">
            {data.phoneNumber}
          </Typography>
        </td>
        <td>
          <Typography className="text-SecondaryColor">
            {data.walletBalance}
          </Typography>
        </td>
        <td>
          <Typography className="text-SecondaryColor">{data.gender}</Typography>
        </td>
        <td>
          <Typography className="text-SecondaryColor">
            {data.location}
          </Typography>
        </td>
        <td className=" border-l-[1px] border-boxOutline pl-6 relative">
          <div>
            <UserTableActionMenu index={index} />
          </div>
        </td>
      </tr>
    </>
  );
};
