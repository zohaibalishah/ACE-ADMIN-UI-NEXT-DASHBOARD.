import {
  RevenueReportStatics,
  RevenueRepotsChart,
} from "@/app/components/FinancialManagement";
import React from "react";

const FinancialRevenueReport = () => {
  return (
    <>
      <RevenueReportStatics />
      <RevenueRepotsChart />
    </>
  );
};

export default FinancialRevenueReport;
