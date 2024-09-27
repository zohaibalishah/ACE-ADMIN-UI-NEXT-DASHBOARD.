"use client";
import React, { useState } from "react";
import { MImage, PrimaryButton, Typography } from "../../common";
import { clubManagementIcons } from "../../../../../public/icons/clubManagementIcons";
import { HiOutlinePlus } from "react-icons/hi";
import Link from "next/link";
import { CreateOwnerModal } from "../CreateOwnerModel";

export const ClubOwnerSection = (): React.ReactElement => {
  const [search, setSearch] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <section>
        <div className="py-6">
          <div className="flex items-center justify-between flex-wrap gap-y-3">
            <Typography variant="h5Bold" className="text-white">
              Total Club Owner’s
            </Typography>
            <div className="flex items-center gap-4 flex-wrap">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className={`${
                    search ? "pl-10" : ""
                  } pt-3 pb-4 px-3 placeholder:text-SecondaryColor !placeholder:text-[14px] w-[250px] sm:w-[310px] h-[44px] bg-black border-[1px] border-newLinear border-t-2  border-l-2 rounded-xl outline-none text-SecondaryColor`}
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
            <CreateOwnerModal isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </section>
    </>
  );
};
