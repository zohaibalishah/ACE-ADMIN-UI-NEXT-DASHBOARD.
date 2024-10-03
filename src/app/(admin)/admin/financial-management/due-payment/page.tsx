import { TablePagination } from "@/app/components/common";
import { DuePaymentHeader } from "@/app/components/FinancialManagement/DuePayement/DuePaymentHeader";
import { DuePaymentTable } from "@/app/components/FinancialManagement/DuePayement/DuePaymentTable";
import React from "react";

const DuePaymentHome = () => {
  return (
    <>
      <div>
        <DuePaymentHeader />
        <DuePaymentTable />
        <TablePagination />
      </div>
    </>
  );
};

export default DuePaymentHome;
