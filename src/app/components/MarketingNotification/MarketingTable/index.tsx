import {
  DISCOUNT_TABLE_HEAD,
  DISCOUNT_TABLE_ROW,
  MARKETING_TABLE_HEAD,
  MARKETING_TABLE_ROW,
} from "@/app/utils/data";
import React from "react";
import { Typography } from "../../common";

import { MarketingTableRow } from "./MarketingTableRow";

export const MarketingTable = (): React.ReactElement => {
  return (
    <div className="w-full overflow-hidden overflow-x-scroll py-6">
      <table className="min-w-[800px] md:min-w-[900px] lg:min-w-[600px] w-full table-auto text-left">
        <thead>
          <tr>
            {MARKETING_TABLE_HEAD.map((data, index) => (
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
                  {data}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {MARKETING_TABLE_ROW.map((data, index) => {
            return <MarketingTableRow data={data} key={index} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
