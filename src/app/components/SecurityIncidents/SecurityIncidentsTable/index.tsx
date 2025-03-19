import { SECURITY_INCIDENTS_TABLE_HEAD } from '@/app/utils/data';
import React from 'react';
import { ActionsDropdown, TableWrapper, Typography } from '../../common';
import { IAction } from '@/app/base/types';
import { BiEditAlt, BiVector } from 'react-icons/bi';
import { LuEye } from 'react-icons/lu';
import { ISysmetLogs } from '@/lib/interfaces';
import { AiFillRead } from 'react-icons/ai';

interface SecurityIncidentsTableProps {
  data: ISysmetLogs[];
  setResolvedData: (data: ISysmetLogs, action: string) => void;
}

export const SecurityIncidentsTable: React.FC<SecurityIncidentsTableProps> = ({
  data,
  setResolvedData ,
}) => {
  const actions: Omit<IAction, 'onClick'>[] = [
    {
      icon: <LuEye />,
      title: 'View',
    },
    {
      icon: <AiFillRead />,
      title: 'Resolved',
    },
  ];
  return (
    <TableWrapper TableHeadData={SECURITY_INCIDENTS_TABLE_HEAD}>
      {data.map((incident, index) => (
        <tr key={index} className="border-2 border-boxOutline">
          <td className="pl-2 border-r-2 border-boxOutline h-[60px]">
            <Typography className="text-SecondaryColor">{index + 1}</Typography>
          </td>
          <td>
            <Typography className="text-SecondaryColor pl-4">
              {incident.description}
            </Typography>
          </td>
          <td>
            <Typography className="text-SecondaryColor">
              {incident.date}
            </Typography>
          </td>
          <td>
            <Typography className="text-SecondaryColor">
              {incident.status}
            </Typography>
          </td>
          <td className="h-full border-l-2 border-boxOutline pl-4">
            <ActionsDropdown
              actions={actions.map((action) => ({
                ...action,
                onClick:()=> action.title === 'Resolved' || action.title === 'View'
                    ? () => setResolvedData(incident, action.title)
                    : undefined,
              }))}
            />
          </td>
        </tr>
      ))}
    </TableWrapper>
  );
};
