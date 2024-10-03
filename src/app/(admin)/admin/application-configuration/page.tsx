"use client";
import {
  ApplicationConfigurationTitle,
  ConfigurationTable,
  SelectSearchComponent,
} from "@/app/components/Configuration/ApplicationConfiguration";
import React from "react";

const ApplicationConfigurationHome = () => {
  return (
    <>
      <div>
        <ApplicationConfigurationTitle />
        <SelectSearchComponent />
        <ConfigurationTable />
      </div>
    </>
  );
};

export default ApplicationConfigurationHome;
