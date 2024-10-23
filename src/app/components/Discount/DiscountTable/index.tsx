"use client";

import { DISCOUNT_TABLE_HEAD, DISCOUNT_TABLE_ROW } from "@/app/utils/data";
import React from "react";
import { ActionsDropdown, TableWrapper, Typography } from "../../common";
import { IAction } from "@/app/base/types";
import { BiEditAlt } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

export const DiscountTable = ({
  setShow,
}: {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}): React.ReactElement => {
  const actions: IAction[] = [
    {
      icon: <BiEditAlt />,
      title: "Edit",
      onClick: () => setShow(true),
    },
    {
      icon: <AiOutlineDelete />,
      title: "Delete",
    },
  ];
  return (
    <>
      <TableWrapper TableHeadData={DISCOUNT_TABLE_HEAD}>
        {DISCOUNT_TABLE_ROW.map((data, index) => {
          return (
            <tr key={data.title} className="border-2 border-boxOutline">
              <td className="pl-2 border-r-2 border-boxOutline h-[60px]">
                <Typography className="text-SecondaryColor">
                  {index + 1}
                </Typography>
              </td>
              <td>
                <Typography className="text-SecondaryColor pl-2">
                  {data.title}
                </Typography>
              </td>
              <td>
                <Typography className="text-SecondaryColor">
                  {data.type}
                </Typography>
              </td>
              <td>
                <Typography className="text-SecondaryColor">
                  {data.value}
                </Typography>
              </td>
              <td>
                <Typography className="text-SecondaryColor">
                  {data.period}
                </Typography>
              </td>
              <td>
                <div
                  className={`px-5 h-[36px] rounded-xl inline-flex justify-center items-center ${
                    index === 1 ? "bg-PrimaryColor" : "bg-boxOutline"
                  }`}
                >
                  <Typography
                    variant="bodyMedium"
                    className="text-SecondaryColor"
                  >
                    {data.status}
                  </Typography>
                </div>
              </td>
              <td className="h-full border-l-2 border-boxOutline pl-4">
                <ActionsDropdown actions={actions} />
              </td>
            </tr>
          );
        })}
      </TableWrapper>
    </>
  );
};
