import { TablePagination } from "@/app/components/common";
import {
  ClubConfigurationSearchbar,
  ClubConfigurationTable,
} from "@/app/components/Configuration/ClubConfiguration";
import React from "react";

const ClubConfigurationHome = () => {
  return (
    <>
      <div>
        <ClubConfigurationSearchbar />
        <ClubConfigurationTable />
        <TablePagination />
      </div>
    </>
  );
};

export default ClubConfigurationHome;
