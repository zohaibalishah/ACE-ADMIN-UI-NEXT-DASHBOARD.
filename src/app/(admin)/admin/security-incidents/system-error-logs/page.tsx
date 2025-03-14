import {
  SecurityIncidentBar,
  SecurityIncidentsTable,
} from "@/app/components/SecurityIncidents";
import React from "react";

const SystemErrorLogsHome = () => {
  return (
    <>
      <SecurityIncidentBar label="System Error Logs" />
      <SecurityIncidentsTable />
    </>
  );
};

export default SystemErrorLogsHome;
