"use client";

import React from "react";
import { Typography } from "../../common";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

interface ITableWrapper {
  TableHeadData: string[];
  children: React.ReactNode;
}

export const TableWrapper = ({
  TableHeadData,
  children,
}: ITableWrapper): React.ReactElement => {
  return (
    <>
      <div className="w-full overflow-hidden overflow-x-scroll py-6">
        <table className="min-w-[700px] w-full table-auto text-left">
          <thead>
            <tr>
              {Array.isArray(TableHeadData) &&
                TableHeadData?.length > 0 &&
                TableHeadData.map((th, index) => (
                  <th
                    key={index}
                    className={`h-[50px] bg-boxOutline px-3 text-nowrap ${
                      index === 0 ? " w-[60px] rounded-tl-xl" : ""
                    } 
                  ${index === 1 ? " pl-4" : ""} ${
                      index === TableHeadData.length - 1
                        ? "rounded-tr-xl pl-2"
                        : ""
                    }`}
                  >
                    <Typography className="text-SecondaryColor font-normal">
                      {th}
                    </Typography>
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end py-6">
        <div className="flex gap-5 items-centere">
          <Typography variant="bodyRegular" className="text-SecondaryColor">
            Showing 1-10 out of 102
          </Typography>
          <div className="flex gap-3.5 items-center">
            <button className="w-7 h-7 rounded-lg border border-SecondaryColor inline-flex justify-center items-center text-2xl text-SecondaryColor">
              <MdChevronLeft />
            </button>
            <button className="w-7 h-7 rounded-lg border border-SecondaryColor inline-flex justify-center items-center text-2xl text-SecondaryColor">
              <MdChevronRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
