import {
  AcitivityTrackingTable,
  AppUsesChart,
  BookingHistoryTAble,
  PaymentDetailsTable,
  ProfileSection,
  TotalTimeSpentChart,
} from "@/app/components/UserManagement/UserDetails";
import React from "react";

const UserDetailsPage = () => {
  return (
    <>
      <ProfileSection />
      <PaymentDetailsTable />
      <BookingHistoryTAble />
      <AcitivityTrackingTable />
      <AppUsesChart />
      <TotalTimeSpentChart />
    </>
  );
};

export default UserDetailsPage;
