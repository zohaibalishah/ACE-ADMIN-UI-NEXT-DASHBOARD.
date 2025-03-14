import { TablePagination } from "@/app/components/common";
import {
  TreasuryHeader,
  TreasuryTable,
} from "@/app/components/FinancialManagement/TreasuryManagement";
import React from "react";

const TreasuryManagement = () => {
  return (
    <>
      <div>
        <TreasuryHeader />
        <TreasuryTable />
        <TablePagination />
      </div>
    </>
  );
};

export default TreasuryManagement;
