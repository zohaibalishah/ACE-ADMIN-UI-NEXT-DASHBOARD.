"use client";
import { MImage, Typography } from "@/app/components/common";
import { IMenuItem } from "@/app/utils/data";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoChevronDown } from "react-icons/io5";

export const DropDownMenu = ({ item }: { item: IMenuItem }) => {
  const pathname = usePathname();
  const active = item?.dropdown?.some((i) => pathname?.includes(i?.link));

  return (
    <li
      className={`lg:h-full transition-all duration-500 list-none px-3 py-2.5 rounded-2xl ${
        active ? "text-SecondaryColor bg-PrimaryColor" : ""
      }`}
    >
      <Menu>
        <MenuButton className={"lg:h-full"}>
          <div className={`flex gap-2 items-center h-full`}>
            <MImage src={item.icon} w={24} h={24} alt="iconNav" />
            <Typography
              className={`transition-all duration-500 h-full flex items-center lg:text-secondary ${
                active
                  ? " bg-PrimaryColor !text-SecondaryColor"
                  : "border-transparent"
              }`}
            >
              {item.title}
            </Typography>
            <IoChevronDown className="text-lg" />
          </div>
        </MenuButton>
        <MenuItems
          anchor="bottom"
          className={
            "relative z-50 bg-bgShadow text-SecondaryColor px-2 py-2 ms-4 mt-4 w-[270px]"
          }
        >
          {item.dropdown?.map((subItem, index) => {
            const subActive = subItem.link === pathname;
            return (
              <MenuItem key={subItem.link || index}>
                {/* Updated key */}
                <Link
                  href={subItem.link}
                  className={` mb-4 px-2 flex gap-x-3 ${
                    subActive
                      ? "text-SecondaryColor bg-PrimaryColor p-2 rounded-xl"
                      : ""
                  }`}
                >
                  <MImage
                    src={subItem.icon}
                    w={18}
                    h={20}
                    alt="icon"
                    className="object-scale-down"
                  />
                  <Typography className={``}>{subItem?.title}</Typography>
                </Link>
              </MenuItem>
            );
          })}
        </MenuItems>
      </Menu>
    </li>
  );
};
