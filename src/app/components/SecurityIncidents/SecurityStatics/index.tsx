import React from 'react';
import { DashboardCard } from '../../common';

export const bookingmanagementCardData = [
  {
    user: 'Total Booking',
    figure: '101,980',
    up: true,
    down: false,
    link: '#',
  },
  {
    user: 'New Bookings',
    figure: '1,287',
    up: false,
    down: true,
    select: true,
    link: '#',
  },
  {
    user: 'Cancelled Bookings',
    figure: '1,287',
    up: false,
    down: true,
    select: true,
    link: '#',
  },
];
export const SecurityStatics = (): React.ReactElement => {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-6 ">
      {bookingmanagementCardData.map((data, index) => (
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
  );
};
