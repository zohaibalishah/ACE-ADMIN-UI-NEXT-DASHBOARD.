"use client";
import { MImage, PrimaryButton, Typography } from "@/app/components/common";
import React from "react";
import { clubManagementIcons } from "../../../../../../public/icons/clubManagementIcons";

import Select from "react-select";
import { colors } from "@/app/styles/colors";
import { DropdownMenuItemIndicator } from "@radix-ui/react-dropdown-menu";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

// Custom styles for react-select component
const customStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: colors.bgBox, // Set background color to black
    color: "white",
    border: "none",
    boxShadow: state.isFocused ? "none" : provided.boxShadow, // Remove focus outline
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: "white", // Set text color to white for readability
  }),
  menu: (provided: any) => ({
    ...provided,
    backgroundColor: "black", // Set dropdown menu background to black
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isSelected ? "gray" : "black", // Set selected option background color
    color: "white", // Set option text color to white
    "&:hover": {
      backgroundColor: "gray", // Set hover color for options
    },
  }),
  indicatorSeparator: () => ({
    display: "none", // Hide the separator between dropdown indicator and clear button
  }),
  DropdownMenuItemIndicator: () => ({
    color: "white",
  }),
};

export const ClubConfigurationSearchbar = () => {
  return (
    <div>
      <Typography variant="h5Bold" className="text-SecondaryColor my-3">
        Club configuration
      </Typography>
      <div className="flex flex-col sm:flex-row items-center gap-y-4 sm:gap-y-0 gap-x-6 my-4 sm:my-6">
        <div className="flex items-center border-2 border-boxOutline w-full bg-bgBox rounded-xl px-3">
          <MImage
            src={clubManagementIcons.searchIcon}
            w={22}
            h={22}
            alt="search"
          />
          <Select options={options} styles={customStyles} className="w-full" />
        </div>
        <Select
          options={options}
          styles={customStyles}
          className="w-[284px] border-2 border-boxOutline rounded-xl p-1"
        />
        <div>
          <PrimaryButton
            title="Search"
            className="sm:w-[106px] !h-[44px] rounded-full bg-bgBox border-2 border-PrimaryColor"
          />
        </div>
      </div>
    </div>
  );
};
