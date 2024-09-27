import React from "react";
import { Typography } from "..";
import { IoIosArrowDown } from "react-icons/io";

export const DropDownProfile = (): React.ReactElement => {
  return (
    <div className="flex items-center gap-x-3 bg-bgShadow p-2 rounded-xl cursor-pointer">
      <div className="w-[30px] h-[33px]  sm:w-[35px] sm:h-[38px] bg-PrimaryColor rounded-full text-SecondaryColor flex justify-center items-center">
        <Typography>E</Typography>
      </div>
      <Typography variant="bodyMedium" className="hidden sm:flex">
        Elite Sports Club
      </Typography>
      <Typography>
        <IoIosArrowDown />
      </Typography>
    </div>
  );
};
