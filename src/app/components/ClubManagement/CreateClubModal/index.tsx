"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { PrimaryButton, Typography } from "../../common";
import { DatePickerField, SelectField, TextField } from "../../form";

export const CreateClubModal = () => {
  const [open, setOpen] = useState(true);

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-bgDark bg-opacity-60  transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-30 w-screen overflow-y-auto ">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 w-full  sm:max-w-[598px] data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 text-left"
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
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
