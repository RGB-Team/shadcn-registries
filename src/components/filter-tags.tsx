"use client";

import { Badge } from "@ui/badge";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

type FilterTagsProps = {
  tags: string[];
};

export const FilterTags = ({ tags }: FilterTagsProps) => {
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

  return (
    <div className="flex items-center gap-2">
      {tags.slice(0, 4).map((tag, idx) => (
        <Badge
          variant={
            searchParams.getAll("stack").includes(`${tag}`)
              ? "default"
              : "secondary"
          }
          onClick={() => handleTagClick(tag)}
          key={`filter-${tag}-${crypto.randomUUID()}`}
          className="cursor-pointer"
        >
          {tag}
        </Badge>
      ))}
    </div>
  );
};
