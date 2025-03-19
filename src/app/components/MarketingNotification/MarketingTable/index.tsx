
import React from "react";
import { Typography } from "../../common";
const MARKETING_TABLE_HEAD = [
  'ID',
  'Date & Time',
  "Title",
  'Description',
  'Activity type',

];
import { INotification } from "@/lib/interfaces";

interface MarketingTableProps {
  data: INotification[]; // Replaced 'any' with 'INotification' type
}

export const MarketingTable: React.FC<MarketingTableProps> = ({ data }) => {
  return (
    <div className="w-full overflow-hidden overflow-x-scroll py-6">
      <table className="min-w-[800px] md:min-w-[900px] lg:min-w-[600px] w-full table-auto text-left">
        <thead>
          <tr>
            {MARKETING_TABLE_HEAD.map((header, index) => (
              <th
                key={index}
                className={`px-3 text-nowrap bg-boxOutline ${
                  index === 0 ? "rounded-tl-2xl" : ""
                }
                ${
                  index === MARKETING_TABLE_HEAD.length - 1
                    ? "rounded-tr-2xl"
                    : ""
                } py-3`}
              >
                <Typography
                  variant="bodyRegular"
                  className="text-SecondaryColor font-normal"
                >
                  {header}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data && data.map((rowData) => {
            return (
              <tr
                key={rowData.id}
                className="border-b-2 border-boxOutline h-[60px]"
              >
                <td className="px-3 text-nowrap">
                  <Typography className="text-SecondaryColor">
                    {rowData.id}
                  </Typography>
                </td>
                <td className="px-3 text-nowrap">
                  <Typography className="text-SecondaryColor">{rowData.createdAt}</Typography>
                </td>
                <td className="px-3 text-nowrap">
                  <Typography className="text-SecondaryColor">
                    {rowData.title}
                  </Typography>
                </td>
                <td className="px-3 text-nowrap">
                  <Typography className="text-SecondaryColor">
                    {rowData.description}
                  </Typography>
                </td>
                <td className="px-3 text-nowrap">
                  <Typography className="text-SecondaryColor">
                    {rowData.notificationType}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
