import { DISCOUNT_TABLE_HEAD, DISCOUNT_TABLE_ROW } from "@/app/utils/data";
import React from "react";
import { Typography } from "../../common";
import { DiscountTableRow } from "./TableRow";

export const DiscountTable = (): React.ReactElement => {
  return (
    <div className="w-full overflow-hidden overflow-x-scroll py-6">
      <table className="min-w-[800px] w-full table-auto text-left">
        <thead>
          <tr className="bg-boxOutline border-2 rounded-full border-boxOutline ">
            {DISCOUNT_TABLE_HEAD.map((data, index) => (
              <th
                key={index}
                className={`${
                  index === 0 ? "pl-2  rounded-tl-lg border-2" : ""
                } ${index === 1 ? "pl-2" : ""}
                ${
                  index === DISCOUNT_TABLE_HEAD.length - 1
                    ? "pl-3 rounded-tr-lg border-2"
                    : ""
                } py-3`}
              >
                <Typography
                  variant="bodyRegular"
                  className="text-SecondaryColor font-normal"
                >
                  {data}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {DISCOUNT_TABLE_ROW.map((data, index) => {
            return <DiscountTableRow data={data} index={index} key={index} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
