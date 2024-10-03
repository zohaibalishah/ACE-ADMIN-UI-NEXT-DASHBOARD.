import { Typography } from "@/app/components/common";
import {
  BOOKIING_HISTORY_TABLE_HEAD,
  BOOKING_HISTORY_TABLE_ROW,
} from "@/app/utils/data";
import React from "react";
import { BookingHistoryTableRow } from "./BookingHistoryTableRow";

export const BookingHistoryTAble = (): React.ReactElement => {
  return (
    <>
      <div className="py-6">
        <Typography variant="h5Bold" className="text-SecondaryColor">
          Booking history
        </Typography>
        <div className="py-3 w-full overflow-hidden overflow-x-scroll">
          <table className="table-auto w-full text-left min-w-[600px]">
            <thead>
              <tr>
                {BOOKIING_HISTORY_TABLE_HEAD.map((head, index) => {
                  return (
                    <th
                      key={index}
                      className={`bg-boxOutline h-[46px] ${
                        index === 0 ? "rounded-tl-2xl pl-2" : ""
                      } ${index === 1 ? " pl-2" : ""} 
                    ${
                      index === BOOKIING_HISTORY_TABLE_HEAD.length - 1
                        ? "rounded-tr-2xl"
                        : ""
                    }`}
                    >
                      <Typography className="text-SecondaryColor font-normal">
                        {head}
                      </Typography>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {BOOKING_HISTORY_TABLE_ROW.map((data, index) => (
                <BookingHistoryTableRow data={data} key={index} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
