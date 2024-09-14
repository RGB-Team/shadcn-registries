import { FilterIcon } from "lucide-react";
import { Button } from "@ui/button";
import { Combobox } from "@ui/combobox";
import { TimeFilter } from "./time-filter";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

export const FilterBar = () => {
  return (
    <div className="w-full" >
      <div className="hidden md:flex items-start md:items-center justify-end flex-col md:flex-row gap-2">
        <Combobox data={frameworks} />
        <TimeFilter />
        <Button size={"sm"} className="gap-1.5 w-fit">
          <FilterIcon className="size-4" />
          <span className="text-base">filter</span>
        </Button>
      </div>
      <div className="flex md:hidden flex-col w-full items-start md:items-center gap-2">
        <div className="flex items-center justify-between w-full" >
          <Combobox data={frameworks} />
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
