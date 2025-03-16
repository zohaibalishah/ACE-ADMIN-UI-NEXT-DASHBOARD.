import React from 'react';
import { Modal, PrimaryButton, Typography } from '../../common';
import { TextAreaField } from '../../form';

interface Feedback {
  type: string;
  subject: string;
  description: string;
  status: string;
  action: string;
  reply?:string
}

interface FeedbackModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  feedback: Feedback;
  submitResolved: () => void;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const FeedbackModal: React.FC<FeedbackModalProps> = ({
  feedback,
  setIsOpen,
  isOpen,
  submitResolved,
  handleChange
}) => {
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className="!w-[598px] h-full sm:h-[578px] border-2 border-SecondaryColor/50 rounded-xl p-8"
    >
      <div className="flex flex-col gap-y-6">
        <Typography variant="h5Bold" className="text-SecondaryColor">
          Subject: {feedback?.subject}
        </Typography>
        <Typography className="text-SecondaryColor">
          Type: {feedback?.type}
        </Typography>
        <Typography className="text-SecondaryColor">
          Description: {feedback?.description}
        </Typography>
        <Typography className="text-SecondaryColor">
          Status: {feedback?.status}
        </Typography>

        <Typography className="text-SecondaryColor">
          Replay: {feedback?.reply}
        </Typography>
        {feedback?.action == 'Resolved' && feedback.status=="Open"&& (
          <>
            <Typography className="text-SecondaryColor">
              Add note here
            </Typography>
            <TextAreaField placeholder="Description" onChange={handleChange} />
          </>
        )}

        <div className="flex items-center justify-end gap-x-3">
          <PrimaryButton
            title="Cancel"
            className="!w-[113px] !h-[36px] bg-bgBox rounded-xl"
            onClick={() => setIsOpen(false)}
          />
          {feedback?.action == 'Resolved'&& feedback.status=="Open" && (
            <PrimaryButton
              title="Resolve"
              className="!w-[113px] !h-[36px] rounded-xl"
              onClick={submitResolved}
            />
          )}
        </div>
      </div>
    </Modal>
  );
};
