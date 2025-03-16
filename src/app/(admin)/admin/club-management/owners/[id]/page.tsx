"use client";

import { IAction } from "@/app/base/types";
import {
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
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { FiEye } from "react-icons/fi";
import { IoChevronBackOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import { MdOutlineLibraryBooks } from "react-icons/md";

const clubsOwnersHead = [
  "S No",
  "ID",
  "Club name",
  "Contract duration",
  "Contract date",
  "Address",
  "Action",
];

const OwnerClubsPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isView, setIsView] = useState<boolean>(false);
  const [isContractOpen, setIsContractOpen] = useState<boolean>(false);
  const [isOpenRes, setIsOpenRes] = useState<boolean>(false);
  const router = useRouter();

  const actions: IAction[] = [
    {
      icon: <FiEye />,
      title: "View",
      onClick: () => setIsView(true),
    },
    {
      icon: <MdOutlineLibraryBooks />,
      title: "Contract",
      onClick: () => setIsContractOpen(true),
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
    <section>
      <button
        className="flex gap-1 items-center"
        onClick={() => {
          router.back();
        }}
      >
        <IoChevronBackOutline className="text-SecondaryColor text-xl mt-0.5" />
        <Typography className="text-SecondaryColor">Back</Typography>
      </button>
      <Typography variant="h5Light" className="text-SecondaryColor mt-6">
        Aqib Javid Clubs
      </Typography>
      <TableWrapper TableHeadData={clubsOwnersHead}>
        {Array.from({ length: 4 }).map((td, index) => (
          <tr className="border-b border-boxOutline h-[60px]" key={index}>
            <td className="px-3 text-nowrap border-r-2 border-boxOutline">
              <Typography className="text-SecondaryColor">
                {index + 1}
              </Typography>
            </td>
            <td className="border-boxOutline px-3 text-nowrap">
              <Typography className="text-SecondaryColor">101</Typography>
            </td>
            <td className="border-boxOutline px-3 text-nowrap">
              <Typography className="text-SecondaryColor">
                Downtown Club
              </Typography>
            </td>
            <td className="border-boxOutline px-3 text-nowrap">
              <Typography className="text-SecondaryColor">One year</Typography>
            </td>
            <td className="border-boxOutline px-3 text-nowrap">
              <Typography className="text-SecondaryColor">
                2024-07-31
              </Typography>
            </td>
            <td className="border-boxOutline px-3 text-nowrap">
              <Typography className="text-SecondaryColor">
                Markazi Dist, Riyadh, KSA
              </Typography>
            </td>
            <td className="border-boxOutline px-3 text-nowrap">
              <ActionsDropdown actions={actions} />
            </td>
          </tr>
        ))}
      </TableWrapper>
      <CreateClubModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <ClubDetails isOpen={isView} setIsOpen={setIsView} />
      <UpdateContract isOpen={isContractOpen} setIsOpen={setIsContractOpen} />
      <ReservationDetails isOpen={isOpenRes} handleClosed={setIsOpenRes} />
    </section>
  );
};

export default OwnerClubsPage;
