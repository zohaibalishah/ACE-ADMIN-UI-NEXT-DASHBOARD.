import { PrimaryButton, Typography } from '@/app/components/common';
import React from 'react';
import { FiPlus } from 'react-icons/fi';

interface CountryTitleProps {
  setIsOpen: (isOpen: boolean) => void;
}

export const CountryTitle: React.FC<CountryTitleProps> = ({ setIsOpen }) => {
  return (
    <div className="flex items-center justify-between flex-wrap gap-4">
      <Typography variant="h5Bold" className="text-SecondaryColor">
        Country configuration
      </Typography>
      <PrimaryButton
        title="Add new"
        icon={<FiPlus />}
        className="sm:!w-[128px] !h-[42px]"
        onClick={() => setIsOpen(true)}
      />
    </div>
  );
};
