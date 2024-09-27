"use client";

import React, { SetStateAction, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { TextField } from "../../form";
import { PrimaryButton, Typography } from "../../common";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}

export const CreateOwnerModal = ({ isOpen, setIsOpen }: Props) => {
  const [open, setOpen] = useState(true);

  return (
    <Dialog open={isOpen} onClose={setIsOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-bgDark bg-opacity-60 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed top-10 inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-xl bg-bgShadow border-2 border-SecondaryColor/80 shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in w-full sm:w-[598px]  data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className=" flex items-center justify-center py-8">
              <form action="" className="flex flex-col gap-y-3">
                <Typography variant="h5Bold" className="text-start text-white">
                  Add new Club Owner
                </Typography>
                <TextField placeholder="Club name" className="!w-[534px]" />
                <TextField placeholder="Email" />
                <TextField placeholder="Phone number" />
                <TextField placeholder="Password" />
                <TextField placeholder="Conform Password" />
                <div className="flex justify-start">
                  <PrimaryButton
                    title="Create"
                    className="!w-[243px] !h-[48px]"
                  />
                </div>
              </form>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
