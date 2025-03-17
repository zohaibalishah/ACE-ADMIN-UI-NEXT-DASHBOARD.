"use client";
import React from "react";
import { PrimaryButton, SearchInput, Typography } from "../../common";
import { HiOutlinePlus } from "react-icons/hi";
import { OwnersDropdown } from "../OwnersDropdown";

interface IClubFilters {
  onAdd?: () => void;
  title: string;
  showButton?: boolean;
}

export const ClubFilters = ({
  onAdd,
  title,
  showButton = true,
}: IClubFilters): React.ReactElement => {
  return (
    <>
      <section className="pt-4 md:pt-6">
        <div className="flex items-center justify-between flex-wrap gap-y-3">
          <Typography variant="h5Bold" className="text-white">
            {title}
          </Typography>
          <div className="flex items-center gap-4 flex-wrap w-full sm:w-auto">
            <SearchInput />
            {showButton && (
              <PrimaryButton
                title="Add new"
                className="!w-[120px] !rounded-xl !h-[44px] "
                icon={<HiOutlinePlus />}
                onClick={onAdd}
              />
            )}
            {/* <OwnersDropdown /> */}
          </div>
        </div>
      </section>
    </>
  );
};
