"use client";

import { IAction } from "@/app/base/types";
import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { LuEye } from "react-icons/lu";
import { BiEditAlt } from "react-icons/bi";
import { UserSearchBar } from "../UserSearchBar";
import { ActionsDropdown, TableWrapper, Typography } from "../../common";
import { EditUser } from "../EditUser";
import { routes } from "@/app/utils/const";
import { useRouter } from "next/navigation";

const tableHead = [
  "S no",
  "Name",
  "Email",
  "Phone number",
  "Wallet balance",
  "Gender",
  "Location",
  "Action",
];

export const UsersTable = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const actions: IAction[] = [
    {
      icon: <LuEye />,
      title: "View",
      onClick: () => router.push(routes.userdetails),
    },
    {
      icon: <BiEditAlt />,
      title: "Edit",
      onClick: () => {
        setIsOpen(true);
        setIsEdit(true);
      },
    },
    {
      icon: <AiOutlineDelete />,
      title: "Suspend",
    },
  ];
  return (
    <>
      <UserSearchBar
        title="Total User's"
        onAddUser={() => {
          setIsEdit(false);
          setIsOpen(true);
        }}
      />
      <TableWrapper TableHeadData={tableHead}>
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
              <Typography className="text-SecondaryColor">SAR 100</Typography>
            </td>
            <td className="border-boxOutline">
              <Typography className="text-SecondaryColor">Male</Typography>
            </td>
            <td className="border-boxOutline">
              <Typography className="text-SecondaryColor">
                Jeddah, KSA
              </Typography>
            </td>
            <td className="border-boxOutline pl-3">
              <ActionsDropdown actions={actions} />
            </td>
          </tr>
        ))}
      </TableWrapper>
      <EditUser isOpen={isOpen} setIsOpen={setIsOpen} isEdit={isEdit} />
    </>
  );
};
