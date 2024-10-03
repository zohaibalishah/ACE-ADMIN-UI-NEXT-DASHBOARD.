import { DropEditMenu } from "@/app/components/ClubManagement";
import { DropDownMenu, Typography } from "@/app/components/common";
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";

type IIndex = {
  index: number;
};
interface IData extends IIndex {
  data: {
    name: string;
    clubName: string;
    matcheDate: string;
    status: string;
    location: string;
  };
}

export const MatchesTableRow = ({ data, index }: IData): React.ReactElement => {
  return (
    <tr key={data.name} className="border-2 border-boxOutline">
      <td className="h-[40px] sm:h-[60px] border-r-[1px] border-boxOutline pl-3 ">
        <Typography variant="bodyRegular" className="text-SecondaryColor">
          {index + 1}
        </Typography>
      </td>
      <td>
        <Typography variant="bodyRegular" className="text-SecondaryColor">
          {data.name}
        </Typography>
      </td>
      <td>
        <Typography variant="bodyRegular" className="text-SecondaryColor">
          {data.clubName}
        </Typography>
      </td>
      <td>
        <Typography variant="bodyRegular" className="text-SecondaryColor">
          {data.matcheDate}
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
