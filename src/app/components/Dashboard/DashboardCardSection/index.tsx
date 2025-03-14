"use client";

import { dashboardCardData } from "@/app/utils/data";
import React from "react";
import { DashboardCard } from "../../common";

interface DashboardCount {
  totalUsers: number;
  newUsers: number;
  totalClubOwners: number;
  totalBookings: number;
  totalRevenue: number;
  totalClubs: number;
}

export const DashboardCardSection = ({ dashboardCount }: { dashboardCount: DashboardCount }) => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-6">
        {dashboardCardData.map((card, index) => (
          <div key={index}>
            <DashboardCard card={card} dashboardCount={dashboardCount} />
          </div>
        ))}
      </div>
    </div>
  );
};
