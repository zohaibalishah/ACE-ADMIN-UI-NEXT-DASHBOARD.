import { Typography } from "@/app/components/common";
import { bookingHistoryData } from "@/app/utils/data";
import React from "react";
import { SingleBookingHistory } from "../SingleBookingHistory";

export const BookingHistory = (): React.ReactElement => {
  return (
    <section className="py-8">
      <Typography variant="h5Bold" className="text-SecondaryColor pb-3">
        Booking history
      </Typography>
      <div className="w-full overflow-hidden overflow-x-scroll">
        <div className="w-[1080px]">
          <div className="text-SecondaryColor flex items-center bg-boxOutline border-2 border-boxOutline rounded-tl-2xl rounded-tr-2xl h-[46px] px-2">
            <Typography className="w-[58px]">S no</Typography>
            <Typography className="w-[110px]">Booking ID</Typography>
            <Typography className="w-[130px]">Date</Typography>
            <Typography className="w-[200px]">Club name</Typography>
            <Typography className="w-[140px]">Court type</Typography>
            <Typography className="w-[140px]">Location</Typography>
            <Typography className="w-[140px]">Payment</Typography>
            <Typography className="w-[162px]">Status</Typography>
          </div>
          <div>
            {bookingHistoryData.map((person, index) => (
              <div key={index}>
                <SingleBookingHistory person={person} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
