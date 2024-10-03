import {
  RevenueReportStatics,
  RevenueRepotsChart,
} from "@/app/components/FinancialManagement";
import React from "react";

const FinancialRevenueReport = () => {
  return (
    <>
      <div>
        <RevenueReportStatics />
        <RevenueRepotsChart />
      </div>
    </>
  );
};

export default FinancialRevenueReport;
