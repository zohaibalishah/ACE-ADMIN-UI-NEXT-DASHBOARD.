import {
  BookingTable,
  GenerateReport,
} from "@/app/components/BookingManagement";
import React from "react";

const BookingManagementHome = () => {
  return (
    <>
      <GenerateReport title="Booking management" />
      <BookingTable />
    </>
  );
};

export default BookingManagementHome;
