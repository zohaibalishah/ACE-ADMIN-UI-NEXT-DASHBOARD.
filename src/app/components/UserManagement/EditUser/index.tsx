'use client';

import React, { SetStateAction } from 'react';
import { TextField } from '../../form';
import { Modal, PrimaryButton, Typography } from '../../common';

interface FormData {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  gender: string;
  dob: string;
}

interface Props {
  formData: FormData;
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  isEdit: boolean;
}

export const EditUser = ({
  isOpen,
  setIsOpen,
  isEdit = false,
  formData,
  handleChange,
  handleSubmit,
}: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className="w-full max-w-[598px] border rounded-xl"
    >
      <div className="flex items-center justify-center p-5 sm:p-8">
        <form
          className="flex flex-col gap-3.5 sm:gap-6 w-full"
          onSubmit={handleSubmit}
        >
          <Typography variant="h5Bold" className="text-start text-white mb-3">
            {isEdit ? 'Edit user profile' : 'Add new user'}
          </Typography>
          <TextField
            name="name"
            placeholder="name"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />

          <TextField
            name="dob"
            type="date"
            placeholder="Date of Birth"
            value={formData.dob || ''}
            onChange={handleChange}
          />

          <div className="flex flex-col gap-2">
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full h-[46px] xl:h-[56px] px-5 rounded-full outline-none border-2 border-transparent focus:border-PrimaryColor bg-bgBox bg-opacity-80 text-white"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <TextField
            name="phone"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
          />
          <TextField
            name="password"
            placeholder="Password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
          <TextField
            name="confirmPassword"
            placeholder="Confirm Password"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <div className="flex justify-start">
            <PrimaryButton
              type="submit"
              title={`${isEdit ? 'Update' : 'Add'}`}
              className="!w-[243px] !h-[48px] mt-5"
            />
          </div>
        </form>
      </div>
    </Modal>
  );
};
