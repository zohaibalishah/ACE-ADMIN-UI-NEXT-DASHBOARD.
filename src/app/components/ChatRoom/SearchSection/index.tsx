"use client";
import React, { useState } from "react";
import { DatePickerSecondary, MImage } from "../../common";
import { clubManagementIcons } from "../../../../../public/icons/clubManagementIcons";

export const SearchSection = (): React.ReactElement => {
  const [search, setSearch] = useState<boolean>(true);

  return (
    <div className="flex items-center gap-x-3 py-3">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className={`${
                search ? "pl-10" : ""
              } pt-3 pb-4 px-3 placeholder:text-SecondaryColor placeholder:text-[14px] w-full h-[44px] bg-newLinear/20 border-[1px] border-newLinear border-t-2  border-l-2 rounded-xl outline-none text-SecondaryColor`}
              onClick={() => setSearch(false)}
            />
            <div
              className={`${
                search ? "block" : "hidden"
              } absolute top-2.5 left-3`}
            >
              <MImage
                src={clubManagementIcons.searchIcon}
                w={24}
                h={24}
                alt="search"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <DatePickerSecondary className="!w-full" />
      </div>
    </div>
  );
};
