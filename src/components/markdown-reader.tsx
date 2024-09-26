"use client";

import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { ScrollArea } from "@ui/scroll-area";
import { cn } from "@/lib/utils";
import { CopyButton } from "./copy-button";
import { ShareButton } from "./share-button";
import React from "react";
import dynamic from "next/dynamic";
import { Skeleton } from "@ui/skeleton";
import axios from "axios";
import { Registry } from "@/db/registries/registries";
import { useQuery } from "@tanstack/react-query";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@ui/tooltip";

const components = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn("mb-4 border-b pb-2 text-4xl font-semibold", className)}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn("mt-8 mb-4 text-3xl font-semibold", className)}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn("mt-6 mb-4 text-2xl font-semibold", className)}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn("mt-6 mb-4 text-xl font-semibold", className)}
      {...props}
    />
  ),
  h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className={cn("mt-6 mb-4 text-lg font-semibold", className)}
      {...props}
    />
  ),
  h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className={cn("mt-6 mb-4 text-base font-semibold", className)}
      {...props}
    />
  ),
  a: ({
    className,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className={cn("text-blue-600 hover:underline", className)} {...props} />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className={cn("mb-4 leading-6", className)} {...props} />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("mb-4 pl-8 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn("mb-4 pl-8 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li className={cn("mb-2", className)} {...props} />
  ),
  blockquote: ({
    className,
    ...props
  }: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className={cn("mb-4 pl-4 border-l-4 border-gray-300 italic", className)}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={cn("max-w-full rounded-md", className)}
      alt={alt}
      {...props}
    />
  ),
  hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-6 border-t border-gray-300" {...props} />
  ),
  table: ({
    className,
    ...props
  }: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div className="mb-4 overflow-x-auto">
      <table
        className={cn("min-w-full border-collapse", className)}
        {...props}
      />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className={cn("border-t", className)} {...props} />
  ),
  th: ({
    className,
    ...props
  }: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        "px-6 py-3 text-left text-xs font-medium uppercase tracking-wider",
        className,
      )}
      {...props}
    />
  ),
  td: ({
    className,
    ...props
  }: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn("px-6 py-4 whitespace-nowrap text-sm", className)}
      {...props}
    />
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn("px-1.5 py-0.5 rounded font-mono text-sm", className)}
      {...props}
    />
  ),
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className={cn("mb-4 p-4 rounded bg-muted overflow-x-auto", className)}
      {...props}
    />
  ),
};

type MarkDownReaderProps = {
  url: string;
};

export const MarkDownReader = ({ url }: MarkDownReaderProps) => {
  const { isLoading, error, data, refetch, isFetching, isRefetching } =
    useQuery({
      queryKey: [`markdown-registry-${url}`],
      queryFn: async () => {
        const registry_code = await axios.get(url);
        return registry_code.data;
      },
    });

  if (error) {
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
    <ReactMarkdown
      linkTarget="_blank"
      remarkPlugins={[gfm]}
      className="p-2 pb-3"
      components={components}
    >
      {data ?? ("" as string)}
    </ReactMarkdown>
  );
};

const ReactJson = dynamic(() => import("react-json-view"), {
  ssr: false,
  loading: () => <Skeleton className="max-h-96 bg-muted" />,
});

type CardMarkdownProps = {
  lib: Registry;
  id: string;
};

export const CardMarkdown = ({ lib, id }: CardMarkdownProps) => {
  const { isLoading, error, data, isFetching, isRefetching, refetch } =
    useQuery({
      queryKey: [`card-registry-${id}`],
      queryFn: async () => {
        const registry_code = await axios.get(lib.github_registry);
        return registry_code.data;
      },
    });

  if (error) {
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
    <ScrollArea className="h-96 rounded-xl group">
      <div className="rounded-xl group">
        <ReactJson
          src={data}
          theme="monokai"
          enableClipboard
          style={{
            padding: "8px",
            borderRadius: "12px",
          }}
        />
      </div>
      <div className="absolute top-2 right-3 group-hover:flex flex-col items-center gap-2 hidden">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <ShareButton slug={`/registries/${id}`} />
            </TooltipTrigger>
            <TooltipContent>
              <p>Share</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <CopyButton
                icon={"Terminal"}
                content={"npx shadcn@latest add" + lib.github_registry}
              />
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>command</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <CopyButton
                toastMessage={
                  "Copied to clipboard. Paste it, run it and enjoy."
                }
                content={lib.github_registry}
                slug={id}
              />
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>registry link</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </ScrollArea>
  );
};
