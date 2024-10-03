import {
  BookingCardSection,
  BookingTable,
  GenerateReport,
} from "@/app/components/BookingManagement";
import { TablePagination } from "@/app/components/common";
import React from "react";

const BookingManagementHome = () => {
  return (
    <>
      <div>
        <BookingCardSection />
        <GenerateReport />
        <BookingTable />
        <TablePagination />
      </div>
    </>
  );
};

export default BookingManagementHome;
