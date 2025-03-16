import {
  MImage,
  Modal,
  PrimaryButton,
  Typography,
} from '@/app/components/common';
import { TextField } from '@/app/components/form';
import React, { SetStateAction, useState } from 'react';

interface IProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  onChangeTitle: (title: string) => void;
  onSubmit: () => void;
  placeholder:string
}

export const AddCountryModal = ({
  isOpen,
  setIsOpen,
  onChangeTitle,
  onSubmit,
  placeholder
}: IProps): React.ReactElement => {

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className="w-full sm:w-[598px] !h-[355px] border-2 border-SecondaryColor/50 rounded-xl"
    >
      <div className="p-6 flex flex-col gap-y-4">
        <Typography variant="h5Bold" className="text-SecondaryColor">
          Add new Country
        </Typography>
        <TextField
          placeholder={placeholder}
          onChange={(e) => onChangeTitle(e.target.value)}
        />

        <div className="w-full mt-4">
          <PrimaryButton
            title="Add"
            className="w-full sm:w-[222px] h-[48px] "
            onClick={() => {
              onSubmit();
            }}
          />
        </div>
      </div>
    </Modal>
  );
};
