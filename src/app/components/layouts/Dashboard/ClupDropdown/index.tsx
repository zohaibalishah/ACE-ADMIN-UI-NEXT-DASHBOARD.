"use client";

import React, { useState } from "react";
import { Menu, MenuButton, MenuItems, MenuProps } from "@headlessui/react";
import { Typography } from "@/app/components/common";
import { IoIosArrowDown } from "react-icons/io";

export const ClubDropdown = (): React.ReactElement => {
  const [selected, setSelected] = useState<string>("Elite Sports Club");
  return (
    <Menu>
      <MenuButton
        className={
          "flex items-center gap-x-3 bg-bgShadow p-2 rounded-xl cursor-pointer"
        }
      >
        <div className="w-[30px] h-[33px]  sm:w-[35px] sm:h-[38px] bg-PrimaryColor rounded-full text-SecondaryColor flex justify-center items-center">
          <Typography>E</Typography>
        </div>
        <Typography variant="bodyMedium" className="hidden sm:flex">
          {selected}
        </Typography>
        <Typography>
          <IoIosArrowDown />
        </Typography>
      </MenuButton>

      <MenuItems
        transition
        anchor="bottom"
        className="origin-top-right bg-boxOutline mt-5 py-3 px-3 rounded-xl transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 shadow-2xl shadow-black/15 flex flex-col gap-3"
      >
        <ul className="list-none flex flex-col">
          {["Elite Sports Club", "Alpa Sports Club"].map((club, index) => (
            <li
              key={index}
              className="flex items-center gap-x-3  p-2 rounded-xl cursor-pointer"
              onClick={() => {
                setSelected(club);
              }}
            >
              <div className="w-[30px] h-[33px]  sm:w-[35px] sm:h-[38px] bg-PrimaryColor rounded-full text-SecondaryColor flex justify-center items-center shrink-0">
                <Typography>{club.charAt(0)}</Typography>
              </div>
              <Typography variant="bodyMedium" className="text-SecondaryColor">
                {club}
              </Typography>
            </li>
          ))}
        </ul>
      </MenuItems>
    </Menu>
  );
};
