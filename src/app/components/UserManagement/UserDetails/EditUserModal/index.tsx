"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { PrimaryButton, Typography } from "@/app/components/common";
import { TextField } from "@/app/components/form";

export const EditUserModal = () => {
  const [open, setOpen] = useState(true);

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-20">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-bgShadow bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed flex items-center justify-center inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex justify-center p-4 text-center ">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-bgShadow shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="rounded-xl border-2 border-SecondaryColor p-8 flex flex-col gap-y-3">
              <Typography
                variant="h5Bold"
                className="text-SecondaryColor text-start mb-2"
              >
                Edit user profile
              </Typography>
              <TextField placeholder="User name" className="!w-[534px]" />
              <TextField placeholder="Age" className="!w-[534px]" />
              <TextField placeholder="Address" className="!w-[534px]" />
              <PrimaryButton
                title="Login"
                className="!w-[248px] !h-[48px] mt-4"
              />
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
