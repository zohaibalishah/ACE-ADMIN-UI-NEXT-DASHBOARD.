import React from "react";
import { Typography } from "../../../common/Typography/index";

type IKey = {
  index: number;
};

interface IPerson extends IKey {
  person: {
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

export const SingleBookingHistory = ({
  person,
  index,
}: IPerson): React.ReactElement => {
  return (
    <div className="text-SecondaryColor flex items-center h-[60px] border-[1px] border-boxOutline">
      <Typography className="w-[50px] pl-2 h-full flex items-center border-r-2 border-boxOutline">
        {index + 1}
      </Typography>
      <Typography className="w-[110px] pl-5 h-full flex items-center">
        {person.bookingId}
      </Typography>
      <Typography className="w-[130px] pl-2 h-full flex items-center">
        {person.date}
      </Typography>
      <Typography className="w-[200px] pl-2 h-full flex items-center">
        {person.clubName}
      </Typography>
      <Typography className="w-[140px] pl-2 h-full flex items-center">
        {person.courtType}
      </Typography>
      <Typography className="w-[140px] pl-1 h-full flex items-center">
        {person.location}
      </Typography>
      <Typography className="w-[140px] pl-1 h-full flex items-center">
        {person.payment}
      </Typography>
      <Typography
        variant="bodyMedium"
        className="w-[162px] h-full flex items-center"
      >
        {person.status.completed ? (
          <span className="w-[115px] h-[36px] rounded-xl bg-PrimaryColor text-white flex justify-center items-center">
            {person.status.completed}
          </span>
        ) : (
          <span className="w-[115px] h-[36px] rounded-xl bg-boxOutline text-white flex justify-center items-center">
            {person.status.partiallyPaid}
          </span>
        )}
      </Typography>
    </div>
  );
};
