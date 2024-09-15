"use client";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useCallback, useEffect, useState } from "react";
import { cn, isMacOs } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { FileIcon, Search } from "lucide-react";
import { Credenza, CredenzaContent } from "@ui/credenza";
import { ModeToggle } from "./toggle-theme";
import { Pages } from "@/config/pages-config";

export const SearchPopOver = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [mounted, setMounted] = useState(false);
  const isMac = isMacOs();
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }
        e.preventDefault();
        setIsOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSelect = useCallback((callback: () => unknown) => {
    setIsOpen(false);
    callback();
  }, []);

  const handleSearch = (query: string) => {
    setQuery(query);
  };

  useEffect(() => {
    if (!isOpen) setQuery("");
  }, [isOpen]);

  useEffect(() => {
    if (mounted) return;
    setMounted(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return mounted ? (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="size-9 flex md:hidden"
        onClick={() => setIsOpen(true)}
      >
        <Search className="size-4" />
      </Button>
      <Button
        variant="outline"
        className={cn(
          "relative h-8 justify-start w-full hidden md:flex rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64",
        )}
        onClick={() => setIsOpen(true)}
      >
        <span className="truncate inline-flex ">Search registry</span>

        <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 flex ">
          <span className="text-xs">{isMac ? "⌘" : "Ctrl"}</span>K
        </kbd>
      </Button>
      <Credenza open={isOpen} onOpenChange={setIsOpen}>
        <CredenzaContent className="overflow-hidden p-0">
          <Command>
            <CommandInput
              placeholder="Search registry..."
              value={query}
              onValueChange={handleSearch}
              className="h-9"
            />
            <CommandList>
              <CommandEmpty>No item found.</CommandEmpty>
              <CommandGroup>
                {Pages.map((item) => (
                  <CommandItem
                    key={item.title}
                    value={item.title}
                    onSelect={() => {
                      handleSelect(() =>
                        router.push(`/registries/${item.title}`),
                      );
                    }}
                  >
                    {item.title}
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandGroup className="block md:hidden" heading="Theme">
                <CommandItem className="rounded-lg cursor-pointer h-9">
                  <ModeToggle isDesktop={false} />
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </CredenzaContent>
      </Credenza>
    </>
  ) : null;
};
