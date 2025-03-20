import React from "react";
import { DatePickerSecondary, PrimaryButton, Typography } from "../../common";
import { HiOutlinePlus } from "react-icons/hi";

export const DiscountHeader = ({
  onAdd,
}: {
  onAdd: () => void;
}): React.ReactElement => {
  return (
    <div className="flex flex-wrap justify-between gap-y-2 items-center sm:gap-y-0">
      <Typography variant="h5Bold" className="text-secondary">
        Discount code
      </Typography>
      <div className="flex flex-col w-full gap-x-4 gap-y-2 items-center sm:flex-row sm:gap-y-0 sm:w-auto">
        {/* <DatePickerSecondary className="w-full !sm:w-[219px] sm:!h-[49px]" /> */}
        <PrimaryButton
          title="Add new code"
          icon={<HiOutlinePlus />}
          className="w-full !h-[44px] sm:!w-[164px]"
          onClick={onAdd}
        />
      </div>
    </div>
  );
};
