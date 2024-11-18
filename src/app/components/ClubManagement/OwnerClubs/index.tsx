"use client";

import React, { SetStateAction, useState } from "react";
import { Modal, PrimaryButton, TableWrapper, Typography } from "../../common";
import { DatePickerField, SelectField, TextField } from "../../form";

interface IProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}
const clubsOwnersHead = ["S No", "ID", "Club name", "Address"];

export const OwnerClubs = ({ isOpen, setIsOpen }: IProps) => {
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className="w-full lg:w-[610px] border-2 border-boxOutline/50 rounded-xl"
    >
      <div className="relative p-3.5 sm:p-6 rounded-xl bg-bgShadow border border-SecondaryColor/70">
        <Typography variant="h5Bold" className="text-SecondaryColor text-start">
          Aqib Javid Clubs
        </Typography>
        <TableWrapper TableHeadData={clubsOwnersHead}>
          {Array.from({ length: 2 }).map((td, index) => (
            <tr className="border-b border-boxOutline h-[60px]" key={index}>
              <td className="pl-2 border-r-2 border-boxOutline">
                <Typography className="text-SecondaryColor">
                  {index + 1}
                </Typography>
              </td>

              <td className="border-boxOutline pl-2">
                <Typography className="text-SecondaryColor">101</Typography>
              </td>
              <td className="border-boxOutline">
                <Typography className="text-SecondaryColor">
                  Downtown Club
                </Typography>
              </td>
              <td className="border-boxOutline">
                <Typography className="text-SecondaryColor">
                  Markazi Dist, Riyadh, KSA
                </Typography>
              </td>
            </tr>
          ))}
        </TableWrapper>
      </div>
    </Modal>
  );
};
