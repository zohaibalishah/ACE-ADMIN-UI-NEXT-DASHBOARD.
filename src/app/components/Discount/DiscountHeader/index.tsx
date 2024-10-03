"use client";
import React, { useState } from "react";
import { DatePickerSecondary, PrimaryButton, Typography } from "../../common";
import { HiOutlinePlus } from "react-icons/hi";
import { DiscountCreateModal } from "../DiscountCreateModal";

export const DiscountHeader = (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
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
          onClick={() => setIsOpen(true)}
        />
      </div>
      {isOpen && <DiscountCreateModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
};
