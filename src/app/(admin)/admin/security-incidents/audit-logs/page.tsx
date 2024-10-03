import { TablePagination } from "@/app/components/common";
import {
  SecurityIncidentBar,
  SecurityStatics,
} from "@/app/components/SecurityIncidents";
import { AudtiLogsTable } from "@/app/components/SecurityIncidents/Audit-Logs";
import React from "react";

const AuditLogsHome = () => {
  return (
    <>
      <div>
        <SecurityStatics />
        <SecurityIncidentBar label="Audit Logs" />
        <AudtiLogsTable />
        <TablePagination />
      </div>
    </>
  );
};

export default AuditLogsHome;
