import {
  TotalBookingChart,
  TotalRevenueChart,
} from "@/app/components/Dashboard/Charts";
import {
  ActivityTracking,
  BookingHistory,
  PaymentDetails,
  ProfileSection,
} from "@/app/components/UserManagement/UserDetails";
import { AppUsesChart } from "@/app/components/UserManagement/UserDetails/AppUsesChart";
import React from "react";

const UserDetailsPage = () => {
  return (
    <>
      <section className="w-full h-full p-3 md:p-6 md:pl-10 bg-gradient-to-t from-black via-bgDark to-bgBox">
        <ProfileSection />
        <PaymentDetails />
        <BookingHistory />
        <ActivityTracking />
      </section>
    </>
  );
};

export default UserDetailsPage;
