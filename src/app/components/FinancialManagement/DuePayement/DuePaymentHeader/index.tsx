import {
  DatePickerSecondary,
  PrimaryButton,
  Typography,
} from "@/app/components/common";
import React from "react";

export const DuePaymentHeader = (): React.ReactElement => {
  return (
    <>
      <div className="sm:flex justify-between items-center flex-wrap">
        <Typography
          variant="h5Bold"
          className="text-SecondaryColor pb-3 md:pb-0"
        >
          Due Payment to Club
        </Typography>
        <div className="flex items-center gap-x-3 flex-wrap">
          <div className="flex gap-3 flex-col sm:flex-row items-center rounded-lg w-full sm:w-auto">
            <div className="treasurySelect">
              <select className="w-[156px] p-3 bg-boxOutline text-SecondaryColor outline-none rounded-lg">
                <option value="">Club name (all)</option>
              </select>
            </div>
            <DatePickerSecondary className="!h-[49px] !w-full  !sm:w-[173px] rounded-lg" />
          </div>
          <div className=" w-full sm:w-[113px]">
            <PrimaryButton
              title="Generate"
              className="!w-full !sm:w-[113px] !h-[44px] mt-3 sm:mt-0"
            />
          </div>
        </div>
      </div>
    </>
  );
};
