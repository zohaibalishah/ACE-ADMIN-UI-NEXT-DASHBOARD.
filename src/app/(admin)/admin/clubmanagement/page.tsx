import {
  ClubCardSection,
  ClubOwnerSection,
  ClubOwnersTable,
} from "@/app/components/ClubManagement";
import React from "react";

function ClubManagement() {
  return (
    <>
      <div>
        <ClubCardSection />
        <ClubOwnerSection />
        <ClubOwnersTable />
      </div>
    </>
  );
}

export default ClubManagement;
