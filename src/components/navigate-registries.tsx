"use client";

import React, { Suspense, useEffect, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useIntersection } from "@mantine/hooks";
import { getPaginatedRegistries } from "@/db";
import { RegistryCard } from "./registry-card";
import { RegistriesType } from "@/db/registries/registries";
import { RegistryCardLoader } from "./loaders/registry-card-loader";
import { useSearchParams } from "next/navigation";

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

  const { status, data, isFetchingNextPage, fetchNextPage, refetch } =
    useInfiniteQuery({
      queryKey: ["registries"],
      queryFn: async ({ pageParam }) => {
        const response = await getPaginatedRegistries(
          pageParam.toString(),
          "5",
          searchParams.getAll("stack"),
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
  if (status === "error") return <div>An error occurred</div>;

  const registries =
    data?.pages.flatMap((page) => page.data) ?? initialRegistries;

  return (
    <>
      {registries.map((item, itemIndex) => {
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
            <Suspense fallback={<RegistryCardLoader />}>
              <RegistryCard key={item.slug} registry={item} />
            </Suspense>
          );
        }
      })}

      {isFetchingNextPage && <div>Loading more...</div>}
    </>
  );
};
