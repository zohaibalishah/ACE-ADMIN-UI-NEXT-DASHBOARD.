"use client";

import React, { SetStateAction, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { Modal, PrimaryButton, Typography } from "../../common";
import { DatePickerField, SelectField, TextField } from "../../form";

interface IProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}
export const CreateClubModal = ({ isOpen, setIsOpen }: IProps) => {
  const [open, setOpen] = useState(true);

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className="w-[598px] h-[782px] border-2 border-boxOutline/50 rounded-xl"
    >
      <div className="relative p-6 rounded-xl bg-bgShadow border-[1px] border-SecondaryColor/70">
        <form action="" className="flex flex-col gap-y-4">
          <Typography variant="h5Bold" className="text-SecondaryColor">
            Add new club
          </Typography>
          <TextField placeholder="Club Name" />
          <div>
            <SelectField placeholder="Country" />
          </div>
          <div>
            <SelectField placeholder="City" className="mt-3" />
          </div>
          <TextField placeholder="Street address" />
          <TextField placeholder="Club owner" />
          <Typography variant="bodyMedium" className="text-white">
            Contract
          </Typography>
          <div className="flex gap-x-8">
            <div>
              <DatePickerField
                placeholder="Start Date of Contract"
                className="w-[255px]"
              />
            </div>
            <div>
              <DatePickerField
                placeholder="End Date of Contract"
                className="w-[255px]"
              />
            </div>
          </div>
          <TextField placeholder="Profit percentage" />
          <PrimaryButton title="Add" className="!w-[222px] !h-[48px]" />
        </form>
      </div>
    </Modal>
  );
};
