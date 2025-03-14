"use client";

import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { MImage, Typography } from "@/app/components/common";
import { IoIosArrowDown } from "react-icons/io";
import { icons } from "../../../../../../public/icons";
import Link from "next/link";
import Image from "next/image";
import { routes } from "@/app/utils/const";

const links = [
  {
    name: "Settings",
    link: "#",
    icon: icons.settings,
  },
  { name: "Manage profile", link: "#", icon: icons.mp },
  {
    name: "Activity log",
    link: "#",
    icon: icons.al,
  },
  {
    name: "Support ticket",
    link: routes.supportAndFeedback,
    icon: icons.st,
  },
];

export const ProfileDropdown = (): React.ReactElement => (
  <Menu>
    <MenuButton className={"flex items-center gap-x-1 cursor-pointer"}>
      <MImage src={icons.navProfile} w={50} h={50} alt="profile" />
      <Typography>
        <IoIosArrowDown />
      </Typography>
    </MenuButton>

    <MenuItems
      transition
      anchor="bottom end"
      className="origin-top-right bg-boxOutline p-5 rounded-xl transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 shadow-2xl shadow-black/15 flex flex-col gap-3"
    >
      <div className="mt-5 flex gap-2 items-center">
        <MImage src={icons.navProfile} w={50} h={50} alt="profile" />
        <div className="flex flex-col gap-1">
          <Typography variant="bodyMedium" className="text-SecondaryColor">
            Aqib Javid
          </Typography>
          <span className="text-xs text-SecondaryColor inline-flex justify-center py-0.5 bg-PrimaryColor rounded-full">
            Admin
          </span>
        </div>
      </div>
      <ul className="mt-1 list-none flex flex-col gap-y-4">
        {Array.isArray(links) &&
          links.map((item, index) => (
            <li key={item.name + index}>
              <Link href={item.link}>
                <div className="flex gap-x-3 items-center">
                  <Image
                    src={item.icon}
                    alt="Products bag"
                    width={22}
                    height={22}
                    className="object-contain"
                  />
                  <Typography className="text-SecondaryColor">
                    {item.name}
                  </Typography>
                </div>
              </Link>
            </li>
          ))}
        <li>
          <Link
            href={"/"}
            className="flex gap-x-2.5 items-center cursor-pointer"
          >
            <Image
              src={icons.logout}
              alt="Products bag"
              width={22}
              height={22}
              className="object-contain"
            />
            <Typography className="text-SecondaryColor">Logout</Typography>
          </Link>
        </li>
      </ul>
    </MenuItems>
  </Menu>
);
