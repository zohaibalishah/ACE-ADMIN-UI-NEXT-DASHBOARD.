import { revenueReportCardData } from "@/app/utils/data";
import React from "react";
import { DashboardCard } from "../../common";


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
export const RevenueReportStatics = (): React.ReactElement => {
  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {revenueReportCardData.map((data, index) => (
          <DashboardCard  key={index}  />
        ))}
      </div>
    </>
  );
};
