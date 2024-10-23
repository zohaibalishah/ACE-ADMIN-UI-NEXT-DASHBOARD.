"use client";

import { IAction } from "@/app/base/types";
import { ClubFilters, CreateClubModal } from "@/app/components/ClubManagement";
import {
  ActionsDropdown,
  TableWrapper,
  ToggleButton,
  Typography,
} from "@/app/components/common";
import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";

const clubsOwnersHead = [
  "S No",
  "ID",
  "Club name",
  "Address",
  "Owner name",
  "Wallet obligation",
  "Status",
  "Action",
];

const TotalClubsHome = () => {
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
            <td className="border-boxOutline pl-4">
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
            <td className="border-boxOutline">
              <Typography className="text-SecondaryColor">
                Najee Abid
              </Typography>
            </td>
            <td className="border-boxOutline">
              <Typography className="text-SecondaryColor">SAR 276</Typography>
            </td>
            <td>
              <ToggleButton />
            </td>
            <td className="border-boxOutline pl-3">
              <ActionsDropdown actions={actions} />
            </td>
          </tr>
        ))}
      </TableWrapper>
      <CreateClubModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default TotalClubsHome;
