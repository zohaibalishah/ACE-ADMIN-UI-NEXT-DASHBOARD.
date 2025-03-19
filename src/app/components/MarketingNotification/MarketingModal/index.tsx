"use client";
import React, { SetStateAction, useEffect, useState } from "react";
import { Modal, PrimaryButton, Typography } from "../../common";
import { DatePickerField, TextAreaField, TextField } from "../../form";

interface IModal {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  postNotification: () => void;
  handleInputChange: (field: string, value: any) => void;
  formData: {
    title: string;
    message: string;
    schedule: any;
  };
}

export const MarketingModal = ({
  isOpen,
  postNotification,
  setIsOpen,
  handleInputChange,
  formData
}: IModal): React.ReactElement => {
  const [animateModal, setAnimateModal] = useState(false);

  useEffect(() => {
    setAnimateModal(isOpen);
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className={`!w-full !h-[390px] sm:!w-[598px] sm:!h-[486px] border-2 border-SecondaryColor/50 rounded-xl transform transition-all duration-500 ${
        animateModal ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
    >
      <div className="flex flex-col gap-y-2 sm:gap-y-4 p-4 sm:p-8 justify-center">
        <Typography variant="h5Bold" className="text-secondary">
          Send new notification
        </Typography>
        <TextField
          placeholder="Title"
          value={formData.title}
          onChange={(e) => handleInputChange('title', e.target.value)}
        />
        <TextAreaField
          placeholder="Message"
          value={formData.message}
          onChange={(e) => handleInputChange('message', e.target.value)}
        />
        {/* <DatePickerField
          placeholder="Schedule (optional)"
          value={formData.schedule}
          onChange={(date: any) => handleInputChange('schedule', date)}
        /> */}
        <PrimaryButton
          title="Send"
          className="sm:!w-[231px] !h-[48px] my-3"
          onClick={postNotification}
        />
      </div>
    </Modal>
  );
};
