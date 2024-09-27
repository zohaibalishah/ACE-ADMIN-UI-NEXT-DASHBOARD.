import { DashboardCard } from "@/app/components/common";
import { bookingmanagementCardData } from "@/app/utils/data";
import React from "react";

export const BookingCardSection = (): React.ReactElement => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4">
        {bookingmanagementCardData.map((card, index) => (
          <div key={index}>
            <DashboardCard card={card} />
          </div>
        ))}
      </div>
    </div>
  );
};
