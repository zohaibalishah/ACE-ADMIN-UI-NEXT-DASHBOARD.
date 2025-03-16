import { IAction } from "@/app/base/types";
import {
  ActionsDropdown,
  MImage,
  TableWrapper,
  Typography,
} from "@/app/components/common";

import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";

interface ConfigurationData {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
}

interface ConfigurationTableProps {
  data: ConfigurationData[];
  onDelete: (id: number) => void;
}

export const ConfigurationTable = ({ data, onDelete }: ConfigurationTableProps): React.ReactElement => {
  const actions: Omit<IAction, 'onClick'>[] = [
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
      <TableWrapper TableHeadData={['S no', 'Title',  'Action']}>
        {data && data.map((td, index) => {
          return (
            <tr key={td.id} className="border-2 border-boxOutline">
              <td className="pl-2 border-r-2 border-boxOutline h-[60px]">
                <Typography className="text-SecondaryColor">
                  {index + 1}
                </Typography>
              </td>
              <td>
                <Typography className="text-SecondaryColor pl-4">
                  {td.title}
                </Typography>
              </td>
              <td className="h-full border-boxOutline pl-4 text-white">
                <ActionsDropdown actions={actions.map(action => ({
                  ...action,
                  onClick: action.title === "Delete" ? () => onDelete(td.id) : undefined
                }))} />
              </td>
            </tr>
          );
        })}
      </TableWrapper>
    </>
  );
};
