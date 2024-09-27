import {
  BookingCardSection,
  BookingTable,
  GenerateReport,
} from "@/app/components/BookingManagement";
import React from "react";

const BookingManagementHome = () => {
  return (
    <>
      <div>
        <BookingCardSection />
        <GenerateReport />
        <BookingTable />
      </div>
    </>
  );
};

export default BookingManagementHome;
