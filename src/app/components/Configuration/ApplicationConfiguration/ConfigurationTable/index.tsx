import { IAction } from "@/app/base/types";
import {
  ActionsDropdown,
  MImage,
  TableWrapper,
  Typography,
} from "@/app/components/common";
import {
  CONFIGURATION_TABLE_HEAD,
  CONFIGURATION_TABLE_ROW,
} from "@/app/utils/data";
import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";

export const ConfigurationTable = (): React.ReactElement => {
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
      <TableWrapper TableHeadData={CONFIGURATION_TABLE_HEAD}>
        {CONFIGURATION_TABLE_ROW.map((data, index) => {
          return (
            <tr key={index} className="border-2 border-boxOutline">
              <td className="pl-2 border-r-2 border-boxOutline h-[60px]">
                <Typography className="text-SecondaryColor">
                  {index + 1}
                </Typography>
              </td>
              <td>
                <Typography className="text-SecondaryColor pl-4">
                  {data.title}
                </Typography>
              </td>
              <td>
                <MImage src={data.icon} w={24} h={24} alt="icon" />
              </td>

              <td className="h-full border-boxOutline pl-4 text-white">
                <ActionsDropdown actions={actions} />
              </td>
            </tr>
          );
        })}
      </TableWrapper>
    </>
  );
};
