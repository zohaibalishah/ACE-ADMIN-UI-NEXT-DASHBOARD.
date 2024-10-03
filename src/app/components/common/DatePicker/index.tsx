"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Typography } from "../Typography";

interface Props {
  className?: string;
  placeholder?: string;
}
export function DatePicker({ className, placeholder }: Props) {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            `${className} w-full sm:w-[254.5px] h-[56px] rounded-full font-normal justify-between bg-bgDark bg-opacity-50  hover:bg-bgDark hover:text-SecondaryColor text-SecondaryColor border-none`,
            !date &&
              "text-muted-foreground bg-bgDark bg-opacity-50 z-50  text-SecondaryColor border-none text-[12px] "
          )}
        >
          {date ? (
            format(date, "P")
          ) : (
            <Typography className="text-SecondaryColor/50">
              {placeholder}
            </Typography>
          )}

          <CalendarIcon className=" h-4 w-4 text-SecondaryColor" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 z-[1050]">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          pagedNavigation
        />
      </PopoverContent>
    </Popover>
  );
}
