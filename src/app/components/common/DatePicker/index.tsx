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

interface Props {
  className?: string;
}
export function DatePicker({ className }: Props) {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            `${className} w-full sm:w-[128px] font-normal justify-between bg-boxOutline hover:bg-boxOutline hover:text-SecondaryColor text-SecondaryColor border-none`,
            !date &&
              "text-muted-foreground bg-boxOutline text-SecondaryColor border-none text-[12px] "
          )}
        >
          {date ? format(date, "P") : <span>Pick a date</span>}

          <CalendarIcon className=" h-4 w-4 text-SecondaryColor" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
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
