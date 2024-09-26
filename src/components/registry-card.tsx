"use client";

import { Card, CardContent, CardFooter } from "@ui/card";
import Link from "next/link";
import { cn, formatPassedTime } from "@lib/utils";
import { CardMarkdown } from "./markdown-reader";
import { Avatar, AvatarFallback, AvatarImage } from "@ui/avatar";
import { RegistriesType } from "@/db/registries/registries";
import React, { Suspense } from "react";
import { FilterTags } from "./filter-tags";
import { Skeleton } from "@ui/skeleton";
import { useMediaQuery } from "@hooks/use-media-query";

type RegistryCardProps = {
  registry: RegistriesType;
};

const mobile = "(max-width: 640px)";

export const RegistryCard = ({ registry }: RegistryCardProps) => {
  const length = registry.tags.length;
  const isMobile = useMediaQuery(mobile);
  const render = isMobile ? 2 : 4;
  const leftAuthor = registry.authors.length - render;

  return (
    <Card
      className={cn(
        "rounded-xl relative overflow-hidden col-span-2 py-3 px-3 space-y-3",
      )}
    >
      <Link
        href={`/registries/${registry.slug}`}
        className="absolute inset-0"
      ></Link>
      <div className="w-full flex items-center justify-between px-0 text-primary">
        <h3 className="text-xl font-bold capitalize truncate max-w-40 w-full">
          {registry.title}
        </h3>
        <p>{formatPassedTime(registry.createdAt)}</p>
      </div>
      <CardContent className="relative bg-black rounded-2xl max-h-96 px-0 ">
        <CardMarkdown lib={registry.registry} id={registry.slug} />
      </CardContent>
      <CardFooter className="flex justify-between px-0 py-2">
        <div className="relative">
          <div className="flex items-center gap-2">
            <Suspense
              fallback={[...Array(2)].map((_, idx) => (
                <Skeleton className="h-8 rounded-lg" key={`${idx}tag`} />
              ))}
            >
              <FilterTags tags={registry.tags.slice(0, render)} />
            </Suspense>
            {length - render > 0 && (
              <Link href={`/registries/${registry.slug}`} className="text-sm">
                +{length - render} more
              </Link>
            )}
          </div>
        </div>
        <div className="flex items-center flex-row-reverse gap-2 relative">
          {registry.authors.slice(0, render).map((author, idx) => (
            <Link
              target="_blank"
              href={author.url}
              key={`author-${author.name}`}
              className="absolute group hover:z-[5] transition-all"
              style={{
                right: `${idx * 28}px`,
              }}
            >
              <Avatar className="group-hover:ring-1 ring-white/20">
                <AvatarImage
                  src={author.avatar}
                  alt={author.name}
                  height={40}
                  width={40}
                />
                <AvatarFallback>{author.name.slice(0, 3)}</AvatarFallback>
              </Avatar>
            </Link>
          ))}
          {leftAuthor > 0 && (
            <div className="size-10 rounded-full flex items-center justify-center z-20 bg-muted/80 absolute" style={{
              right: `${(leftAuthor + 3) * 28}px`,
            }}>+{leftAuthor}</div>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};
