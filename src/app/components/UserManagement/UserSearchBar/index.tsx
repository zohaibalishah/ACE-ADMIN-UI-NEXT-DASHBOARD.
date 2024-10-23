"use client";
import React, { useState } from "react";
import {
  MImage,
  PrimaryButton,
  SearchInput,
  Typography,
} from "@/app/components/common";
import { clubManagementIcons } from "../../../../../public/icons/clubManagementIcons";
import { HiOutlinePlus } from "react-icons/hi";

type ITitle = {
  title: string;
  onAddUser: () => void;
};
export const UserSearchBar = ({
  title,
  onAddUser,
}: ITitle): React.ReactElement => {
  return (
    <>
      <div className="pt-3 md:pt-6">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <Typography variant="h5Bold" className="text-white">
            {title}
          </Typography>
          <div className="flex gap-5 items-center">
            <SearchInput />
            <PrimaryButton
              title="Add user"
              className="!w-[120px] !rounded-xl !h-[44px] "
              icon={<HiOutlinePlus />}
              onClick={onAddUser}
            />
          </div>
        </div>
      </div>
    </>
  );
};
