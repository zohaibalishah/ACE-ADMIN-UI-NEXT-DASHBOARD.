import {
  ActionsDropdown,
  TableWrapper,
  Typography,
} from '@/app/components/common';
import { AUDIT_LOGS_TABLE_HEAD, AUDIT_LOGS_TABLE_ROW } from '@/app/utils/data';
import React from 'react';
import { LuEye } from 'react-icons/lu';
import { IAction } from '@/app/base/types';
import { ISysmetLogs } from '@/lib/interfaces';

interface AudtiLogsTableProps {
  data: ISysmetLogs[];
}
export const AudtiLogsTable: React.FC<AudtiLogsTableProps> = ({
  data,
}): React.ReactElement => {
  return (
    <TableWrapper TableHeadData={AUDIT_LOGS_TABLE_HEAD}>
      {data &&
        data.map((dataauditlogs, index) => {
          const actions: IAction[] = [
            {
              icon: <LuEye />,
              title: 'View',
            },
          ];
          return (
            <tr className="border-2 border-boxOutline" key={index}>
              <td className="pl-2 border-r-2 border-boxOutline h-[60px]">
                <Typography className="text-SecondaryColor">
                  {index + 1}
                </Typography>
              </td>
              <td>
                <Typography className="text-SecondaryColor pl-4">
                  {dataauditlogs.action}
                </Typography>
              </td>
              <td>
                <Typography className="text-SecondaryColor">
                  {dataauditlogs.user?.name}
                </Typography>
              </td>
              <td>
                <Typography className="text-SecondaryColor">
                  {dataauditlogs.date}
                </Typography>
              </td>
              <td>
                <Typography className="text-SecondaryColor">
                  {dataauditlogs.description}
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
