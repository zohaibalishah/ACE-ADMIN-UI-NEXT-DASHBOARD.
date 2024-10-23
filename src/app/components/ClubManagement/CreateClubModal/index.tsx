"use client";

import React, { SetStateAction, useState } from "react";
import { Modal, PrimaryButton, Typography } from "../../common";
import { DatePickerField, SelectField, TextField } from "../../form";

interface IProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}
export const CreateClubModal = ({ isOpen, setIsOpen }: IProps) => {
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
            Add new club
          </Typography>
          <TextField placeholder="Club Name" />
          <SelectField
            placeholder="Country"
            options={[{ label: "Pakistan", value: "pakistan" }]}
          />
          <SelectField
            placeholder="City"
            options={[{ label: "Peshawar", value: "Peshawar" }]}
          />
          <TextField placeholder="Street address" />
          <TextField placeholder="Club owner" />
          <Typography
            variant="bodyRegular"
            className="text-white text-start font-medium"
          >
            Contract
          </Typography>
          <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-6">
            <TextField
              type="date"
              placeholder="Start contract date"
              className="flex-1"
            />
            <TextField
              type="date"
              placeholder="Start contract date"
              className="flex-1"
            />
            {/* <DatePickerField
              placeholder="End Date of Contract"
              className="w-[255px]"
            /> */}
          </div>
          <TextField placeholder="Profit percentage" />
          <PrimaryButton
            title="Add"
            className="sm:max-w-[222px] !h-[48px] mt-4"
          />
        </form>
      </div>
    </Modal>
  );
};
