"use client";

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import clsx from "clsx";
import { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { MImage, SearchInput, Typography } from "../../common";
import { clubManagementIcons } from "../../../../../public/icons/clubManagementIcons";

const owners = [
  { id: 1, name: "Tom Cook" },
  { id: 2, name: "Wade Cooper" },
  { id: 3, name: "Tanya Fox" },
  { id: 4, name: "Arlene Mccoy" },
  { id: 5, name: "Devon Webb" },
];

export const OwnersDropdown = () => {
  const [selected, setSelected] = useState(owners[1]);

  return (
    <div className="">
      <Listbox value={selected} onChange={setSelected}>
        <ListboxButton
          className={clsx(
            "relative px-5 h-11 min-w-40 rounded-xl bg-boxOutline flex gap-5 items-center justify-between",
            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
          )}
        >
          <Typography variant="bodyMedium" className="text-SecondaryColor">
            {selected.name}
          </Typography>
          <IoChevronDownOutline
            className="text-SecondaryColor size-4"
            aria-hidden="true"
          />
        </ListboxButton>
        <ListboxOptions
          anchor="bottom end"
          transition
          className={clsx(
            "rounded-xl border border-SecondaryColor focus:outline-none z-20 w-[calc(100%-40px)] sm:w-[342px] p-4 bg-[#2F3145] mt-4",
            "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
          )}
        >
          <div className="relative w-full sm:w-auto flex justify-center mb-3">
            <input
              type="text"
              placeholder="Search"
              className={`pl-10 h-11 px-3 placeholder:text-SecondaryColor !placeholder:text-sm w-full sm:w-[310px]  bg-transparent shadow-inner shadow-newLinear/30 border border-newLinear rounded-xl outline-none text-SecondaryColor text-sm`}
            />
            <div className={`absolute top-1/2 -translate-y-1/2 left-3`}>
              <MImage
                src={clubManagementIcons.searchIcon}
                w={20}
                h={20}
                alt="search"
              />
            </div>
          </div>
          {owners.map((owner) => (
            <ListboxOption
              key={owner.name}
              value={owner}
              className="group flex cursor-default items-center justify-between rounded-xl gap-2 py-2 px-3 select-none data-[focus]:bg-white/10"
            >
              <div className="flex gap-3 items-center">
                <span className="w-9 h-9 rounded-full border border-white text-white inline-flex justify-center items-center">
                  {owner.name.charAt(0)}
                </span>
                <Typography className="text-SecondaryColor">
                  {owner.name}
                </Typography>
              </div>
              <Typography className="text-SecondaryColor">4</Typography>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
};
