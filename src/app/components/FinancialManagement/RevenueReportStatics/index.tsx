import { revenueReportCardData } from "@/app/utils/data";
import React from "react";
import { DashboardCard } from "../../common";

export const RevenueReportStatics = (): React.ReactElement => {
  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {revenueReportCardData.map((data, index) => (
          <DashboardCard card={data} key={index} />
        ))}
      </div>
    </>
  );
};
