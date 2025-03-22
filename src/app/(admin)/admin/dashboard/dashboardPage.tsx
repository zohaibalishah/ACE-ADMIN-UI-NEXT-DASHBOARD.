'use client';
import { DashboardCardSection } from '@/app/components/Dashboard';
import {
  CourtChart,
  TotalBookingChart,
  TotalRevenueChart,
  TotalUsersChart,
} from '@/app/components/Dashboard/Charts';
import React, { useEffect,useState } from 'react';
import api from '@/lib/api-client';

const DashboardPage: React.FC = () => {
  const [dashboardCount, setDashboardCount] = useState({
    newUsers: 0,
    totalBookings: 0,
    totalClubOwners: 0,
    totalClubs: 0,
    totalRevenue: 0,
    totalUsers: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('dashboard/statistics');
        setDashboardCount(response.data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="w-full">
      <DashboardCardSection dashboardCount={dashboardCount} />
     <div className="grid grid-cols-1 md:grid-cols-3 gap-y-5 gap-x-4 xl:gap-x-6 py-6">
        <TotalBookingChart />
        <CourtChart />
      </div>
      <TotalRevenueChart />
      <TotalUsersChart /> 
    </section>
  );
};

export default DashboardPage;
