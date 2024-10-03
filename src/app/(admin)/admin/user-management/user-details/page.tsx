import {
  AcitivityTrackingTable,
  AppUsesChart,
  BookingHistoryTAble,
  PaymentDetailsTable,
  ProfileSection,
} from "@/app/components/UserManagement/UserDetails";
import { ChartArea } from "lucide-react";
import React from "react";

const UserDetailsPage = () => {
  return (
    <>
      <section>
        <ProfileSection />
        <PaymentDetailsTable />
        <BookingHistoryTAble />
        <AcitivityTrackingTable />
        <AppUsesChart />
      </section>
    </>
  );
};

export default UserDetailsPage;
