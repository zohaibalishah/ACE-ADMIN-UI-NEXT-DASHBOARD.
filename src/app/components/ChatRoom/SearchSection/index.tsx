"use client";
import React, { useState } from "react";
import { DatePickerSecondary, MImage, Typography } from "../../common";
import { clubManagementIcons } from "../../../../../public/icons/clubManagementIcons";
import { RxCalendar } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";

export const SearchSection = (): React.ReactElement => {
  return (
    <div className="flex items-center gap-x-3 pb-6">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className={`pl-10 pt-3 pb-4 px-3 placeholder:text-SecondaryColor placeholder:text-[14px] w-full h-[44px] bg-bgBox shadow-inner shadow-newLinear/30 border border-newLinear rounded-xl outline-none text-SecondaryColor`}
          />
          <div className={`absolute top-2.5 left-3`}>
            <MImage
              src={clubManagementIcons.searchIcon}
              w={20}
              h={20}
              alt="search"
            />
          </div>
        </div>
      </div>

      <DatePickerSecondary>
        <button className="w-[152px] h-[44px] rounded-xl bg-bgBox shadow-inner shadow-newLinear/50 border border-newLinear flex gap-2 items-center justify-between px-2">
          <span className="flex gap-2 items-end">
            <RxCalendar className="text-SecondaryColor text-xl" />
            <Typography variant="bodyMedium" className="text-SecondaryColor">
              {"Date"}
            </Typography>
          </span>
          <IoIosArrowDown className="text-base text-SecondaryColor" />
        </button>
      </DatePickerSecondary>
    </div>
  );
};
