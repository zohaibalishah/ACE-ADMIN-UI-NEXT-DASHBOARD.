import { DashboardCard } from "@/app/components/common";
import React from "react";

const dummyBookingManagementCardData = [
  {
    user: "User 1",
    keyValue: "totalBookings",
    up: true,
    down: false,
    link: "/link1",
  },
  {
    user: "User 2",
    keyValue: "totalRevenue",
    up: false,
    down: true,
    link: "/link2",
  },
  {
    user: "User 3",
    keyValue: "totalUsers",
    up: true,
    down: false,
    link: "/link3",
  },
];

const dummyDashboardCount = {
  totalBookings: 100,
  totalRevenue: 5000,
  totalUsers: 300,
};

export const BookingCardSection = (): React.ReactElement => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4">
        {dummyBookingManagementCardData.map((card, index) => (
          <div key={index}>
            <DashboardCard  />
          </div>
        ))}
      </div>
    </div>
  );
};
