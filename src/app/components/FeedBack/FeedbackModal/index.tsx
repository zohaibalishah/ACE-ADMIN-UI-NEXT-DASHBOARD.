import React, { SetStateAction } from "react";
import { Modal, PrimaryButton, Typography } from "../../common";
import { TextAreaField } from "../../form";

interface IProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}

export const FeedbackModal = ({
  isOpen,
  setIsOpen,
}: IProps): React.ReactElement => {
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className="!w-[598px] h-full sm:h-[578px] border-2 border-SecondaryColor/50 rounded-xl p-8"
    >
      <div className="flex flex-col gap-y-6">
        <Typography variant="h5Bold" className="text-SecondaryColor">
          Support and Feedback
        </Typography>
        <Typography className="text-SecondaryColor">
          Type : Suggestion
        </Typography>
        <Typography className="text-SecondaryColor">
          Subject : Need some suggestion in a query
        </Typography>
        <Typography className="text-SecondaryColor text-[18px]">
          Description : I have faced some issues regarding backend api and want
          to know about the process of it. Please help me in finding the result
          of courts and other players who want to play with other teams in the
          same time and having same court location with different prices.
        </Typography>
        <Typography className="text-SecondaryColor">Add note here</Typography>

        <TextAreaField placeholder="Description" />
        <div className="flex items-center justify-end gap-x-3">
          <PrimaryButton
            title="Cancel"
            className="!w-[113px] !h-[36px] bg-bgBox rounded-xl"
            onClick={() => setIsOpen(false)}
          />
          <PrimaryButton
            title="Resolve"
            className="!w-[113px] !h-[36px] rounded-xl"
            onClick={() => setIsOpen(false)}
          />
        </div>
      </div>
    </Modal>
  );
};
