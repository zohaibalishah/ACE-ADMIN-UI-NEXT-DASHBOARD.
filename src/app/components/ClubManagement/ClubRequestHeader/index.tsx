"use client";
import React from "react";
import { PrimaryButton, SearchInput, Typography } from "../../common";
import { HiOutlinePlus } from "react-icons/hi";

export const ClubRequestHeader = ({
  title,
}: {
  title?: string;
}): React.ReactElement => {
  return (
    <>
      <section className="pt-4 md:pt-6">
        <div className="flex items-center justify-between flex-wrap gap-y-3">
          <Typography variant="h5Bold" className="text-white">
            {title ?? "Club Request"}
          </Typography>
          <div className="flex items-center gap-4 flex-wrap w-full sm:w-auto">
            <SearchInput />
            <select className="shrink-0 px-4 w-[130px] inline-block h-[44px] text-white rounded-xl bg-boxOutline focus:outline-none">
              <option>All Owners</option>
            </select>
          </div>
        </div>
      </section>
    </>
  );
};
