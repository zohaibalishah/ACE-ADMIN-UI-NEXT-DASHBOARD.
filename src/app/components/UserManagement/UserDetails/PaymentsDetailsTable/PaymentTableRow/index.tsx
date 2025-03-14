import { Typography } from "@/app/components/common";
import React from "react";

type IIndex = {
  index: number;
};

interface IData extends IIndex {
  data: {
    paymentMethod: string;
    cardNumber: string;
    expiryDate: string;
    billingAddress: string;
  };
}

export const PaymentTableRow = ({ data, index }: IData): React.ReactElement => {
  return (
    <tr className="h-[60px] border-2 border-boxOutline">
      <td>
        <Typography className="text-SecondaryColor pl-2">
          {data.paymentMethod}
        </Typography>
      </td>
      <td>
        <Typography className="text-SecondaryColor">
          {data.cardNumber}
        </Typography>
      </td>
      <td>
        <Typography className="text-SecondaryColor">
          {data.expiryDate}
        </Typography>
      </td>
      <td>
        <Typography className="text-SecondaryColor">
          {data.billingAddress}
        </Typography>
      </td>
    </tr>
  );
};
