"use client";

import { Modal, TableWrapper, Typography } from "@/app/components/common";
import React, { SetStateAction } from "react";

interface IProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}
const clubsOwnersHead = [
  "S No",
  "Name",
  "Sport type",
  "Booking Date",
  "Status",
];

export const MatchDetails = ({ isOpen, setIsOpen }: IProps) => {
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className="w-full lg:w-[628px] border-2 border-boxOutline/50 rounded-xl"
    >
      <div className="relative p-3.5 sm:p-6 rounded-xl bg-bgShadow border border-SecondaryColor/70">
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <span className="inline-flex justify-center items-center w-9 h-9 rounded-full border border-SecondaryColor text-SecondaryColor text-sm">
              AJ
            </span>
            <div>
              <Typography className="text-SecondaryColor">
                Aqib Javid
              </Typography>
              <Typography
                variant="smallRegular"
                className="text-SecondaryColor text-left"
              >
                2014-07-18
              </Typography>
            </div>
          </div>
          <div className="px-5 py-1 rounded-xl bg-PrimaryColor inline-flex justify-center items-center">
            <Typography variant="bodyMedium" className="text-SecondaryColor">
              1/4 Confirmed
            </Typography>
          </div>
        </div>
        <div className="mt-9">
          <div className="flex justify-between items-center">
            <Typography className="text-SecondaryColor">Type</Typography>
            <Typography className="text-SecondaryColor">Booking</Typography>
          </div>
        </div>
        <div className="mt-5">
          <div className="flex justify-between items-center">
            <Typography className="text-SecondaryColor">Club name</Typography>
            <Typography className="text-SecondaryColor">Fit Club</Typography>
          </div>
        </div>
        <div className="mt-5">
          <div className="flex justify-between items-center">
            <Typography className="text-SecondaryColor">Amount</Typography>
            <Typography className="text-SecondaryColor">$50</Typography>
          </div>
        </div>
      </div>
    </Modal>
  );
};
