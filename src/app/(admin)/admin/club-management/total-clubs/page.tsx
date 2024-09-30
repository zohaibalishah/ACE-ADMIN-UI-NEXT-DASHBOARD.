import {
  ClubCardSection,
  TotalClubsTable,
  TotalClubs,
} from "@/app/components/ClubManagement";
import React from "react";

const TotalClubsHome = () => {
  return (
    <>
      <div>
        <ClubCardSection />
        <TotalClubs />
        <TotalClubsTable />
      </div>
    </>
  );
};

export default TotalClubsHome;
