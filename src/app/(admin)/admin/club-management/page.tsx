"use client";

import { IAction } from "@/app/base/types";
import { ClubFilters, CreateOwnerModal } from "@/app/components/ClubManagement";
import {
  ActionsDropdown,
  TableWrapper,
  Typography,
} from "@/app/components/common";
import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";

const clubsOwnersHead = [
  "S No",
  "Name",
  "Email",
  "Phone number",
  "Total courts",
  "Action",
];

function ClubManagement() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const actions: IAction[] = [
    {
      icon: <BiEditAlt />,
      title: "Edit",
    },

    {
      icon: <AiOutlineDelete />,
      title: "Delete",
    },
  ];

  return (
    <>
      <ClubFilters onAdd={() => setIsOpen(true)} />
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
              <Typography className="text-SecondaryColor">
                aqib.official@gmail.com
              </Typography>
            </td>
            <td className="border-boxOutline">
              <Typography className="text-SecondaryColor">
                +966148754306
              </Typography>
            </td>
            <td className="border-boxOutline">
              <Typography className="text-SecondaryColor">4</Typography>
            </td>
            <td className="border-boxOutline pl-3">
              <ActionsDropdown actions={actions} />
            </td>
          </tr>
        ))}
      </TableWrapper>
      <CreateOwnerModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default ClubManagement;
