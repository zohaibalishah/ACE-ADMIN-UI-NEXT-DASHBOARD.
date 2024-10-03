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

interface Props {
  className?: string;
}
export function DatePickerSecondary({ className }: Props) {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            `${className} w-full sm:w-[280px] justify-start text-left font-normal border-boxOutline bg-boxOutline hover:bg-boxOutline text-SecondaryColor hover:text-SecondaryColor`,
            !date && "text-muted-foreground text-SecondaryColor"
          )}
        >
          <LucideCalendarDays className="mr-6 h-[20px] w-[18px]" />
          {date ? format(date, "PP") : <Typography>Pick a date</Typography>}
        </Button>
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
