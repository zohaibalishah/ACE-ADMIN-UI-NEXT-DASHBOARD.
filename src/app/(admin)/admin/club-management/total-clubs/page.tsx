"use client";

import { IAction } from "@/app/base/types";
import {
  ClubCardSection,
  ClubDetails,
  ClubFilters,
  CreateClubModal,
  ReservationDetails,
  UpdateContract,
} from "@/app/components/ClubManagement";
import {
  ActionsDropdown,
  TableWrapper,
  ToggleButton,
  Typography,
} from "@/app/components/common";
import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { FiEye } from "react-icons/fi";
import { LuCalendarDays } from "react-icons/lu";
import { MdOutlineLibraryBooks } from "react-icons/md";

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
  const [isView, setIsView] = useState<boolean>(false);
  const [isContractOpen, setIsContractOpen] = useState<boolean>(false);
  const [isOpenRes, setIsOpenRes] = useState<boolean>(false);

  const actions: IAction[] = [
    {
      icon: <FiEye />,
      title: "View",
      onClick: () => setIsView(true),
    },

    {
      icon: <LuCalendarDays />,
      title: "Reservation",
      onClick: () => setIsOpenRes(true),
    },
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
      <ClubCardSection />
      <ClubFilters
        onAdd={() => setIsOpen(true)}
        title="Clubs Management"
        showButton={false}
      />
      <TableWrapper TableHeadData={clubsOwnersHead}>
        {Array.from({ length: 7 }).map((td, index) => (
          <tr className="border-b border-boxOutline h-[60px]" key={index}>
            <td className="px-3 text-nowrap border-r-2 border-boxOutline">
              <Typography className="text-SecondaryColor">
                {index + 1}
              </Typography>
            </td>
            <td className="px-3 text-nowrap">
              <Typography className="text-SecondaryColor">101</Typography>
            </td>
            <td className="px-3 text-nowrap">
              <Typography className="text-SecondaryColor">
                Downtown Club
              </Typography>
            </td>
            <td className="px-3 text-nowrap">
              <Typography className="text-SecondaryColor">
                Markazi Dist, Riyadh, KSA
              </Typography>
            </td>
            <td className="px-3 text-nowrap">
              <Typography className="text-SecondaryColor">
                Najee Abid
              </Typography>
            </td>
            <td className="px-3 text-nowrap">
              <Typography className="text-SecondaryColor">SAR 276</Typography>
            </td>
            <td>
              <ToggleButton />
            </td>
            <td className="px-3 text-nowrap">
              <ActionsDropdown actions={actions} />
            </td>
          </tr>
        ))}
      </TableWrapper>
      <CreateClubModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <ClubDetails isOpen={isView} setIsOpen={setIsView} />
      {/* <UpdateContract isOpen={isContractOpen} setIsOpen={setIsContractOpen} /> */}
      <ReservationDetails isOpen={isOpenRes} setIsOpen={setIsOpenRes} />
    </>
  );
};

export default TotalClubsHome;
