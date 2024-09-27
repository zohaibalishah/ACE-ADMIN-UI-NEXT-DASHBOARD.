"use client";
import { useState } from "react";
import { Typography } from "../../common";
import { BsThreeDots } from "react-icons/bs";
import { DropEditMenu } from "../DropEditMenu";

type IIndex = {
  index: number;
};

interface IRecord extends IIndex {
  item: {
    name: string;
    email: string;
    phone: string;
    courts: number | string;
  };
}

export const SingleRecordTable = ({ item, index }: IRecord) => {
  const [isOpen, setIsOpen] = useState<boolean>();
  return (
    <div className="h-[40px] md:h-[60px] w-full border-[1px] border-boxOutline flex items-center ">
      <div className="text-SecondaryColor flex items-center ">
        <Typography className="w-[46px] pl-2">{index + 1}</Typography>
        <div className="w-[250px] flex items-center gap-x-3 border-l-2 py-5 border-boxOutline pl-8">
          <div className="w-[28px] h-[28px] md:w-[36px] md:h-[36px] flex items-center justify-center border-2 border-white rounded-full">
            <Typography>IK</Typography>
          </div>
          <Typography>{item.name}</Typography>
        </div>
        <Typography className="w-[190px] md:w-[272px]">{item.email}</Typography>
        <Typography className="w-[190px] md:w-[240px]">{item.phone}</Typography>
        <Typography className="w-[120px] md:w-[160px]">
          {item.courts}
        </Typography>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative w-[100px]"
        >
          <Typography
            variant="h3"
            className="pl-8 border-l-2 py-5 border-boxOutline cursor-pointer "
          >
            <BsThreeDots />
          </Typography>
          {isOpen && (
            <div className="absolute top-0 right-10">
              <DropEditMenu />
            </div>
          )}
        </button>
      </div>
    </div>
  );
};
