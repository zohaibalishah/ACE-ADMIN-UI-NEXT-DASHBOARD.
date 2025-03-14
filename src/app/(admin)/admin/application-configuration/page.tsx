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
      <ApplicationConfigurationTitle />
      <SelectSearchComponent />
      <ConfigurationTable />
    </>
  );
};

export default ApplicationConfigurationHome;
