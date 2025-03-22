'use client';
import api from '@/lib/api-client';
import React, { SetStateAction, FC } from 'react';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { TextField } from '../../form';
import { PrimaryButton, Typography } from '../../common';

interface FormData {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

interface Props {
  formData: FormData;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  userId: number | null;
}

export const CreateOwnerModal: FC<Props> = ({
  formData,
  handleChange,
  handleSubmit,
  isOpen,
  setIsOpen,
  userId
}) => {
  return (
    <Dialog open={isOpen} onClose={setIsOpen} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-bgShadow bg-opacity-60 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed top-10 inset-0 z-50 w-screen overflow-y-auto">
        <div className="flex min-h-full justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-xl bg-bgShadow border-2 border-SecondaryColor/80 shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in w-full max-w-[598px] data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="flex items-center justify-center p-4 sm:p-8">
              <form
                className="flex flex-col gap-3.5 sm:gap-6 w-full"
                onSubmit={handleSubmit}
              >
                <Typography
                  variant="h5Bold"
                  className="text-start text-white mb-3"
                >
                  Add new Club Owner
                </Typography>
                <TextField
                  name="name"
                  placeholder="Club owner name"
                  value={formData?.name}
                  onChange={handleChange}
                />
                <TextField
                  name="email"
                  placeholder="Email"
                  value={formData?.email}
                  onChange={handleChange}
                  disabled={!!userId}
                />
                <TextField
                  name="phone"
                  placeholder="Phone number"
                  value={formData?.phone}
                  onChange={handleChange}
                />
                
                  <TextField
                    name="password"
                    placeholder="Password"
                    type="password"
                    onChange={handleChange}
                  />
                  <TextField
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    type="password"
                    onChange={handleChange}
                  />
                <div className="flex justify-start">
                  <PrimaryButton
                    title="Create"
                    className="sm:w-[243px] !h-[48px] mt-5"
                    type="submit"
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
