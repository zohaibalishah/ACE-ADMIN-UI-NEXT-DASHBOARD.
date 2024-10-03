"use client";
import React, { SetStateAction, useEffect, useState } from "react";
import { Modal, PrimaryButton, Typography } from "../../common";
import { DatePickerField, TextAreaField, TextField } from "../../form";

interface IModal {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}
export const MarketingModal = ({
  isOpen,
  setIsOpen,
}: IModal): React.ReactElement => {
  // State to control animation class
  const [animateModal, setAnimateModal] = useState(false);

  // Trigger animation when modal opens
  useEffect(() => {
    if (isOpen) {
      // Add animation class when modal opens
      setAnimateModal(true);
    } else {
      // Remove animation when modal closes
      setAnimateModal(false);
    }
  }, [isOpen]);
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className={`!w-full !h-[390px] sm:!w-[598px] sm:!h-[486px] border-2 border-SecondaryColor/50 rounded-xl transform transition-all duration-500  ${
        animateModal ? "opacity-100 scale-100 " : "opacity-0 scale-95  "
      }`}
    >
      <div className="flex flex-col gap-y-2 sm:gap-y-4 p-4 sm:p-8 justify-center ">
        <Typography variant="h5Bold" className="text-secondary">
          Send new notification
        </Typography>
        <TextField placeholder="Title" />
        <TextAreaField placeholder="Message" />
        <DatePickerField placeholder="Schedule (optional)" />
        <PrimaryButton
          title="Send"
          className=" sm:!w-[231px] !h-[48px] my-3"
          onClick={() => setIsOpen(false)}
        />
      </div>
    </Modal>
  );
};
