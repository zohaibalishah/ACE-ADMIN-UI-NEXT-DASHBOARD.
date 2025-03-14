import { TablePagination } from "@/app/components/common";
import {
  MarketingTable,
  NotificationTitleBar,
} from "@/app/components/MarketingNotification";
import React from "react";

const MarketingNotificationHome = () => {
  return (
    <>
      <NotificationTitleBar />
      <MarketingTable />
      <TablePagination />
    </>
  );
};

export default MarketingNotificationHome;
