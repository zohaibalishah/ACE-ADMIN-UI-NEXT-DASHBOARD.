import { TablePagination } from "@/app/components/common";
import { FeedBackTAble } from "@/app/components/FeedBack";
import {
  SecurityIncidentBar,
  SecurityStatics,
} from "@/app/components/SecurityIncidents";
import React from "react";

const FeedBackPage = () => {
  return (
    <>
      <div>
        <SecurityStatics />
        <SecurityIncidentBar label="Support and Feedback" />
        <FeedBackTAble />
        <TablePagination />
      </div>
    </>
  );
};

export default FeedBackPage;
