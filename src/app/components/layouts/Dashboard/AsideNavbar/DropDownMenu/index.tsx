"use client";
import { MImage, Typography } from "@/app/components/common";
import { IMenuItem } from "@/app/utils/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const DropDownMenu = ({
  item,
  setIsOpen,
}: {
  item: IMenuItem;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
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
                  <div
                    key={index}
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
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
    </>
  );
};
