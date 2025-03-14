import { Typography } from "@/app/components/common";
import React from "react";

type IIndex = {
  index: number;
};

interface IData extends IIndex {
  data: {
    bookingId: string;
    date: string;
    clubName: string;
    courtType: string;
    location: string;
    payment: string;
    status: {
      completed?: string;
      partiallyPaid?: string;
    };
  };
}

export const BookingHistoryTableRow = ({
  data,
  index,
}: IData): React.ReactElement => {
  return (
    <tr className="h-[60px] border-2 border-boxOutline">
      <td className="pl-2 border-r-2 border-boxOutline">
        <Typography className="text-SecondaryColor">{index + 1}</Typography>
      </td>
      <td>
        <Typography className="text-SecondaryColor pl-2">
          {data.bookingId}
        </Typography>
      </td>
      <td>
        <Typography className="text-SecondaryColor">{data.date}</Typography>
      </td>
      <td>
        <Typography className="text-SecondaryColor">{data.clubName}</Typography>
      </td>
      <td>
        <Typography className="text-SecondaryColor">
          {data.courtType}
        </Typography>
      </td>
      <td>
        <Typography className="text-SecondaryColor">{data.location}</Typography>
      </td>
      <td>
        <Typography className="text-SecondaryColor">{data.payment}</Typography>
      </td>
      <td>
        <Typography className="text-SecondaryColor">
          {data.status.completed}
        </Typography>
      </td>
    </tr>
  );
};
