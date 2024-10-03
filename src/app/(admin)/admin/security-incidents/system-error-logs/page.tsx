import { TablePagination } from "@/app/components/common";
import {
  SecurityIncidentBar,
  SecurityIncidentsTable,
  SecurityStatics,
} from "@/app/components/SecurityIncidents";
import React from "react";

const SystemErrorLogsHome = () => {
  return (
    <>
      <div>
        <SecurityStatics />
        <SecurityIncidentBar label="System Error Logs" />
        <SecurityIncidentsTable />
        <TablePagination />
      </div>
    </>
  );
};

export default SystemErrorLogsHome;
