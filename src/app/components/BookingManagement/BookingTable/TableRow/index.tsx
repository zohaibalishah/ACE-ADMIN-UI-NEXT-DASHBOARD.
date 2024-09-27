import { DropEditMenu } from "@/app/components/ClubManagement";
import { DropDownMenu, Typography } from "@/app/components/common";
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";

interface IData {
  data: {
    sno: number;
    img: string;
    name: string;
    clubName: string;
    bookingDate: string;
    status: string;
    location: string;
  };
}

export const TableRow = ({ data }: IData): React.ReactElement => {
  return (
    <tr key={data.name} className="border-2 border-boxOutline">
      <td className="h-[40px] sm:h-[60px] border-r-[1px] border-boxOutline pl-3 ">
        <Typography variant="bodyRegular" className="text-SecondaryColor">
          {data.sno}
        </Typography>
      </td>
      <td>
        <div className="flex items-center gap-x-3 pl-4">
          <div className="w-[28px] h-[28.8px] sm:w-[36px] sm:h-[36.8px] rounded-full border-2 border-SecondaryColor flex items-center justify-center text-secondary font-normal text-sm">
            {data.img}
          </div>
          <Typography variant="bodyRegular" className="text-SecondaryColor">
            {data.name}
          </Typography>
        </div>
      </td>
      <td>
        <Typography variant="bodyRegular" className="text-SecondaryColor">
          {data.clubName}
        </Typography>
      </td>
      <td>
        <Typography variant="bodyRegular" className="text-SecondaryColor">
          {data.bookingDate}
        </Typography>
      </td>
      <td>
        <Typography variant="bodyRegular" className="text-SecondaryColor">
          {data.status}
        </Typography>
      </td>
      <td>
        <Typography variant="bodyRegular" className="text-SecondaryColor">
          {data.location}
        </Typography>
      </td>
      <td className=" border-l-[1px] border-boxOutline pl-6 relative">
        <button className="text-SecondaryColor">
          <BsThreeDots />
        </button>
      </td>
    </tr>
  );
};
