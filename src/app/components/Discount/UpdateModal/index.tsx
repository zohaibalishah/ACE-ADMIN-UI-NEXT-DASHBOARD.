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

export const UpdateModal = ({ isOpen, setIsOpen }: Props) => {
  // State to keep track of which radio button is selected
  const [selectedOption, setSelectedOption] = useState<string>("one-time");

  // Method to handle radio button selection
  const handleRadioSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className={`border-2 border-SecondaryColor/50 rounded-xl p-8`}
    >
      <div className="bg-bgShadow flex flex-col gap-y-4">
        <Typography variant="h5Bold" className="text-SecondaryColor">
          Update discount
        </Typography>
        <TextField placeholder="SUMMER20" className="!md:w-[534px] !h-[58px]" />
        <div className="mt-4">
          <SelectField />
        </div>
        <TextField placeholder="SAR 10" className="!md:w-[534px] !h-[58px]" />
        <div className="flex gap-x-3 py-4">
          <DatePicker placeholder="Start date" />
          <DatePicker placeholder="End date" />
        </div>
        <div>
          <Typography className="text-SecondaryColor">
            Discount code use
          </Typography>
          <div className="py-4 flex gap-x-4 ">
            <Typography className="text-SecondaryColor">
              {/* RadioButton for 'One time for player' */}
              <RadioButton
                label="One time for player"
                checked={selectedOption === "one-time"}
                onCheck={() => handleRadioSelect("one-time")}
              />
            </Typography>
            <Typography
              variant="bodyMedium"
              className="text-SecondaryColor flex items-center gap-x-2"
            >
              {/* RadioButton for 'Multiple time' */}
              <RadioButton
                label="Multiple time"
                checked={selectedOption === "multiple"}
                onCheck={() => handleRadioSelect("multiple")}
              />
            </Typography>
          </div>
        </div>
        <div>
          <PrimaryButton
            title="Update"
            className="md:!w-[243px]"
            onClick={() => setIsOpen(false)}
          />
        </div>
      </div>
    </Modal>
  );
};
