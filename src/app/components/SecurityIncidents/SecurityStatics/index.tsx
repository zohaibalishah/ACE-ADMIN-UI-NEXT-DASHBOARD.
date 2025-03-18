import { bookingmanagementCardData } from "@/app/utils/data";
import React from "react";
import { DashboardCard } from "../../common";

export const SecurityStatics = (): React.ReactElement => {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-6 ">
      {/* {bookingmanagementCardData.map((data, index) => (
        <DashboardCard key={index} />
      ))} */}
    </div>
  );
};
