import React from 'react';
import { MImage, Monthly, Typography } from '../../common';
import { dashboardIcons } from '../../../../../public/icons/dashboardIcons';
import { GoArrowDown, GoArrowUp } from 'react-icons/go';
import { Url } from 'next/dist/shared/lib/router/router';

interface ICard {
  card: {
    user: string;
    keyValue: string;
    up?: boolean;
    down?: boolean;
    select?: boolean;
    link?: Url | undefined;
  };
  dashboardCount: {
    totalUsers?: number;
    newUsers?: number;
    totalClubOwners?: number;
    totalBookings?: number;
    totalRevenue?: number;
    totalClubs?: number;
    newClubs?: number;
    totalCourts?: number;
  };
}

export const DashboardCard = ({
}): React.ReactElement => {
  return (
    <div className="bg-bgBox p-4 rounded-xl border-[1px] border-newLinear/30">
      <div className="text-SecondaryColor flex items-start justify-between">
        <div>
          <Typography variant="bodyRegular">text</Typography>
          <Typography variant="h2" className="text-PrimaryColor py-4">
          dashboardCount
            {/* {dashboardCount
              ? dashboardCount[card.keyValue as keyof typeof dashboardCount]
              : 0} */}
          </Typography>
        </div>
        <div className="w-[48px] h-[48px] bg-boxOutline flex items-center justify-center rounded-xl cursor-pointer">
          <MImage src={dashboardIcons.userIcon} w={24} h={24} alt="user" />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          {/* {card.up ? (
            <Typography
              variant="bodyMedium"
              className="flex items-center text-SecondaryColor"
            >
              <span className="text-bgSucces pr-2">
                <GoArrowUp />
              </span>
              <span className="text-bgSucces pr-1">+6%</span>Since last week
            </Typography>
          ) : (
            <Typography
              variant="bodyMedium"
              className="flex items-center text-SecondaryColor"
            >
              <span className="text-bgdanger pr-2">
                <GoArrowDown />
              </span>
              <span className="text-bgdanger pr-1">-10% </span>Since last week
            </Typography>
          )} */}
        </div>
        {/* {card.select && <Monthly />} */}
      </div>
    </div>
  );
};
