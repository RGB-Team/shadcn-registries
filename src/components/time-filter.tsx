"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";
import { cn, getPresetRange, PRESETS } from "@lib/utils";
import { Button } from "@ui/button";
import { Calendar } from "@ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@ui/popover";

export function TimeFilter({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 0),
  });

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-72 justify-start text-left font-normal",
              !date && "text-muted-foreground",
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 flex gap-2" align="center">
          <div className="flex flex-col space-y-2 p-2">
            {PRESETS.map((item) => (
              <Button
                key={item.label}
                className="h-8 px-2 text-sm"
                variant={
                  date?.from?.getDate() ===
                  getPresetRange(item.name).from?.getDate()
                    ? "default"
                    : "secondary"
                }
                onClick={() => {
                  setDate(getPresetRange(item.name));
                }}
              >
                {item.label}
              </Button>
            ))}
          </div>
          <Calendar
            className="pl-0"
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            disabled={{
              after: new Date(),
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
