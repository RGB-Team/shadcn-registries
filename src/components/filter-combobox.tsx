"use client";

import * as React from "react";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { Button } from "@ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@ui/sheet";
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "@extension/multi-select";
import { ScrollArea } from "./ui/scroll-area";
import { useRouter, useSearchParams } from "next/navigation";

type FilterComboboxProps = {
  tags: string[];
};

export function FilterCombobox({ tags }: FilterComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState([""]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const updateSearch = () => {
    const currentParams = new URLSearchParams(searchParams.toString());

    currentParams.delete("stack");

    value.forEach((tag) => {
      currentParams.append("stack", tag);
    });
    const newUrl = `?${currentParams.toString()}`;
    router.push(newUrl);
    setOpen(false);
  };

  const clearSearchParams = () => {
    router.push("/registries");
  };

  React.useEffect(() => {
    if (!searchParams) return;
    setValue(searchParams.getAll("stack"));
  }, [searchParams]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" aria-expanded={open}>
          Filter using a tag
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </SheetTrigger>
      <SheetContent className="py-8 flex flex-col">
        <MultiSelector
          values={value}
          onValuesChange={setValue}
          className="flex-1 flex flex-col"
        >
          <MultiSelectorTrigger disableRender={true}>
            <MultiSelectorInput placeholder="Filter using tags..." />
          </MultiSelectorTrigger>
          <ScrollArea className="flex-1">
            <MultiSelectorContent>
              <MultiSelectorList className="border-none p-0 bg-transparent shadow-none">
                {tags.map((tag) => (
                  <MultiSelectorItem key={`filter-item-${tag}`} value={tag} className="h-9 text-sm">
                    {tag}
                  </MultiSelectorItem>
                ))}
              </MultiSelectorList>
            </MultiSelectorContent>
          </ScrollArea>
        </MultiSelector>
        <div className="flex items-center justify-between ">
          <Button variant={"secondary"} onClick={clearSearchParams}>
            Clear Search
          </Button>
          <Button onClick={updateSearch}>Update Params</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
