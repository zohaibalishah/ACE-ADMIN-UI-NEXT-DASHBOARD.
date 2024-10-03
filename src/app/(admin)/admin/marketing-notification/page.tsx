import { TablePagination } from "@/app/components/common";
import {
  MarketingTable,
  NotificationTitleBar,
} from "@/app/components/MarketingNotification";
import React from "react";

const MarketingNotificationHome = () => {
  return (
    <>
      <div>
        <NotificationTitleBar />
        <MarketingTable />
        <TablePagination />
      </div>
    </>
  );
};

export default MarketingNotificationHome;
