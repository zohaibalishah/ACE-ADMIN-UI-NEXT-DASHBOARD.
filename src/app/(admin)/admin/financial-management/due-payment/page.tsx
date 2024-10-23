import {
  DuePaymentHeader,
  DuePaymentTable,
} from "@/app/components/FinancialManagement/DuePayement";
import React from "react";

const DuePaymentHome = () => {
  return (
    <>
      <DuePaymentHeader />
      <DuePaymentTable />
    </>
  );
};

export default DuePaymentHome;
