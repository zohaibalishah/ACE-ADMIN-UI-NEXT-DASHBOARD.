import React from "react";
import { DatePickerSecondary, Typography } from "../../common";

interface ILabel {
  label: string;
}

export const SecurityIncidentBar = ({ label }: ILabel): React.ReactElement => {
  return (
    <>
      <div className="flex items-center justify-between flex-wrap gap-y-2 py-6 ">
        <Typography variant="h5Bold" className="text-SecondaryColor">
          {label}
        </Typography>
        {/* <DatePickerSecondary className="!w-[219px] !h-[49px]" /> */}
      </div>
    </>
  );
};
