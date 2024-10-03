"use client";
import React, { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { MImage, PrimaryButton, Typography } from "@/app/components/common";
import { clubManagementIcons } from "../../../../../public/icons/clubManagementIcons";
import { CreateClubModal } from "../CreateClubModal";

export const TotalClubs = (): React.ReactElement => {
  const [search, setSearch] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <section>
        <div className="pt-6">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <Typography variant="h5Bold" className="text-white">
              Total clubs
            </Typography>
            <div className="flex items-center gap-2 md:gap-x-4 flex-wrap">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className={`${
                    search ? "pl-10" : ""
                  } pt-3 pb-4 px-3 placeholder:text-SecondaryColor placeholder:text-[14px] w-full md:w-[310px] h-[44px] bg-black border-[1px] border-newLinear border-t-2  border-l-2 rounded-xl outline-none text-SecondaryColor`}
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

              <PrimaryButton
                title="Add new"
                className="!w-[120px] !h-[44px] !rounded-xl "
                icon={<HiOutlinePlus />}
                onClick={() => setIsOpen(true)}
              />
            </div>
          </div>
        </div>
        {isOpen && <CreateClubModal isOpen={isOpen} setIsOpen={setIsOpen} />}
      </section>
    </>
  );
};
