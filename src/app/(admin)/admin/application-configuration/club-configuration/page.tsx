import { TablePagination } from "@/app/components/common";
import {
  ClubConfigurationSearchbar,
  ClubConfigurationTable,
} from "@/app/components/Configuration/ClubConfiguration";
import React from "react";

const ClubConfigurationHome = () => {
  return (
    <>
      <ClubConfigurationSearchbar />
      <ClubConfigurationTable />
    </>
  );
};

export default ClubConfigurationHome;
