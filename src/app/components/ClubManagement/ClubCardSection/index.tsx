import React from 'react';
import { DashboardCard } from '../../common';

interface DashboardCount {
  totalClubs: number;
  newClubs: number;
  totalCourts: number;
}

export const ClubCardSection: React.FC<{ dashboardCount: DashboardCount }> = ({
  dashboardCount,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
      <DashboardCard
        carddown={false}
        label={'Total Clubs'}
        cardup={false}
        catdselect={false}
        keyValue={dashboardCount.totalClubs || 0}
      />

      <DashboardCard
        carddown={false}
        label={'New Clubs'}
        cardup={false}
        catdselect={false}
        keyValue={dashboardCount.newClubs || 0}
      />

      <DashboardCard
        carddown={false}
        label={'Total Courts'}
        cardup={false}
        catdselect={false}
        keyValue={dashboardCount.totalCourts || 0}
      />
    </div>
  );
};
