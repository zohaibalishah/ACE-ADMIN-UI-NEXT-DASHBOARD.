"use client";
import { MImage, Typography } from "@/app/components/common";
import { AsideNavbarData } from "@/app/utils/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { SetStateAction } from "react";
import { DropDownMenu } from "./DropDownMenu";

interface IIsopen {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}

export const AsideNavbar = ({
  isOpen,
  setIsOpen,
}: IIsopen): React.ReactElement => {
  const pathname = usePathname();

  return (
    <div
      className={`z-20 pt-5 pb-20 px-5 w-[300px] h-screen overflow-y-scroll scroll-smooth fixed box-border border-r-2 border-boxOutline bg-gradient-to-t from-black via-bgDark to-bgBox transition-all duration-300 ${
        isOpen
          ? "translate-x-0 visible opacity-100"
          : "-translate-x-full invisible opacity-0 lg:translate-x-0 lg:block lg:opacity-100 lg:visible"
      }`}
    >
      <div className="flex flex-col gap-y-3 md:gap-y-5">
        {AsideNavbarData.map((nav, index) => {
          const active = pathname.includes(nav.link);

          return typeof nav?.dropdown !== "undefined" &&
            nav?.dropdown.length > 0 ? (
            <DropDownMenu item={nav} />
          ) : (
            <div
              key={index}
              className={`${
                active ? "bg-PrimaryColor text-SecondaryColor" : ""
              }  hover:bg-PrimaryColor rounded-2xl px-3 py-2 md:p-3 transition-all duration-300`}
            >
              <Link
                href={nav.link}
                className="flex items-center gap-x-3 gap-y-3"
                onClick={() => setIsOpen(false)}
              >
                <MImage src={nav.icon} w={24} h={24} alt="iconNav" />
                <Typography className="text-SecondaryColor text-nowrap">
                  {nav.title}
                </Typography>
              </Link>
            </div>
          );
        })}
        <Typography variant="bodyMedium" className="text-white px-3 py-10">
          © Copyright All Right Reserved
        </Typography>
      </div>
    </div>
  );
};
