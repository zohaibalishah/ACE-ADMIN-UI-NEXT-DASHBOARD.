"use client";

import React, { SetStateAction, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { DatePicker, Modal, PrimaryButton, Typography } from "../../common";
import { RadioButton, SelectField, TextField } from "../../form";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}
export const DiscountCreateModal = ({ isOpen, setIsOpen }: Props) => {
  const [open, setOpen] = useState(true);
  const [selectedOption, setSelectedOption] = useState<string>(
    "One-time-for-player"
  );

  const handleRadioSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <Modal
      isOpen={open}
      setIsOpen={setOpen}
      className={` border-2 border-SecondaryColor/50 rounded-xl p-8`}
    >
      <div className="bg-bgShadow flex flex-col gap-y-4">
        <Typography variant="h5Bold" className="text-SecondaryColor">
          Create discount
        </Typography>
        <TextField
          placeholder="Code name"
          className="!md:w-[534px] !h-[58px]"
        />
        <div className="mt-4">
          <SelectField />
        </div>
        <TextField
          placeholder="Discount value"
          className="!md:w-[534px] !h-[58px]"
        />
        <div className="flex gap-x-3 py-4">
          <DatePicker placeholder="Start date" />
          <DatePicker placeholder="End date" />
        </div>
        <div>
          <Typography className="text-SecondaryColor">
            Discount code use
          </Typography>
          <div className="py-4 flex gap-x-4 ">
            <Typography className="text-SecondaryColor flex items-center gap-x-2">
              <RadioButton
                label="One time for player"
                checked={selectedOption === "One-time-for-player"}
                onCheck={() => handleRadioSelect("one-time-for-player")}
              />
            </Typography>
            <Typography
              variant="bodyMedium"
              className="text-SecondaryColor flex items-center gap-x-2"
            >
              <RadioButton
                label="Multiple time"
                checked={selectedOption === "multiple-time"}
                onCheck={() => handleRadioSelect("multiple-time")}
              />
            </Typography>
          </div>
        </div>
        <div>
          <PrimaryButton
            title="Create"
            className="md:!w-[243px]"
            onClick={() => setOpen(false)}
          />
        </div>
      </div>
    </Modal>
  );
};
