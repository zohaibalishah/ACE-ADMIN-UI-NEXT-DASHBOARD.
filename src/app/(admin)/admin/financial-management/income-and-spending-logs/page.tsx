import { TablePagination } from "@/app/components/common";
import {
  IncomeSpendingTable,
  TitleBar,
} from "@/app/components/FinancialManagement/IncomeAndSpendingLogs";
import React from "react";

const IncomeAndSpendingLogs = () => {
  return (
    <>
      <div>
        <TitleBar />
        <IncomeSpendingTable />
        <TablePagination />
      </div>
    </>
  );
};

export default IncomeAndSpendingLogs;
