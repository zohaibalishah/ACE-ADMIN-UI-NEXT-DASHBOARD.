import {
  AcitivityTrackingTable,
  AppUsesChart,
  BookingHistoryTAble,
  MatchesJoined,
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
      <MatchesJoined />
      <AcitivityTrackingTable />
      <AppUsesChart />
      <TotalTimeSpentChart />
    </>
  );
};

export default UserDetailsPage;
