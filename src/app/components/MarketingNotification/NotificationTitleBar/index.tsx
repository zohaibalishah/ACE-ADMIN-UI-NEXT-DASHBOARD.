"use client";
import { ReactElement, useState } from "react";
import { PrimaryButton, Typography } from "../../common";
import { MarketingModal } from "../MarketingModal";

export const NotificationTitleBar = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between flex-wrap gap-4">
        <Typography variant="h5Bold" className="text-SecondaryColor">
          Marketing Notification
        </Typography>
        <PrimaryButton
          title="Send notification"
          className="!w-[164px] !h-[42px] !rounded-xl"
          onClick={() => setIsOpen(true)}
        />
      </div>
      {isOpen && <MarketingModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
};
