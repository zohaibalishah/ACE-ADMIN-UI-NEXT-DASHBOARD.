"use client";

import React, { SetStateAction, useState } from "react";
import { Modal, PrimaryButton, Typography } from "../../common";
import { DatePickerField, SelectField, TextField } from "../../form";

interface IProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}
export const UpdateContract = ({ isOpen, setIsOpen }: IProps) => {
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className="w-[598px] border-2 border-boxOutline/50 rounded-xl"
    >
      <div className="relative p-3.5 sm:p-6 rounded-xl bg-bgShadow border border-SecondaryColor/70">
        <form className="flex flex-col gap-3.5 sm:gap-6">
          <Typography
            variant="h5Bold"
            className="text-SecondaryColor text-start"
          >
            Update contract
          </Typography>
          <TextField placeholder="Club Name" />
          <TextField
            type="date"
            placeholder="Start contract date"
            className="flex-1"
          />
          <SelectField
            placeholder="Duration"
            options={[{ label: "1 year", value: "1 year" }]}
          />
          <SelectField
            placeholder="Monthly"
            options={[{ label: "Monthly", value: "Monthly" }]}
          />
          <TextField placeholder="5%" />
          <PrimaryButton title="Create" className="w-full !h-[48px] mt-4" />
        </form>
      </div>
    </Modal>
  );
};
