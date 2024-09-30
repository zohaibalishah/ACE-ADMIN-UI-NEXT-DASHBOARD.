"use client";

import { dashboardCardData } from "@/app/utils/data";
import React from "react";
import { DashboardCard } from "../../common";

export const DashboardCardSection = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-6">
        {dashboardCardData.map((card, index) => (
          <div key={index}>
            <DashboardCard card={card} />
          </div>
        ))}
      </div>
    </div>
  );
};
