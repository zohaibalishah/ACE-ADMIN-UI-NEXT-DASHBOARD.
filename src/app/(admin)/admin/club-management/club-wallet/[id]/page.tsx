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
  "Player",
  "Match type",
  "Sport type",
  "Court",
  "Location",
  "Cancelled date",
  "Wallet",
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
      <div className="flex flex-col gap-5">
        <button
          className="flex gap-1 items-center"
          onClick={() => {
            router.back();
          }}
        >
          <IoChevronBackOutline className="text-SecondaryColor text-xl mt-0.5" />
          <Typography className="text-SecondaryColor">Back</Typography>
        </button>
        <Typography variant="h2" className="text-SecondaryColor">
          SAR 276
        </Typography>
        <Typography className="text-SecondaryColor">Downtown Club</Typography>
        <Typography variant="h5Light" className="text-SecondaryColor">
          Club Wallet history
        </Typography>
      </div>
      <TableWrapper TableHeadData={clubsOwnersHead}>
        {Array.from({ length: 4 }).map((td, index) => (
          <tr className="border-b border-boxOutline h-[60px]" key={index}>
            <td className="px-3 text-nowrap border-r-2 border-boxOutline">
              <Typography className="text-SecondaryColor">
                {index + 1}
              </Typography>
            </td>
            <td className="border-boxOutline px-3 text-nowrap">
              <Typography className="text-SecondaryColor">
                Aqib Javid
              </Typography>
            </td>
            <td className="border-boxOutline px-3 text-nowrap">
              <Typography className="text-SecondaryColor">Single</Typography>
            </td>
            <td className="border-boxOutline px-3 text-nowrap">
              <Typography className="text-SecondaryColor">Tennis</Typography>
            </td>
            <td className="border-boxOutline px-3 text-nowrap">
              <Typography className="text-SecondaryColor">
                Geraldine Mary Harmsworth
              </Typography>
            </td>
            <td className="border-boxOutline px-3 text-nowrap">
              <Typography className="text-SecondaryColor">
                Hard Rock Tennis <br /> Stadium, Miami, USA
              </Typography>
            </td>
            <td className="border-boxOutline px-3 text-nowrap">
              <Typography className="text-SecondaryColor">
                2024-07-31
              </Typography>
            </td>
            <td className="border-boxOutline px-3 text-nowrap">
              <Typography className="text-SecondaryColor">SAR 50</Typography>
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
