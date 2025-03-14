import { SecurityIncidentBar } from "@/app/components/SecurityIncidents";
import { AudtiLogsTable } from "@/app/components/SecurityIncidents/Audit-Logs";
import React from "react";

const AuditLogsHome = () => {
  return (
    <>
      <SecurityIncidentBar label="Audit Logs" />
      <AudtiLogsTable />
    </>
  );
};

export default AuditLogsHome;
