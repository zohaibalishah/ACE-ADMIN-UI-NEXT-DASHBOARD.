"use client";
import React, { useState } from "react";
import { MImage, Typography } from "@/app/components/common";
import { clubManagementIcons } from "../../../../../public/icons/clubManagementIcons";

type ITitle = {
  title: string;
};
export const UserSearchBar = ({ title }: ITitle): React.ReactElement => {
  const [search, setSearch] = useState<boolean>(true);

  return (
    <>
      <section>
        <div className="pt-3 md:pt-6">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <Typography variant="h5Bold" className="text-white">
              {title}
            </Typography>
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className={`${
                    search ? "pl-10" : ""
                  } pt-3 pb-4 px-3 placeholder:text-SecondaryColor placeholder:text-[14px] w-[280px] sm:w-[310px] h-[44px] bg-black border-[1px] border-newLinear border-t-2  border-l-2 rounded-xl outline-none text-SecondaryColor`}
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
        </div>
      </section>
    </>
  );
};
