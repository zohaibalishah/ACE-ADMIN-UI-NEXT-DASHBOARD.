import React from 'react';
import { Modal, PrimaryButton, Typography } from '../../components/common';
import { TextAreaField } from '../../components/form';
import { ISysmetLogs } from '@/lib/interfaces';


interface FeedbackModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  feedback: ISysmetLogs;
  submitResolved: () => void;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const LogModal: React.FC<FeedbackModalProps> = ({
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
          Action : {feedback?.action}
        </Typography>
        <Typography className="text-SecondaryColor">
        Log Type: {feedback?.logType}
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
