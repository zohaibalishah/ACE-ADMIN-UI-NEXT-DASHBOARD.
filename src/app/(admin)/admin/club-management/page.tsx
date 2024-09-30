import {
  ClubCardSection,
  ClubOwnerSection,
  TotalClubsTable,
} from "@/app/components/ClubManagement";
import React from "react";

function ClubManagement() {
  return (
    <>
      <div>
        <ClubCardSection />
        <ClubOwnerSection />
        <TotalClubsTable />
      </div>
    </>
  );
}

export default ClubManagement;
