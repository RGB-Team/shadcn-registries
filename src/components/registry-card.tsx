"use client";

import { Card, CardContent, CardFooter } from "@ui/card";
import Link from "next/link";
import { cn } from "@lib/utils";
import { CardMarkdown } from "./markdown-reader";
import { Avatar, AvatarFallback, AvatarImage } from "@ui/avatar";
import { RegistriesType } from "@/db/registries/registries";
import React, { Suspense } from "react";
import {
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
  differenceInMonths,
  differenceInYears,
  subDays,
} from "date-fns";
import { FilterTags } from "./filter-tags";
import { Skeleton } from "@ui/skeleton";
import { useMediaQuery } from "@hooks/use-media-query";

type RegistryCardProps = {
  registry: RegistriesType;
};

const mobile = "(max-width: 640px)";

export const RegistryCard = ({ registry }: RegistryCardProps) => {
  const length = registry.tags.length;
  const leftAuthor = registry.authors.length - 5;

  const formatPassedTime = (date: Date) => {
    const now = new Date();

    // Calculate time differences using subDays and other subtraction functions
    const daysAgo = subDays(now, differenceInDays(now, date));

    const minutes = differenceInMinutes(now, date);
    const hours = differenceInHours(now, date);
    const days = differenceInDays(now, date);
    const months = differenceInMonths(now, date);
    const years = differenceInYears(now, date);

    console.log(minutes, hours, days, months, years);

    // Determine the appropriate time unit and format the string
    let timeUntilString = "";
    if (years > 0) {
      timeUntilString = `${years} year${years > 1 ? "s" : ""} ago`;
    } else if (months > 0) {
      timeUntilString = `${months} month${months > 1 ? "s" : ""} ago`;
    } else if (days > 0) {
      timeUntilString = `${days} day${days > 1 ? "s" : ""} ago`;
    } else if (hours > 0) {
      timeUntilString = `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else if (minutes > 0) {
      timeUntilString = `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else {
      timeUntilString = "now";
    }

    return timeUntilString;
  };

  const isMobile = useMediaQuery(mobile);
  const render = isMobile ? 3 : 4;
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
          {registry.authors.slice(0, 4).map((author, idx) => (
            <Link
              target="_blank"
              href={author.url}
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
            <div className="size-10 rounded-full bg-muted">+{leftAuthor}</div>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};
