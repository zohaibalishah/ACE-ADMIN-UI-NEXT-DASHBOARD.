'use client'

import { DashboardCard } from '../../common';
import React, { useEffect, useState } from 'react';
import api from '@/lib/api-client';

export const UserManagmentCardSection = (): React.ReactElement => {

  const [dashboardCount, setDashboardCount] = useState({
    newUsers: 0,
    totalUsers: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('dashboard/user-management');
        setDashboardCount(response.data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };
    fetchData()
  }, []);


  return (
    <>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-3 gap-4">
          <DashboardCard
            cardup={false}
            catdselect={false}
            carddown={false}
            label={'Total Users'}
            keyValue={dashboardCount.totalUsers ||0}
          />
          <DashboardCard
            carddown={false}

            cardup={false}
            catdselect={false}
            label={'New Users'}
            keyValue={dashboardCount.newUsers ||0}
          />
        </div>
      </div>
    </>
  );
};
