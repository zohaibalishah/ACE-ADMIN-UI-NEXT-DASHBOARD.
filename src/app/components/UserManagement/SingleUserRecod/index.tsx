"use client";
import React, { useState } from "react";
import { DropDownMenu, Typography } from "../../common";
import { BsThreeDots } from "react-icons/bs";

type IKey = {
  index: number;
};

interface IPerson extends IKey {
  person: {
    name: string;
    email: string;
    phoneNumber: string;
    walletBalance: string;
    gender: string;
    location: string;
    link: string | undefined;
  };
}

export const SingleUserRecord = ({
  person,
  index,
}: IPerson): React.ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div>
      <div className="text-white flex justify-between items-center text-start border-[1px] border-boxOutline h-[60px] ">
        <Typography
          variant="bodyRegular"
          className="w-[40px] h-full border-r-2 border-boxOutline flex justify-center items-center"
        >
          {index + 1}
        </Typography>

        <div className="flex gap-x-2 items-center w-[170px] h-full pl-4">
          <div className="w-[36px] h-[36.8px] border-[1px] border-SecondaryColor rounded-full flex justify-center items-center">
            <Typography>IJ</Typography>
          </div>
          <Typography>{person.name}</Typography>
        </div>

        <Typography className="w-[220px] pl-3">{person.email}</Typography>

        <Typography className="w-[180px]">{person.phoneNumber}</Typography>

        <Typography className="w-[130px]">{person.walletBalance}</Typography>

        <Typography className="w-[90px]">{person.gender}</Typography>

        <Typography className="w-[132px]">{person.location}</Typography>

        <Typography
          variant="h3"
          className=" h-full flex justify-center items-center w-[100px] pl-8 border-l-[1px] border-boxOutline "
        >
          <button
            className="cursor-pointer relative"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <BsThreeDots />
            {isOpen && (
              <div className="absolute top-6 right-0 z-10">
                <DropDownMenu link={person.link} />
              </div>
            )}
          </button>
        </Typography>
      </div>
    </div>
  );
};
