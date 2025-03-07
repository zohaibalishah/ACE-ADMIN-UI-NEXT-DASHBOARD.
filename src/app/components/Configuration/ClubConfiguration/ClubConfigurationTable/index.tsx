"use client";

import {
  ActionsDropdown,
  TableWrapper,
  Typography,
} from "@/app/components/common";
import {
  CLUB_CONFIGURATION_TABLE_HEAD,
  CLUB_CONFIGURATION_TABLE_ROW,
} from "@/app/utils/data";
import React, { useState } from "react";
import { ClubConfigTableRow } from "./ClubConfigTableRow";
import { BiEditAlt } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { IAction } from "@/app/base/types";
import { EditClubModal } from "../EditClubModal";
import { UpdateContract } from "@/app/components/ClubManagement";
import { MdOutlineLibraryBooks } from "react-icons/md";

export const ClubConfigurationTable = (): React.ReactElement => {
  const [show, setShow] = useState<boolean>(false);
  const [isContractOpen, setIsContractOpen] = useState<boolean>(false);

  const actions: IAction[] = [
    {
      icon: <MdOutlineLibraryBooks />,
      title: "Contract",
      onClick: () => setIsContractOpen(true),
    },
    {
      icon: <BiEditAlt />,
      title: "Edit",
      onClick: () => setShow(true),
    },
    {
      icon: <AiOutlineDelete />,
      title: "Suspend",
    },
  ];
  return (
    <>
      <TableWrapper TableHeadData={CLUB_CONFIGURATION_TABLE_HEAD}>
        {CLUB_CONFIGURATION_TABLE_ROW.map((data, index) => {
          return (
            <tr key={index} className="border-2 border-boxOutline">
              <td className="pl-2 border-r-2 border-boxOutline h-[60px]">
                <Typography className="text-SecondaryColor">
                  {index + 1}
                </Typography>
              </td>
              <td>
                <Typography className="text-SecondaryColor pl-2">
                  {data.clubName}
                </Typography>
              </td>
              <td>
                <Typography className="text-SecondaryColor">
                  {data.profit}
                </Typography>
              </td>
              <td>
                <Typography className="text-SecondaryColor">
                  {data.startContract}
                </Typography>
              </td>
              <td>
                <Typography className="text-SecondaryColor ">
                  {data.endContract}
                </Typography>
              </td>

              <td className="h-full border-boxOutline pl-4 text-white relative">
                <ActionsDropdown actions={actions} />
              </td>
            </tr>
          );
        })}
      </TableWrapper>
      <EditClubModal isOpen={show} setIsOpen={setShow} />
      <UpdateContract isOpen={isContractOpen} setIsOpen={setIsContractOpen} />
    </>
  );
};
