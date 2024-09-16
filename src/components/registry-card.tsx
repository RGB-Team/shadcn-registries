"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@ui/card";
import Link from "next/link";
import { cn } from "@lib/utils";
import { CardMarkdown } from "./markdown-reader";
import { Avatar, AvatarFallback, AvatarImage } from "@ui/avatar";
import { Badge, badgeVariants } from "./ui/badge";
import { RegistriesType } from "@/db/registries/registries";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import {
  subMinutes,
  subHours,
  subDays,
  subWeeks,
  subMonths,
  subYears,
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from "date-fns";

type RegistryCardProps = {
  registry: RegistriesType;
};

const render = 4;

export const RegistryCard = ({ registry }: RegistryCardProps) => {
  const length = registry.tags.length;
  const leftAuthor = registry.authors.length - 5;
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleTagClick = (tag: string) => {
    const currentParams = new URLSearchParams(searchParams.toString());
    const currentStacks = currentParams.getAll("stack");

    if (currentStacks.includes(tag)) {
      const updatedStacks = currentStacks.filter((t) => t !== tag);
      currentParams.delete("stack");
      updatedStacks.forEach((t) => currentParams.append("stack", t));
    } else {
      currentParams.append("stack", tag);
    }
    const newUrl = `?${currentParams.toString()}`;
    router.push(newUrl);
  };

  const formatPassedTime = (date: Date) => {
    const now = new Date();

    // Calculate time differences in various units
    const minutes = differenceInMinutes(
      subMinutes(now, date.getMinutes()),
      date,
    );
    const hours = differenceInHours(subHours(now, date.getHours()), date);
    const days = differenceInDays(now, date);
    const months = differenceInMonths(subMonths(now, date.getMonth()), date);
    const years = differenceInYears(subYears(now, date.getFullYear()), date);

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
            {registry.tags.slice(0, render).map((tag, idx) => (
              <Badge
                key={idx}
                variant={
                  searchParams.getAll("stack").includes(tag)
                    ? "default"
                    : "secondary"
                }
                className={cn("cursor-pointer hover:z-[10] ")}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </Badge>
            ))}
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
