"use client";

import { CopyButton } from "./copy-button";
import dynamic from "next/dynamic";
import { Skeleton } from "@ui/skeleton";

const ReactJson = dynamic(() => import("react-json-view"), {
  ssr: false,
  loading: () => <Skeleton className="max-h-96 bg-muted" />,
});

export const JsonPreview = ({ data, slug }: { data: any; slug: string }) => {
  return (
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
