"use client";

import React, { Suspense, useEffect, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useIntersection } from "@mantine/hooks";
import { getPaginatedRegistries } from "@/db";
import { RegistryCard } from "./registry-card";
import { RegistriesType } from "@/db/registries/registries";
import { RegistryCardLoader } from "./loaders/registry-card-loader";
import { useSearchParams } from "next/navigation";
import { Button } from "./ui/button";

type NavigateRegistriesProps = {
  initialRegistries: RegistriesType[];
};

export const NavigateRegistries = ({
  initialRegistries,
}: NavigateRegistriesProps) => {
  const lastBoardRef = useRef<HTMLElement>(null);
  const searchParams = useSearchParams();

  const { ref, entry } = useIntersection({
    root: lastBoardRef.current,
    threshold: 1,
  });

  const from = searchParams.get("from");
  const to = searchParams.get("to");

  const dateParams =
    from && to
      ? {
          from,
          to,
        }
      : undefined;

  const { status, data, isFetchingNextPage, fetchNextPage, refetch } =
    useInfiniteQuery({
      queryKey: ["registries"],
      queryFn: async ({ pageParam }) => {
        const response = await getPaginatedRegistries(
          pageParam.toString(),
          "5",
          searchParams.getAll("stack"),
          dateParams,
        );
        return response;
      },
      initialPageParam: 1,
      getNextPageParam: (_, page) => page.length + 1,
    });

  useEffect(() => {
    if (entry?.isIntersecting) {
      fetchNextPage();
    }
  }, [entry, fetchNextPage]);

  useEffect(() => {
    refetch();
  }, [searchParams]);

  if (status === "pending")
    return [...Array(2)].map((_, idx) => (
      <RegistryCardLoader key={idx + "fetch"} />
    ));

  if (status === "error")
    return (
      <div>
        <h3>An error occurred</h3>
        <Button onClick={() => refetch()}>Try Refetch</Button>
      </div>
    );

  const registries =
    data?.pages.flatMap((page) => page.data) ?? initialRegistries;

  return (
    <>
      {registries.length > 0 ? (
        registries.map((item, itemIndex) => {
          if (itemIndex === registries.length - 1) {
            return (
              <div key={item.slug} ref={ref}>
                <Suspense fallback={<RegistryCardLoader />}>
                  <RegistryCard registry={item} />
                </Suspense>
              </div>
            );
          } else {
            return (
              <Suspense key={item.slug} fallback={<RegistryCardLoader />}>
                <RegistryCard registry={item} />
              </Suspense>
            );
          }
        })
      ) : (
        <div className="flex items-center justify-center text-2xl max-h-96 h-full">
          No registries are been found in this particle filter
        </div>
      )}

      {isFetchingNextPage && <div>Loading more...</div>}
    </>
  );
};
