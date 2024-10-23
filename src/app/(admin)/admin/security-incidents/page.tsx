import {
  SecurityIncidentBar,
  SecurityIncidentsTable,
  SecurityStatics,
} from "@/app/components/SecurityIncidents";
import React from "react";

const SecurityIncidentsHome = () => {
  return (
    <>
      <SecurityIncidentBar label="Security Incidents" />
      <SecurityIncidentsTable />
    </>
  );
};

export default SecurityIncidentsHome;
