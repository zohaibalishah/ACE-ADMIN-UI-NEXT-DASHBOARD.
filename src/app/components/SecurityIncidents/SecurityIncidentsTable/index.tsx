import {
  SECURITY_INCIDENTS_TABLE_HEAD,
  SECURITY_INCIDENTS_TABLE_ROW,
} from "@/app/utils/data";
import React from "react";
import { ActionsDropdown, TableWrapper, Typography } from "../../common";
import { IAction } from "@/app/base/types";
import { BiEditAlt } from "react-icons/bi";
import { LuEye } from "react-icons/lu";

export const SecurityIncidentsTable = (): React.ReactElement => {
  const actions: IAction[] = [
    {
      icon: <LuEye />,
      title: "View",
    },
    {
      icon: <BiEditAlt />,
      title: "Resolve",
    },
  ];
  return (
    <TableWrapper TableHeadData={SECURITY_INCIDENTS_TABLE_HEAD}>
      {SECURITY_INCIDENTS_TABLE_ROW.map((data, index) => {
        return (
          <tr key={index} className="border-2 border-boxOutline">
            <td className="pl-2 border-r-2 border-boxOutline h-[60px]">
              <Typography className="text-SecondaryColor">
                {index + 1}
              </Typography>
            </td>
            <td>
              <Typography className="text-SecondaryColor pl-4">
                {data.discription}
              </Typography>
            </td>
            <td>
              <Typography className="text-SecondaryColor">
                {data.detectedOn}
              </Typography>
            </td>
            <td>
              <Typography className="text-SecondaryColor">
                {data.status}
              </Typography>
            </td>

            <td className="h-full border-l-2 border-boxOutline pl-4">
              <ActionsDropdown actions={actions} />
            </td>
          </tr>
        );
      })}
    </TableWrapper>
  );
};
