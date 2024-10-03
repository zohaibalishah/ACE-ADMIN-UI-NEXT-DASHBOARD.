import React, { SetStateAction } from "react";
import { Modal } from "../../../common/Modal/index";
import { Typography } from "../../../common/Typography/index";
import { TextField } from "../../../form/TextField/index";
import {
  DatePicker,
  DatePickerSecondary,
  PrimaryButton,
} from "../../../common";

interface IProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}
export const EditClubModal = ({
  isOpen,
  setIsOpen,
}: IProps): React.ReactElement => {
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className="w-full sm:w-[498px] sm:h-[409px] p-4 border-2 border-SecondaryColor/50 rounded-xl flex flex-col justify-center"
    >
      <div className="flex flex-col gap-y-4">
        <Typography variant="h5Bold" className="text-SecondaryColor">
          Edit club
        </Typography>
        <TextField placeholder="Club name" />
        <div className="flex gap-4">
          <DatePicker placeholder="Start contract date" />
          <DatePicker placeholder="End contract date" />
        </div>
        <TextField placeholder="Profit percentage" />
        <PrimaryButton
          title="Update"
          className="sm:!w-[248px] !h-[48px]"
          onClick={() => setIsOpen(false)}
        />
      </div>
    </Modal>
  );
};
