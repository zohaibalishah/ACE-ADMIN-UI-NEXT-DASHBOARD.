import React from "react";
import { Typography } from "../Typography";
import { IoIosArrowDown } from "react-icons/io";

export const ThisMonth = (): React.ReactElement => {
  return (
    <div className="text-SecondaryColor flex items-center justify-center cursor-pointer w-[126px] h-[46px] rounded-lg bg-boxOutline pl-2">
      <div className="flex items-center w-full">
        <select className="bg-boxOutline outline-none w-full cursor-pointer px-2">
          <option>This month</option>
          <option>Last month</option>
          <option>Last year</option>
        </select>
        {/* <IoIosArrowDown /> */}
      </div>
    </div>
  );
};
