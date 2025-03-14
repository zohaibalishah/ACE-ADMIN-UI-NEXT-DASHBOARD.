import { Typography } from "@/app/components/common";
import { PAYMENT_TABLE_HEAD, PAYMENT_TABLE_ROW } from "@/app/utils/data";
import React from "react";
import { PaymentTableRow } from "./PaymentTableRow";

export const PaymentDetailsTable = (): React.ReactElement => {
  return (
    <div>
      <Typography variant="h5Bold" className="text-SecondaryColor">
        Payment Details
      </Typography>
      <div className="py-3 w-full overflow-hidden overflow-x-scroll">
        <table className="table-auto w-full text-left min-w-[600px]">
          <thead>
            <tr>
              {PAYMENT_TABLE_HEAD.map((head, index) => {
                return (
                  <th
                    key={index}
                    className={`bg-boxOutline h-[46px] ${
                      index === 0 ? "rounded-tl-2xl pl-2" : ""
                    } ${index === 1 ? " pl-2" : ""} 
                    ${
                      index === PAYMENT_TABLE_HEAD.length - 1
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
            {PAYMENT_TABLE_ROW.map((data, index) => (
              <PaymentTableRow data={data} key={index} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
