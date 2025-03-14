import React from "react";
import { MImage } from "../MImage";
import { clubManagementIcons } from "../../../../../public/icons/clubManagementIcons";

export const SearchInput = () => {
  return (
    <div className="relative w-full sm:w-auto">
      <input
        type="text"
        placeholder="Search"
        className={`pl-10 h-11 px-3 placeholder:text-SecondaryColor !placeholder:text-sm w-full sm:w-[310px]  bg-bgBox shadow-inner shadow-newLinear/30 border border-newLinear rounded-xl outline-none text-SecondaryColor text-sm`}
      />
      <div className={` absolute top-1/2 -translate-y-1/2 left-3`}>
        <MImage
          src={clubManagementIcons.searchIcon}
          w={20}
          h={20}
          alt="search"
        />
      </div>
    </div>
  );
};
