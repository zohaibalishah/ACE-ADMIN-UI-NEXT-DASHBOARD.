import { ClubManagementCardData } from "@/app/utils/data";
import React from "react";
import { DashboardCard } from "../../common";
interface DashboardCount {
  totalUsers?: number;
  newUsers?: number;
  totalClubOwners?: number;
  totalBookings?: number;
  totalRevenue?: number;
  totalClubs?: number;
  newClubs?: number;
  totalCourts?: number;
}


export const ClubCardSection = ({ dashboardCount }: { dashboardCount: DashboardCount }): React.ReactElement => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 ">
      {ClubManagementCardData.map((card, index) => (
        <div key={index}>
          <DashboardCard card={card} dashboardCount={dashboardCount} />
        </div>
      ))}
    </div>
  );
};
