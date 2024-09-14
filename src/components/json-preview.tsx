"use client";
import { CopyButton } from "./copy-button";
import dynamic from "next/dynamic";

const ReactJson = dynamic(
  () => import("react-json-view"),
  { ssr: false }
)


export const JsonPreview = ({ data }: { data: any }) => {
  return (
    <div className="relative bg-muted rounded-xl group">
      <ReactJson
        src={data}
        theme="monokai"
        enableClipboard
        style={{
          padding: "8px",
          backgroundColor: "transparent",
        }}
      />
      <div className="absolute right-2 top-2 group-hover:flex hidden">
        <CopyButton content={data} />
      </div>
    </div>
  );
};
