"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, LucideCalendarDays } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Typography } from "../Typography";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";

interface Props {
  className?: string;
  children?: React.ReactElement;
}
export function DatePickerSecondary({ className, children }: Props) {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        {children ? (
          React.cloneElement(children)
        ) : (
          <Button
            variant={"outline"}
            className={cn(
              `${className} flex justify-centerg gap-5 rounded-xl w-full sm:w-[220px] border-boxOutline bg-boxOutline hover:bg-boxOutline text-SecondaryColor hover:text-SecondaryColor`,
              !date && "text-muted-foreground text-SecondaryColor"
            )}
          >
            <MdOutlineChevronLeft className="text-SecondaryColor text-xl" />
            <div className="flex gap-2 items-center">
              <LucideCalendarDays className="h-[20px] w-[18px]" />
              {date ? format(date, "PP") : <Typography>Pick a date</Typography>}
            </div>
            <MdOutlineChevronRight className="text-SecondaryColor text-xl" />
          </Button>
        )}
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
