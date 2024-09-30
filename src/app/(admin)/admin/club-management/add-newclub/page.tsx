import {
  ClubCardSection,
  TotalClubsTable,
} from "@/app/components/ClubManagement";
import React from "react";

const AddNewClubPage = () => {
  return (
    <>
      <section>
        <ClubCardSection />
        <TotalClubsTable />
      </section>
    </>
  );
};

export default AddNewClubPage;
