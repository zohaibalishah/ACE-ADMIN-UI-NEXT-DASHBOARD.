"use client";
import { DashboardCardSection } from "@/app/components/Dashboard";
import {
  CourtChart,
  TotalBookingChart,
  TotalRevenueChart,
  TotalUsersChart,
} from "@/app/components/Dashboard/Charts";

import React from "react";

const HomePage = () => {
  return (
    <>
      <section className="w-full">
        <DashboardCardSection />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-5 gap-x-6 py-6">
          <TotalBookingChart />
          <CourtChart />
        </div>
        <TotalRevenueChart />
        <TotalUsersChart />
      </section>
    </>
  );
};

export default HomePage;
