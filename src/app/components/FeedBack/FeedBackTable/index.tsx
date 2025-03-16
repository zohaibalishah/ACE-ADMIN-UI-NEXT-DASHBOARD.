import { IAction } from '@/app/base/types';
import {
  ActionsDropdown,
  MImage,
  TableWrapper,
  Typography,
} from '@/app/components/common';

import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi';

interface ConfigurationData {
  id: number;
  subject: string;
  type: string;
  description: string;
  status: string; // Added missing 'status' property
  reply?:string
}

interface ConfigurationTableProps {
  data: ConfigurationData[];
  setResolvedData: (data: ConfigurationData,action:string) => void;
}

export const FeedBackTable: React.FC<ConfigurationTableProps> = ({
  data,
  setResolvedData,
}) => {
  const actions: Omit<IAction, 'onClick'>[] = [
    {
      icon: <BiEditAlt />,
      title: 'View',
    },
    {
      icon: <AiOutlineDelete />,
      title: 'Resolved',
    },
  ];

  return (
    <TableWrapper
      TableHeadData={['S no', 'Subject', 'Type', 'Description', 'Status','Action']}
    >
      {data.map((td, index) => (
        <tr key={td.id} className="border-2 border-boxOutline cursor-pointer">
          <td className="pl-2 border-r-2 border-boxOutline h-[60px]">
            <Typography className="text-SecondaryColor">{index + 1}</Typography>
          </td>
          <td className="pl-2 border-r-2 border-boxOutline h-[60px]">
            <Typography className="text-SecondaryColor pl-4">
              {td.subject}
            </Typography>
          </td>
          <td className="pl-2 border-r-2 border-boxOutline h-[60px]">
            <Typography className="text-SecondaryColor pl-4">
              {td.type}
            </Typography>
          </td>
          <td className="pl-2 border-r-2 border-boxOutline h-[60px]">
            <Typography className="text-SecondaryColor pl-4">
              {td.description}
            </Typography>
          </td>
          <td className="pl-2 border-r-2 border-boxOutline h-[60px]">
            <Typography className="text-SecondaryColor pl-4">
              {td.status}
            </Typography>
          </td>
          <td className="h-full border-boxOutline pl-4 text-white">
            <ActionsDropdown
              actions={actions.map((action) => ({
                ...action,
                onClick:
                  action.title === 'Resolved' ||action.title ===  'View'
                    ? () => setResolvedData(td,action.title)
                    : undefined,
              }))}
            />
          </td>
        </tr>
      ))}
    </TableWrapper>
  );
};
