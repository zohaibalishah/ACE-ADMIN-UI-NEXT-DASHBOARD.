import {
  BookingCardSection,
  GenerateReport,
  MatchesTable,
} from "@/app/components/BookingManagement";
import { TablePagination } from "@/app/components/common";
import React from "react";

const MatchesPage = () => {
  return (
    <>
      <div>
        <BookingCardSection />
        <GenerateReport />
        <MatchesTable />
        <TablePagination />
      </div>
    </>
  );
};

export default MatchesPage;
