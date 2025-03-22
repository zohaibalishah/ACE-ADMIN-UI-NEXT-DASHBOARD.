import React from 'react';
import { DashboardCard } from '../../common';

export const revenueReportCardData = [
  {
    user: 'Total Revenue',
    figure: 'SAR 40,980',
    up: true,
    down: false,
  },
  {
    user: 'This Month Revenue',
    figure: 'SAR 2,520',
    up: false,
    down: true,
    link: '#',
  },
  { user: 'Total Clubs', figure: '1,346', up: true, down: false },
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
          <DashboardCard
            key={index}
            cardup={data.up}
            catdselect={false}
            label={data.user}
            keyValue={0}
            carddown={false}
          />
        ))}
      </div>
    </>
  );
};
