import { MImage, PrimaryButton } from "@/app/components/common";
import React from "react";
import { clubManagementIcons } from "../../../../../../public/icons/clubManagementIcons";

import Select from "react-select";
import { colors } from "@/app/styles/colors";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

// Custom styles for react-select component
const customStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: colors.bgBox,
    color: "white",
    border: "none",
    boxShadow: state.isFocused ? "none" : provided.boxShadow,
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: "white",
  }),
  menu: (provided: any) => ({
    ...provided,
    backgroundColor: "black",
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isSelected ? "gray" : "black",
    color: "white",
    "&:hover": {
      backgroundColor: "gray",
    },
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  DropdownMenuItemIndicator: () => ({
    color: "white",
  }),
};

export const SelectSearchComponent = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-y-4 sm:gap-y-0 gap-x-6 mt-4 sm:mt-6">
      <div className="flex items-center border-2 h-[49px] border-boxOutline w-full bg-bgBox rounded-xl px-3">
        <MImage
          src={clubManagementIcons.searchIcon}
          w={22}
          h={22}
          alt="search"
        />
        <Select
          // options={options}
          styles={customStyles}
          className="w-full"
          placeholder="Search club"
        />
      </div>
      <PrimaryButton
        title="Search"
        className="sm:w-[106px] !h-[44px] rounded-full bg-bgBox border-2 border-PrimaryColor"
      />
    </div>
  );
};
