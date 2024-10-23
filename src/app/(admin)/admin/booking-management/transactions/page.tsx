import {
  GenerateReport,
  TransectionsTable,
} from "@/app/components/BookingManagement";
import React from "react";

const TransectionPage = () => {
  return (
    <>
      <GenerateReport title="Transactions Management" />
      <TransectionsTable />
    </>
  );
};

export default TransectionPage;
