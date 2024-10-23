import {
  ActionsDropdown,
  TableWrapper,
  Typography,
} from "@/app/components/common";
import { AUDIT_LOGS_TABLE_HEAD, AUDIT_LOGS_TABLE_ROW } from "@/app/utils/data";
import React from "react";
import { LuEye } from "react-icons/lu";
import { IAction } from "@/app/base/types";

export const AudtiLogsTable = (): React.ReactElement => {
  return (
    <TableWrapper TableHeadData={AUDIT_LOGS_TABLE_HEAD}>
      {AUDIT_LOGS_TABLE_ROW.map((data, index) => {
        const actions: IAction[] = [
          {
            icon: <LuEye />,
            title: "View",
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
                {data.action}
              </Typography>
            </td>
            <td>
              <Typography className="text-SecondaryColor">
                {data.user}
              </Typography>
            </td>
            <td>
              <Typography className="text-SecondaryColor">
                {data.timeStamp}
              </Typography>
            </td>
            <td>
              <Typography className="text-SecondaryColor">
                {data.details}
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
