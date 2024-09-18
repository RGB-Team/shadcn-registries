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
import { RegistriesType, Registry } from "@/db/registries/registries";

const components = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "font-heading mt-2 scroll-m-20 text-4xl font-bold",
        className,
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0",
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        "font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className={cn(
        "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className={cn(
        "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a
      className={cn("font-medium underline underline-offset-4", className)}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn("rounded-md", className)} alt={alt} {...props} />
  ),
  hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-4 md:my-8" {...props} />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn("m-0 border-t p-0 even:bg-muted", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        "relative rounded px-[0.3rem] bg-muted font-mono text-sm",
        className,
      )}
      {...props}
    />
  ),
};

type MarkDownReaderProps = {
  url: string;
};

export const MarkDownReader = ({ url }: MarkDownReaderProps) => {
  const [loading, setLoading] = React.useState(false);
  const [markdown, setMarkDown] = React.useState();

  React.useEffect(() => {
    const fetchMarkDown = async () => {
      setLoading(true);
      const markdown_code = await axios.get(url);
      setMarkDown(markdown_code.data);
      setLoading(false);
    };

    fetchMarkDown();
  }, [url]);

  return loading ? (
    <Skeleton className="h-96 bg-muted" />
  ) : (
    <ReactMarkdown
      linkTarget="_blank"
      remarkPlugins={[gfm]}
      className="p-2 pb-3"
      components={components}
    >
      {markdown ?? ("" as string)}
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
  const [loading, setLoading] = React.useState(false);
  const [registry, setRegistry] = React.useState<any>();

  React.useEffect(() => {
    const fetchRegistry = async () => {
      setLoading(true);
      const registry_code = await axios.get(lib.github_registry);
      setRegistry(registry_code.data);
      setLoading(false);
    };

    fetchRegistry();
  }, [lib]);
  return loading ? (
    <Skeleton className="h-96 bg-muted" />
  ) : (
    <ScrollArea className="h-96 rounded-xl group">
      <div className="rounded-xl group">
        <ReactJson
          src={registry}
          theme="monokai"
          enableClipboard
          style={{
            padding: "8px",
            borderRadius: "12px",
          }}
        />
      </div>
      <div className="absolute top-2 right-3 group-hover:flex flex-col items-center gap-2 hidden">
        <ShareButton slug={`/registries/${id}`} />
        <CopyButton
          icon={"Terminal"}
          content={"npx shadcn@latest " + lib.github_registry}
        />
        <CopyButton
          toastMessage={"Copied to clipboard. Paste it, run it and enjoy."}
          content={lib.github_registry}
          slug={id}
        />
      </div>
    </ScrollArea>
  );
};
