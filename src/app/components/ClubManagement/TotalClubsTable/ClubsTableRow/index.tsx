"use client";
import React, { useState } from "react";
import { DropDownMenu, ToggleButton, Typography } from "../../../common";
import { BsThreeDots } from "react-icons/bs";

type IKey = {
  index: number;
};

interface IRecord extends IKey {
  record: {
    id: string;
    clubName: string;
    address: string;
    ownerName: string;
    walletBalance: number | string;
  };
}
export const ClubsTableRow = ({
  record,
  index,
}: IRecord): React.ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <tr className="border-2 border-boxOutline h-[60px]">
      <td className="pl-2 border-r-2 border-boxOutline">
        <Typography className="text-SecondaryColor">{index + 1}</Typography>
      </td>
      <td className="pl-2">
        <Typography className="text-SecondaryColor">
          {record.clubName}
        </Typography>
      </td>
      <td>
        <Typography className="text-SecondaryColor">
          {record.address}
        </Typography>
      </td>
      <td>
        <Typography className="text-SecondaryColor">
          {record.ownerName}
        </Typography>
      </td>
      <td>
        <Typography className="text-SecondaryColor">
          {record.walletBalance}
        </Typography>
      </td>
      <td>
        <ToggleButton />
      </td>
      <td className="border-l-2 border-boxOutline pl-6 relative">
        <Typography className="text-SecondaryColor">
          <span
            className="cursor-pointer "
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <BsThreeDots />
            {isOpen && (
              <div className="absolute top-10 right-6 z-10 ">
                <DropDownMenu />
              </div>
            )}
          </span>
        </Typography>
      </td>
    </tr>
  );
};
