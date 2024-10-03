import { PrimaryButton, Typography } from "@/app/components/common";
import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { AddFacilityModal } from "../AddFacilityModal";

export const ApplicationConfigurationTitle = (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex items-center justify-between flex-wrap gap-4">
      <Typography variant="h5Bold" className="text-SecondaryColor">
        Application configuration
      </Typography>
      <PrimaryButton
        title="Add new"
        icon={<FiPlus />}
        className="sm:!w-[128px] !h-[42px]"
        onClick={() => setIsOpen(true)}
      />
      {isOpen && <AddFacilityModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
};
