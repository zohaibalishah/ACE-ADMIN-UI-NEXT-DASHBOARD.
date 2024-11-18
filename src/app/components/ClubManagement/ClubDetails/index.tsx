"use client";

import React, { SetStateAction, useState } from "react";
import { Modal, PrimaryButton, TableWrapper, Typography } from "../../common";
import { DatePickerField, SelectField, TextField } from "../../form";

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

export const ClubDetails = ({ isOpen, setIsOpen }: IProps) => {
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className="w-full lg:w-[792px] border-2 border-boxOutline/50 rounded-xl"
    >
      <div className="relative p-3.5 sm:p-6 rounded-xl bg-bgShadow border border-SecondaryColor/70">
        <Typography variant="h5Bold" className="text-SecondaryColor text-start">
          Downtown Club
        </Typography>
        <TableWrapper TableHeadData={clubsOwnersHead}>
          {Array.from({ length: 7 }).map((td, index) => (
            <tr className="border-b border-boxOutline h-[60px]" key={index}>
              <td className="pl-2 border-r-2 border-boxOutline">
                <Typography className="text-SecondaryColor">
                  {index + 1}
                </Typography>
              </td>

              <td className="pl-4 border-boxOutline">
                <div className="flex gap-3 items-center">
                  <span className="w-9 h-9 rounded-full border border-white text-white inline-flex justify-center items-center">
                    AJ
                  </span>
                  <Typography className="text-SecondaryColor">
                    Aqib Javid
                  </Typography>
                </div>
              </td>
              <td className="border-boxOutline">
                <Typography className="text-SecondaryColor">Padel</Typography>
              </td>
              <td className="border-boxOutline">
                <Typography className="text-SecondaryColor">
                  2024-07-18 10:00
                </Typography>
              </td>
              <td className="border-boxOutline">
                <div className="px-5 py-1 rounded-xl bg-PrimaryColor inline-flex justify-center items-center">
                  <Typography
                    variant="bodyMedium"
                    className="text-SecondaryColor"
                  >
                    1/4 Confirmed
                  </Typography>
                </div>
              </td>
            </tr>
          ))}
        </TableWrapper>
      </div>
    </Modal>
  );
};
