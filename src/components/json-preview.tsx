"use client";

import { CopyButton } from "./copy-button";
import dynamic from "next/dynamic";
import { Skeleton } from "@ui/skeleton";
import { Button } from "./ui/button";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ReactJson = dynamic(() => import("react-json-view"), {
  ssr: false,
  loading: () => <Skeleton className="max-h-96 bg-muted" />,
});

export const JsonPreview = ({
  registry_link,
  slug,
}: {
  registry_link: string;
  slug: string;
}) => {
  const { isLoading, error, data, refetch, isRefetching, isFetching } =
    useQuery({
      queryKey: ["full-registry"],
      queryFn: async () => {
        const registry_code = await axios.get(registry_link);
        return registry_code.data;
      },
    });

  if (error?.message) {
    return (
      <div className="h-fit md:h-96 flex flex-col gap-2 items-start md:items-center justify-center w-full">
        Seems that we&apos;re facing an issue with this registry
        <Button onClick={() => refetch()}>try again</Button>
      </div>
    );
  }
  return isLoading || isRefetching || isFetching ? (
    <Skeleton className="h-96 bg-muted" />
  ) : (
    <div className="relative rounded-xl group">
      <ReactJson
        src={data}
        theme="monokai"
        enableClipboard
        style={{
          padding: "8px",
          borderRadius: "12px",
        }}
      />
      <div className="absolute right-2 top-2 group-hover:flex hidden">
        <CopyButton slug={slug} content={data} />
      </div>
    </div>
  );
};
