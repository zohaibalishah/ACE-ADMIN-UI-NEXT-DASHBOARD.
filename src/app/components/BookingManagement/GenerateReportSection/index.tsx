import React from "react";
import { DatePicker, DatePickerSecondary, Typography } from "../../common";

export const GenerateReport = (): React.ReactElement => {
  return (
    <div className="flex justify-between items-center flex-wrap gap-y-3 sm:gap-y-0 py-3 md:py-6 ">
      <Typography variant="h5Bold" className="text-SecondaryColor">
        Booking management
      </Typography>
      <div className="flex items-center gap-x-2 sm:gap-x-4 w-full sm:w-auto">
        <button className="w-full h-[42px] sm:w-[166px] sm:h-[49px] p-2 border-2 border-boxOutline rounded-lg ">
          <Typography variant="bodyMedium" className="text-SecondaryColor">
            Generate report
          </Typography>
        </button>
        <DatePickerSecondary className="w-[219px] h-[49px]" />
      </div>
    </div>
  );
};
