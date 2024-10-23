import {
  GenerateReport,
  MatchesTable,
} from "@/app/components/BookingManagement";
import React from "react";

const MatchesPage = () => {
  return (
    <>
      <GenerateReport title="Matches management" />
      <MatchesTable />
    </>
  );
};

export default MatchesPage;
