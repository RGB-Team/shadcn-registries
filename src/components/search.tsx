"use client";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@components/ui/command";
import { useCallback, useEffect, useState, useTransition } from "react";
import { cn, isMacOs } from "@lib/utils";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { Credenza, CredenzaContent } from "@ui/credenza";
import { useDebounce } from "@hooks/use-debounce";
import { getPaginatedSearch } from "@/db";
import { FuseResult } from "fuse.js";
import { RegistriesType } from "@/db/registries/registries";
import { Skeleton } from "./ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const SearchPopOver = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResult] = useState<FuseResult<RegistriesType>[] | null>();
  const debouncedQuery = useDebounce(query, 500);
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
    if (debouncedQuery.length === 0) setResult(null);

    if (debouncedQuery.length > 0) {
      startTransition(async () => {
        const results = await getPaginatedSearch(debouncedQuery);
        setResult(results);
      });
    }
  }, [debouncedQuery]);

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
            />
            <CommandList>
              <CommandEmpty
                className={cn(
                  isPending ? "hidden" : "py-6 text-center text-sm",
                )}
              >
                No products found.
              </CommandEmpty>
              {isPending ? (
                <div className="space-y-1 overflow-hidden px-1 py-2">
                  <Skeleton className="h-4 w-10 rounded" />
                  <Skeleton className="h-8 rounded-sm" />
                  <Skeleton className="h-8 rounded-sm" />
                </div>
              ) : (
                <CommandGroup className="space-y-2">
                  {results?.map((item) => {
                    const registry = item.item;
                    return (
                      <CommandItem
                        key={registry.title}
                        value={registry.title}
                        className="flex gap-2 items-center"
                        onSelect={() => {
                          handleSelect(() =>
                            router.push(`/registries/${registry.slug}`),
                          );
                        }}
                      >
                        <Avatar className="size-10">
                          <AvatarImage
                            src={registry.authors[0].avatar}
                            alt={registry.authors[0].name}
                            height={40}
                            width={40}
                            className="rounded-xl"
                          />
                          <AvatarFallback>
                            {registry.authors[0].name.slice(0, 3)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col gap-y-1 items-start">
                          <h3 className="text-sm capitalize">
                            {registry.title}
                          </h3>
                          <p className="text-gray-400 text-sm truncate max-w-full ">
                            {registry.searchDescription}
                          </p>
                        </div>
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
              )}
            </CommandList>
          </Command>
        </CredenzaContent>
      </Credenza>
    </>
  ) : null;
};
