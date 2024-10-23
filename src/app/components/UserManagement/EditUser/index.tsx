"use client";

import React, { SetStateAction } from "react";
import { TextField } from "../../form";
import { Modal, PrimaryButton, Typography } from "../../common";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  isEdit: boolean;
}

export const EditUser = ({ isOpen, setIsOpen, isEdit = false }: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className="w-full max-w-[598px] border rounded-xl"
    >
      <div className="flex items-center justify-center p-5 sm:p-8">
        <form className="flex flex-col gap-3.5 sm:gap-6 w-full">
          <Typography variant="h5Bold" className="text-start text-white mb-3">
            {isEdit ? "Edit user profile" : "Add new user"}
          </Typography>
          <TextField placeholder="User name" />
          <TextField placeholder="Age" />
          <TextField placeholder="Address" />
          <div className="flex justify-start">
            <PrimaryButton
              title={`${isEdit ? "Update" : "Add"}`}
              className="!w-[243px] !h-[48px] mt-5"
            />
          </div>
        </form>
      </div>
    </Modal>
  );
};
