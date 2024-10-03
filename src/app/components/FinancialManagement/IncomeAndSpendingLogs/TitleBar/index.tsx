import { DatePickerSecondary, Typography } from "@/app/components/common";
import React from "react";

export const TitleBar = (): React.ReactElement => {
  return (
    <>
      <div className="sm:flex justify-between items-center">
        <Typography
          variant="h5Bold"
          className="text-SecondaryColor pb-3 sm:pb-0"
        >
          Income and Spending Logs
        </Typography>
        <div className="flex gap-x-3 items-center rounded-lg w-full sm:w-auto">
          <div className="financialSelect">
            <select
              name=""
              id=""
              className=" w-[73px] p-3 bg-boxOutline text-SecondaryColor outline-none rounded-lg"
            >
              <option value="">All</option>
            </select>
          </div>
          <DatePickerSecondary className="!h-[49px] !w-full  !sm:w-[173px] rounded-lg" />
        </div>
      </div>
    </>
  );
};
