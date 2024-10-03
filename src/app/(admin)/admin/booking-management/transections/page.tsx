import {
  BookingCardSection,
  GenerateReport,
  TransectionsTable,
} from "@/app/components/BookingManagement";
import { TablePagination } from "@/app/components/common";
import React from "react";

const TransectionPage = () => {
  return (
    <>
      <div>
        <BookingCardSection />
        <GenerateReport />
        <TransectionsTable />
        <TablePagination />
      </div>
    </>
  );
};

export default TransectionPage;
