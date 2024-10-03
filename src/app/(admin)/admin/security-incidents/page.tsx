import { TablePagination } from "@/app/components/common";
import {
  SecurityIncidentBar,
  SecurityIncidentsTable,
  SecurityStatics,
} from "@/app/components/SecurityIncidents";
import React from "react";

const SecurityIncidentsHome = () => {
  return (
    <>
      <div>
        <SecurityStatics />
        <SecurityIncidentBar label="Security Incidents" />
        <SecurityIncidentsTable />
        <TablePagination />
      </div>
    </>
  );
};

export default SecurityIncidentsHome;
