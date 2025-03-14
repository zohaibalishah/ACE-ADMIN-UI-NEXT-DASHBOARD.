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
  image: string | null;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export const ConfigurationTable = ({ data }: { data: ConfigurationData[] }): React.ReactElement => {
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
      <TableWrapper TableHeadData={['S no', 'Title', 'Icon','Status', 'Action']}>
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
              <td>
                <MImage src={td.image || ''} w={24} h={24} alt="icon" />
              </td>
              <td>
                <Typography className="text-SecondaryColor pl-4">
                  {td.status}
                </Typography>
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
