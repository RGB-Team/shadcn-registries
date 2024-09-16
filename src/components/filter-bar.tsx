import { FilterIcon } from "lucide-react";
import { Button } from "@ui/button";
import { FilterCombobox } from "@components/filter-combobox";
import { TimeFilter } from "./time-filter";
import { getAllTags } from "@/db";
import { Suspense } from "react";

export const FilterBar = async () => {
  const tags = await getAllTags();
  return (
    <div className="w-full">
      <div className="hidden md:flex items-start md:items-center justify-end flex-col md:flex-row gap-2">
        <Suspense>
          <FilterCombobox tags={tags} />
        </Suspense>
        <TimeFilter />
      </div>
      <div className="flex md:hidden flex-col w-full items-start md:items-center gap-2">
        <div className="flex items-center justify-between w-full">
          <Suspense>
            <FilterCombobox tags={tags} />
          </Suspense>
          <Button size={"sm"} className="gap-1.5 w-fit">
            <FilterIcon className="size-4" />
            <span className="text-base">filter</span>
          </Button>
        </div>
        <TimeFilter />
      </div>
    </div>
  );
};
