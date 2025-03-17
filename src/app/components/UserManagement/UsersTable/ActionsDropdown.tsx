"use client";

import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { HiDotsHorizontal } from "react-icons/hi";
import { IAction } from "@/app/base/types";
import { Typography } from "@/app/components/common";

interface IActionsDropdown {
  actions: IAction[];
  icon?: React.ReactElement;
}

export const ActionsDropdown = ({
  actions,
  icon,
}: IActionsDropdown): React.ReactElement => {
  const handleMenuButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Menu>
      <MenuButton onClick={handleMenuButtonClick}>
        <span className="w-8 h-8 rounded-full bg-transparent inline-flex justify-center items-center">
          <span className="text-white text-xl lg:text-2xl">
            {icon ?? <HiDotsHorizontal />}
          </span>
        </span>
      </MenuButton>

      <MenuItems
        transition
        anchor="bottom end"
        className="origin-top-right bg-bgBox border p-4 rounded-xl border-boxOutline transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 shadow-2xl shadow-black/15 flex flex-col gap-3"
      >
        {actions?.map((action, index) => (
          <MenuItem key={index}>
            <button
              className="inline-flex gap-2 items-center"
              onClick={action?.onClick}
            >
              <span className="text-xl text-SecondaryColor">{action.icon}</span>
              <Typography variant="bodyMedium" className="text-SecondaryColor">
                {action.title}
              </Typography>
            </button>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};
