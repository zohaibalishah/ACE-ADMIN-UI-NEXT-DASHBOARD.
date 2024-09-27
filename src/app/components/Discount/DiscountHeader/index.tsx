import React from "react";
import { DatePickerSecondary, PrimaryButton, Typography } from "../../common";
import { HiOutlinePlus } from "react-icons/hi";

export const DiscountHeader = (): React.ReactElement => {
  return (
    <div className="flex items-center justify-between flex-wrap gap-y-2 sm:gap-y-0">
      <Typography variant="h5Bold" className="text-secondary">
        Discount code
      </Typography>
      <div className="flex flex-col sm:flex-row items-center gap-x-4 w-full sm:w-auto gap-y-2 sm:gap-y-0">
        <DatePickerSecondary className="w-full !sm:w-[219px] sm:!h-[49px]" />
        <PrimaryButton
          title="Add new code"
          icon={<HiOutlinePlus />}
          className="w-full sm:!w-[164px] !h-[44px]"
        />
      </div>
    </div>
  );
};
