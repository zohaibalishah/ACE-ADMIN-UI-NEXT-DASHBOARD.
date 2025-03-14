"use client";

import { Modal, PrimaryButton, Typography } from "@/app/components/common";
import { TextField } from "@/app/components/form";
import React, { SetStateAction } from "react";

interface IProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}
export const EditUserModal = ({ isOpen, setIsOpen }: IProps) => {
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className="!w-[598px] !h-[418px] rounded-xl border-2 border-SecondaryColor/50 p-8 "
    >
      <div className="flex flex-col gap-y-2">
        <Typography
          variant="h5Bold"
          className="text-SecondaryColor text-start mb-2"
        >
          Edit user profile
        </Typography>
        <TextField placeholder="User name" className="!w-[534px]" />
        <TextField placeholder="Age" className="!w-[534px]" />
        <TextField placeholder="Address" className="!w-[534px]" />
        <PrimaryButton title="Login" className="!w-[248px] !h-[48px] mt-4" />
      </div>
    </Modal>
  );
};
