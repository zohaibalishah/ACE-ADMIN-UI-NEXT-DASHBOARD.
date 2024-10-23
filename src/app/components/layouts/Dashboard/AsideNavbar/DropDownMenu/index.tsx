"use client";
import { MImage, Typography } from "@/app/components/common";
import { IMenuItem } from "@/app/utils/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

export const DropDownMenu = ({ item }: { item: IMenuItem }) => {
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const active = item?.dropdown?.some((i) => pathname?.includes(i?.link));

  return (
    <>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger
            className={`flex gap-2 justify-between items-center hover:bg-PrimaryColor/40 rounded-xl w-full pl-4 pr-3 h-[48px] ${
              active ? "bg-PrimaryColor text-SecondaryColor" : ""
            }   `}
          >
            <div className={`flex items-center gap-3`}>
              <MImage src={item.icon} w={24} h={24} alt="iconNav" />
              <Typography className="text-SecondaryColor text-nowrap">
                {item.title}
              </Typography>
            </div>
            <ChevronDown className="h-4 w-4 shrink-0 text-white transition-transform duration-200" />
          </AccordionTrigger>
          <AccordionContent>
            <ul className="px-5 py-2 w-full flex flex-col gap-2">
              {item.dropdown?.map((subItem, index) => {
                const subActive = subItem.link === pathname;
                return (
                  <div key={index}>
                    <Link
                      href={subItem.link}
                      className={`flex gap-x-3 w-full rounded-xl h-[45px] px-2 items-center hover:bg-PrimaryColor/40 text-SecondaryColor ${
                        subActive ? "bg-PrimaryColor p-2 rounded-xl" : ""
                      }`}
                    >
                      <MImage
                        src={subItem.icon}
                        w={24}
                        h={24}
                        alt="icon"
                        className="object-scale-down"
                      />
                      <Typography>{subItem?.title}</Typography>
                    </Link>
                  </div>
                );
              })}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* <ul className="px-2 py-2">
        {item.dropdown?.map((subItem, index) => {
          const subActive = subItem.link === pathname;
          return (
            <MenuItem key={subItem.link || index}>
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
                <Typography>{subItem?.title}</Typography>
              </Link>
            </MenuItem>
          );
        })}
      </ul> */}
    </>
  );
};
