"use client";
import React, { useState } from "react";
import { DropDownMenu, ToggleButton, Typography } from "../../common";
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
export const TotalClubsSingleRecord = ({
  record,
  index,
}: IRecord): React.ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div>
      <div className="text-SecondaryColor h-[60px] flex items-center border-[1px] border-boxOutline px-3">
        <Typography className=" border-r-[1px] border-boxOutline h-full pr-8  flex justify-start items-center ">
          {index + 1}
        </Typography>
        <Typography className="pl-4 h-full flex justify-start items-center w-[58px]">
          {record.id}
        </Typography>
        <Typography className=" pl-4 h-full flex justify-start items-center w-[180px]">
          {record.clubName}
        </Typography>
        <Typography className="pl-4 h-full flex justify-start items-center w-[270px]">
          {record.address}
        </Typography>
        <Typography className="pl-4 h-full flex justify-start items-center w-[160px]">
          {record.ownerName}
        </Typography>
        <Typography className="pl-4 h-full flex justify-start items-center w-[144px]">
          {record.walletBalance}
        </Typography>
        <div className="pl-4 h-full flex justify-start items-center w-[110px]">
          <ToggleButton />
        </div>
        <Typography
          variant="h3"
          className=" h-full flex justify-center items-center w-[100px] pl-8 border-l-[1px] border-boxOutline relative"
        >
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
      </div>
    </div>
  );
};
